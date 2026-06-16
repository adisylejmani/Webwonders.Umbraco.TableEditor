import { css, customElement, html, state } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement } from "@umbraco-cms/backoffice/modal";
import type { TableCreateModalData, TableCreateModalValue } from "./table-create-modal.token";
import * as XLSX from "xlsx";
import Papa from "papaparse";

type Source = "scratch" | "file";

@customElement("webwonders-table-create-modal")
export class WebwondersTableCreateModalElement extends UmbModalBaseElement<
    TableCreateModalData,
    TableCreateModalValue
> {
    @state() private _source: Source | null = null;

    @state() private _rows = 3;
    @state() private _columns = 3;

    @state() private _fileName = "";
    @state() private _parsed: { columnNames: string[]; cellData: string[][] } | null = null;
    @state() private _parseError = "";

    connectedCallback(): void {
        super.connectedCallback();
        if (typeof this.data?.rows === "number" && this.data.rows > 0) this._rows = this.data.rows;
        if (typeof this.data?.columns === "number" && this.data.columns > 0) this._columns = this.data.columns;
    }

    private _selectSource(source: Source) {
        this._source = source;
        this._parsed = null;
        this._parseError = "";
        this._fileName = "";
    }

    private _onRowsInput(e: InputEvent) {
        const raw = Number((e.target as HTMLInputElement).value);
        this._rows = Number.isFinite(raw) ? Math.max(1, Math.min(50, raw)) : 1;
    }

    private _onColumnsInput(e: InputEvent) {
        const raw = Number((e.target as HTMLInputElement).value);
        this._columns = Number.isFinite(raw) ? Math.max(1, Math.min(20, raw)) : 1;
    }

    private _onFileChange(e: Event) {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) return;

        this._fileName = file.name;
        this._parseError = "";
        this._parsed = null;

        const ext = file.name.split(".").pop()?.toLowerCase();

        if (ext === "csv") {
            this._parseCsv(file);
        } else if (ext === "xlsx" || ext === "xls") {
            this._parseXlsx(file);
        } else {
            this._parseError = "Unsupported file type. Please upload an .xlsx, .xls or .csv file.";
        }
    }

    private _parseCsv(file: File) {
        Papa.parse<string[]>(file, {
            skipEmptyLines: true,
            complete: (result) => {
                const rows = result.data;
                if (!rows.length) {
                    this._parseError = "The CSV file appears to be empty.";
                    return;
                }
                const columnNames = rows[0].map((v) => String(v ?? ""));
                const cellData = rows.slice(1).map((row) =>
                    columnNames.map((_, i) => String(row[i] ?? ""))
                );
                this._parsed = { columnNames, cellData };
            },
            error: (err) => {
                this._parseError = `Failed to parse CSV: ${err.message}`;
            },
        });
    }

    private _parseXlsx(file: File) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target!.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];

                const raw: string[][] = XLSX.utils.sheet_to_json(sheet, {
                    header: 1,
                    defval: "",
                    raw: false,
                }) as string[][];

                if (!raw.length) {
                    this._parseError = "The Excel file appears to be empty.";
                    return;
                }

                const columnNames = raw[0].map((v) => String(v ?? ""));
                const colCount = columnNames.length;
                const cellData = raw.slice(1).map((row) =>
                    columnNames.map((_, i) => String(row[i] ?? ""))
                );

                // Handle merged cells: fill merged regions with the top-left value
                const merges: XLSX.Range[] = sheet["!merges"] ?? [];
                for (const merge of merges) {
                    const topLeftAddr = XLSX.utils.encode_cell({ r: merge.s.r, c: merge.s.c });
                    const topLeftVal = String(sheet[topLeftAddr]?.v ?? "");
                    for (let r = merge.s.r; r <= merge.e.r; r++) {
                        for (let c = merge.s.c; c <= merge.e.c; c++) {
                            if (r === 0) {
                                if (c < colCount) columnNames[c] = topLeftVal;
                            } else {
                                const dataRow = r - 1;
                                if (dataRow < cellData.length && c < colCount) {
                                    cellData[dataRow][c] = topLeftVal;
                                }
                            }
                        }
                    }
                }

                this._parsed = { columnNames, cellData };
            } catch {
                this._parseError = "Failed to read the Excel file.";
            }
        };
        reader.readAsArrayBuffer(file);
    }

    private _triggerFilePicker() {
        this.shadowRoot?.querySelector<HTMLInputElement>("#fileInput")?.click();
    }

    private _close() {
        this.modalContext?.reject();
    }

    private _submit() {
        if (this._source === "file" && this._parsed) {
            this.value = {
                rows: this._parsed.cellData.length,
                columns: this._parsed.columnNames.length,
                columnNames: this._parsed.columnNames,
                cellData: this._parsed.cellData,
            };
        } else {
            this.value = { rows: this._rows, columns: this._columns };
        }
        this.modalContext?.submit();
    }

    private get _canSubmit() {
        if (!this._source) return false;
        if (this._source === "file") return !!this._parsed;
        return true;
    }

    override render() {
        const headline = this.data?.headline ?? "Create table";

        return html`
            <uui-dialog-layout .headline=${headline}>
                <div class="content">
                    ${this._renderSourcePicker()}
                    ${this._source === "scratch" ? this._renderScratchFields() : null}
                    ${this._source === "file" ? this._renderFileFields() : null}
                </div>

                <div slot="actions">
                    <uui-button look="secondary" @click=${this._close} label="Cancel"></uui-button>
                    <uui-button
                        look="primary"
                        .disabled=${!this._canSubmit}
                        @click=${this._submit}
                        label="Create">
                    </uui-button>
                </div>
            </uui-dialog-layout>
        `;
    }

    private _renderSourcePicker() {
        return html`
            <div class="sourcePicker">
                <button
                    class=${["sourceOption", this._source === "scratch" ? "selected" : ""].filter(Boolean).join(" ")}
                    @click=${() => this._selectSource("scratch")}>
                    <uui-icon name="icon-grid-alt"></uui-icon>
                    <span>Create from scratch</span>
                </button>
                <button
                    class=${["sourceOption", this._source === "file" ? "selected" : ""].filter(Boolean).join(" ")}
                    @click=${() => this._selectSource("file")}>
                    <uui-icon name="icon-document"></uui-icon>
                    <span>Import from Excel / CSV</span>
                </button>
            </div>
        `;
    }

    private _renderScratchFields() {
        return html`
            <div class="fields">
                <uui-label for="inputRows">Rows</uui-label>
                <uui-input
                    id="inputRows"
                    type="number"
                    label="Rows"
                    min="1"
                    max="50"
                    .value=${String(this._rows)}
                    @input=${this._onRowsInput}>
                </uui-input>

                <uui-label for="inputColumns">Columns</uui-label>
                <uui-input
                    id="inputColumns"
                    type="number"
                    label="Columns"
                    min="1"
                    max="20"
                    .value=${String(this._columns)}
                    @input=${this._onColumnsInput}>
                </uui-input>
            </div>
        `;
    }

    private _renderFileFields() {
        return html`
            <div class="fileArea">
                <input
                    id="fileInput"
                    type="file"
                    accept=".xlsx,.xls,.csv"
                    class="hiddenInput"
                    @change=${this._onFileChange}>

                <uui-button look="secondary" @click=${this._triggerFilePicker} label="Choose file">
                    <uui-icon name="icon-upload"></uui-icon>
                    ${this._fileName ? this._fileName : "Choose file (.xlsx, .xls, .csv)"}
                </uui-button>

                ${this._parseError
                    ? html`<p class="error">${this._parseError}</p>`
                    : null}

                ${this._parsed
                    ? html`
                        <div class="preview">
                            <uui-icon name="icon-check"></uui-icon>
                            <span>
                                Detected <strong>${this._parsed.columnNames.length}</strong> columns
                                and <strong>${this._parsed.cellData.length}</strong> rows
                            </span>
                        </div>
                    `
                    : null}
            </div>
        `;
    }

    static styles = css`
        .content {
            display: flex;
            flex-direction: column;
            gap: var(--uui-size-6);
            min-width: 360px;
        }

        .sourcePicker {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--uui-size-4);
        }

        .sourceOption {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--uui-size-3);
            padding: var(--uui-size-6);
            border: 1px solid var(--uui-color-border);
            border-radius: var(--uui-border-radius);
            background: var(--uui-color-surface);
            color: var(--uui-color-text);
            cursor: pointer;
            transition: border-color 120ms ease-in-out, background-color 120ms ease-in-out;
            font-size: var(--uui-type-small-size);
        }

        .sourceOption:hover {
            background: var(--uui-color-surface-alt);
            border-color: var(--uui-color-border-emphasis);
        }

        .sourceOption.selected {
            border-color: var(--uui-color-selected);
            background: color-mix(in srgb, var(--uui-color-selected) 8%, transparent);
            color: var(--uui-color-selected);
        }

        .sourceOption uui-icon {
            font-size: 1.5rem;
        }

        .fields {
            display: grid;
            gap: var(--uui-size-4);
        }

        .fileArea {
            display: flex;
            flex-direction: column;
            gap: var(--uui-size-4);
        }

        .hiddenInput {
            display: none;
        }

        .preview {
            display: flex;
            align-items: center;
            gap: var(--uui-size-3);
            color: var(--uui-color-positive-emphasis, green);
            font-size: var(--uui-type-small-size);
        }

        .error {
            color: var(--uui-color-danger-emphasis);
            font-size: var(--uui-type-small-size);
            margin: 0;
        }
    `;
}

export { WebwondersTableCreateModalElement as element };

declare global {
    interface HTMLElementTagNameMap {
        "webwonders-table-create-modal": WebwondersTableCreateModalElement;
    }
}
