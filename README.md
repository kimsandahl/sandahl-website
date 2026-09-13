# sandahl.dk

Hjemmeside for Sandahl Miljørådgivning. Ren statisk HTML, CSS og JavaScript — ingen build-proces.

## Filer

| Fil | Indhold |
|---|---|
| `index.html` | Hele siden: forside, om, ydelser, samarbejde, kontakt |
| `style.css` | Al styling, inkl. farver og mobilvisning |
| `script.js` | Årstal i sidefod og afsendelse af kontaktformular |
| `logo.png` | Logo i headeren |
| `favicon.png`, `apple-touch-icon.png` | Ikon i browserfane og på mobil |
| `og-image.png` | Billede der vises, når linket deles |
| `profile.jpg` | Portræt i "Om mig" |
| `CNAME` | Fortæller GitHub Pages, at siden skal ligge på sandahl.dk |

## Kontaktformularen

Formularen sendes gennem Web3Forms til kontakt@sandahl.dk. Access key'en står i `index.html`
og er offentlig med vilje — den kan kun bruges til at sende mail til den adresse, der
oprettede den.

## Sådan rettes indholdet

Tekst og priser står direkte i `index.html`. Farverne er samlet øverst i `style.css`
under `:root`, så de kun skal ændres ét sted.

## Udgivelse

Siden hostes på GitHub Pages. Ændringer, der gemmes i `main`-branchen, er automatisk
online efter cirka et minut.
