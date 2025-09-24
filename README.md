# Coach-Chris-Webseite

## Manuell hinzuzufügende Dateien

Einige Assets liegen aus Upload-Gründen nicht im Git-Repository und müssen nach dem Merge manuell in den `public/`-Ordner hochgeladen werden:

- `public/logo.png`: Logo, das auf der Website verwendet wird.
- `public/Coach-Chris-Erste-Hilfe-Kit.pdf`: Das PDF für den Download-Button im Erste-Hilfe-Kit-Bereich.

Lade die Dateien nach dem Merge z.B. direkt über die GitHub-Weboberfläche in das Repository oder in dein Hosting hoch, damit sie für Besucher*innen verfügbar sind.


> 💡 **Hinweis:** Solltest du trotz vorhandener Datei im lokalen `public/`-Ordner nur eine kleine (~14 KB) HTML-Datei herunterladen oder eine Acrobat-
> Fehlermeldung erhalten, lag das bisher an dem Catch-all-Rewrite in `vercel.json`. Die Konfiguration wurde aktualisiert, sodass Vercel statische Assets
> wie `Coach-Chris-Erste-Hilfe-Kit.pdf` wieder direkt ausliefert. Prüfe nach einem Deploy trotzdem, ob die PDF in deinem Hosting liegt – sie ist nicht im
> Git-Repository versioniert und muss dort weiterhin manuell bereitgestellt werden (z. B. via Vercel-Dateiverwaltung).
