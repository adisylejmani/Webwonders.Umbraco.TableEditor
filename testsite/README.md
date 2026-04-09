# TableEditor Test Site

Local Umbraco site for developing and testing the `Webwonders.Umbraco.TableEditor` package.

## Running the site

```bash
cd testsite
dotnet run
```

Then visit `https://localhost:44363`.

## Backoffice login

| Field    | Value                |
|----------|----------------------|
| Email    | admin@example.com    |
| Password | adminpassword123!    |

## Notes

- Uses SQLite — database is created at `umbraco/Data/Umbraco.sqlite.db` on first run
- The package is referenced as a project reference, so changes to `src/` are reflected immediately on rebuild
