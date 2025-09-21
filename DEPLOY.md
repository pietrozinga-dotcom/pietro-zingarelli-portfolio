# 🚀 Guida al Deploy su GitHub Pages

Questa guida ti aiuterà a pubblicare il tuo portfolio su GitHub Pages in modo che sia accessibile online.

## 📋 Prerequisiti

- Account GitHub
- Git installato sul tuo computer
- Browser web

## 🔧 Passaggi per il Deploy

### 1. Creare un Repository GitHub

1. Vai su [GitHub.com](https://github.com) e accedi al tuo account
2. Clicca su "New repository" (pulsante verde)
3. Nome repository: `portfolio` (o il nome che preferisci)
4. Descrizione: "Portfolio personale di Pietro Zingarelli - ICT Student"
5. Seleziona "Public" per renderlo visibile a tutti
6. **NON** selezionare "Add a README file" (ne abbiamo già uno)
7. Clicca "Create repository"

### 2. Caricare i File

#### Opzione A: Tramite GitHub Web Interface

1. Nel repository appena creato, clicca "uploading an existing file"
2. Trascina tutti i file del portfolio nella finestra:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `profile-placeholder.svg`
   - `README.md`
3. Scrivi un messaggio di commit: "Initial commit - Portfolio setup"
4. Clicca "Commit changes"

#### Opzione B: Tramite Git Command Line

```bash
# Naviga nella cartella del progetto
cd "/Users/pietrozingarelli/Desktop/progetto curiculm"

# Inizializza il repository Git
git init

# Aggiungi tutti i file
git add .

# Fai il primo commit
git commit -m "Initial commit - Portfolio setup"

# Aggiungi il repository remoto (sostituisci USERNAME con il tuo username GitHub)
git remote add origin https://github.com/USERNAME/portfolio.git

# Carica i file su GitHub
git push -u origin main
```

### 3. Abilitare GitHub Pages

1. Vai nelle impostazioni del repository (tab "Settings")
2. Scorri fino alla sezione "Pages" nella sidebar sinistra
3. Sotto "Source", seleziona "Deploy from a branch"
4. Scegli "main" come branch
5. Seleziona "/ (root)" come cartella
6. Clicca "Save"

### 4. Attendere il Deploy

- GitHub impiegherà alcuni minuti per pubblicare il sito
- Riceverai un'email quando il deploy sarà completato
- Il tuo portfolio sarà disponibile su: `https://USERNAME.github.io/portfolio`

## 🔄 Aggiornare il Portfolio

Ogni volta che modifichi i file:

### Tramite GitHub Web Interface:
1. Vai al file che vuoi modificare
2. Clicca sull'icona della matita per editare
3. Fai le modifiche necessarie
4. Scrivi un messaggio di commit descrittivo
5. Clicca "Commit changes"

### Tramite Git Command Line:
```bash
# Aggiungi le modifiche
git add .

# Fai il commit
git commit -m "Descrizione delle modifiche"

# Carica su GitHub
git push origin main
```

## 🎨 Personalizzazione

### Aggiungere la Tua Foto Profilo

1. Sostituisci `profile-placeholder.svg` con la tua foto
2. Formato consigliato: JPG o PNG, dimensioni 400x400px
3. Rinomina il file in `profile.jpg`
4. Aggiorna il riferimento in `index.html`:
   ```html
   <img src="profile.jpg" alt="Pietro Zingarelli" id="profile-img">
   ```

### Modificare i Contenuti

- **Informazioni personali**: Modifica `index.html`
- **Stili e colori**: Modifica `styles.css`
- **Animazioni**: Modifica `script.js`

## 🔍 Verificare il Deploy

1. Vai su `https://USERNAME.github.io/portfolio`
2. Controlla che tutti gli elementi siano visibili
3. Testa le animazioni e l'interattività
4. Verifica la responsività su mobile

## 🛠️ Risoluzione Problemi

### Il sito non si aggiorna
- Attendi 5-10 minuti per la propagazione
- Forza il refresh con Ctrl+F5 (o Cmd+Shift+R su Mac)
- Controlla che i file siano stati caricati correttamente

### Errori 404
- Verifica che `index.html` sia nella root del repository
- Controlla che il nome del repository sia corretto

### Problemi con le immagini
- Assicurati che i percorsi delle immagini siano corretti
- Usa percorsi relativi (es. `./image.jpg` invece di `/image.jpg`)

## 📱 Test su Dispositivi Mobili

1. Apri il sito su smartphone/tablet
2. Verifica che il layout sia responsive
3. Testa le animazioni touch
4. Controlla la leggibilità dei testi

## 🔗 Condividere il Portfolio

Una volta pubblicato, puoi condividere il link:
- **LinkedIn**: Aggiungi il link nel profilo
- **Email**: Includi nella firma email
- **CV**: Aggiungi il link nel CV tradizionale
- **Social Media**: Condividi sui tuoi canali

## 📊 Analytics (Opzionale)

Per tracciare le visite al tuo portfolio:

1. Crea un account Google Analytics
2. Aggiungi il codice di tracking in `index.html` prima del tag `</head>`
3. Monitora le statistiche di accesso

---

🎉 **Congratulazioni!** Il tuo portfolio è ora online e accessibile da qualsiasi parte del mondo!
