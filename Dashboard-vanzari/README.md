# 🚀 _PUSH-PPS-WEB — Folder pentru git push

Acesta e folder-ul de **staging** pentru push-uri în repo-ul GitHub `Eusebiudrlink/PPS-Web`.

Conține **exact** cele 4 fișiere live care trebuie să ajungă în `PPS-Web/Dashboard-vanzari/`:
- `sales-hub.html`
- `styles.css`
- `app.js`
- `data.js`

---

## Cum funcționează

1. **Claude** copiază aici fișierele actualizate din `Dashboard-Vanzari/` când zici „dă push"
2. **Claude** îți spune mesajul de commit propus
3. **Tu** rulezi în terminal local cele 3 comenzi de mai jos (din `LAST-COMMIT.txt`)

---

## Comenzile de push (template)

```bash
# 1. Copiază cele 4 fișiere în clona PPS-Web
cp "/Users/Sebi/Library/CloudStorage/GoogleDrive-damatar02@gmail.com/My Drive/00 - My Data/Desktop/JOB/PPS_Work/tools/Claude/Dashboard-Vanzari/_PUSH-PPS-WEB/"{sales-hub.html,styles.css,app.js,data.js} \
   "/Users/Sebi/Library/CloudStorage/GoogleDrive-damatar02@gmail.com/My Drive/00 - My Data/Desktop/JOB/PPS_Work/tools/Claude/PPS-Web/Dashboard-vanzari/"

# 2. Commit + push
cd "/Users/Sebi/Library/CloudStorage/GoogleDrive-damatar02@gmail.com/My Drive/00 - My Data/Desktop/JOB/PPS_Work/tools/Claude/PPS-Web"
git add Dashboard-vanzari/
git commit -m "MESAJ_AICI"
git push origin main
```

---

## Link public (după push)

https://eusebiudrlink.github.io/PPS-Web/Dashboard-vanzari/sales-hub.html

(Update durează 1–2 min după push. Hard refresh: `Cmd+Shift+R`)

---

## Bug recurent: `.git/index.lock`

Dacă apare:
```bash
rm "/Users/Sebi/Library/CloudStorage/GoogleDrive-damatar02@gmail.com/My Drive/00 - My Data/Desktop/JOB/PPS_Work/tools/Claude/PPS-Web/.git/index.lock"
```
