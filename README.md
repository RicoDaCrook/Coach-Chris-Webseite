# Coach-Chris-Webseite

## Manuell hinzuzufügende Dateien

Einige Assets liegen aus Upload-Gründen nicht im Git-Repository und müssen nach dem Merge manuell in den `public/`-Ordner hochgeladen werden:

- `public/logo.png`: Logo, das auf der Website verwendet wird.
- `public/Coach-Chris-Erste-Hilfe-Kit.pdf`: Das PDF für den Download-Button im Erste-Hilfe-Kit-Bereich.

Lade die Dateien nach dem Merge z.B. direkt über die GitHub-Weboberfläche in das Repository oder in dein Hosting hoch, damit sie für Besucher*innen verfügbar sind.


> 💡 **Hinweis:** Erhältst du beim Download nur eine kleine Datei (z. B. ~14 KB) oder kann Acrobat die Datei nicht öffnen, liegt das daran,
> dass dein Hosting statt des PDFs eine 404-Fehlerseite ausliefert. Lade die originale `Coach-Chris-Erste-Hilfe-Kit.pdf` erneut in den `public/`
> Ordner deines Deployments hoch (bei Vercel z. B. über die Dateiverwaltung), damit der Button wieder das echte Dokument bereitstellt.
