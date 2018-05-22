# Das Projekt:
Eine mobile Variante der Monopoly Bank. 
Erst rein lokal, später frei zugänglich auf einem Server liegend. 

## Features:
Must haves:
- Erstellen von Spielerprofilen
- Verschieben von Geldbeträgen unter den Spielern
- inkludierter Rechner

Auf dem Server:
- Farbcodierung der Spieler nach vorgegebenen Farben
- Speicherung der Spielerdaten, Anmeldung als derselbe Spieler
- Statistik der letzten Spiele
- Spielemanager (beliebig viele Spiele, Einladungscode)


Nice to have:
- Soundeffekte
- grafische Umsetzung der Kontenstände
- Besitzanzeige 
- Mehrfachbuchungen

### Ansichten:
- Startseite
    - "Spiel starten"
    - "Invitation Key eingeben + Submit"

Mit IK 
- Hauptseite
    - Spiel beitreten
    - Einstellungen
    - Statistiken

## Nutzerkategorien

### Zuschauer
Passive Rolle ohne eigene Postition im Spiel
- Einblick in Statistiken
- Einblick in Verlauf
- Einblick in Besitz

### Spieler/Nutzer
- eigener Spielstand
- Buchungen vom eigenen Spielstand (Buchung zu eigenem Nachteil) 
 - eigene Käufe

### Master/Spielleiter
- Erstellen von Spielen
- Korrekturbuchungen
- zuweisen von Straßen/Häusern
- Mehrfachbuchungen

## Funktionalität
- Startseite:
    - Spiel starten (-> Spieler hinzufügen über IKs, Name eingeben, Farbe auswählen, Spiel starten)
    - Invitation Key eingeben (->Hauptseite)
    - Einstellungen
- Hauptseite:
    - Name eingeben
    - Farbe auswählen
    - Spiel beitreten
    - Statistiken
    - Einstellungen

# WIE?

## submit Button(s) -> Weiterleitung?

```html
<form action="" method="post">
    <!-- Mehrere Inputs -->
    <input type="submit" value="senden" />
</form>
```

Dies sorgt dafür, dass die Seite neu geladen wird und die Seite in "action" aufgerufen wird. Da wir eine Single Page Application bauen wollen wir dies nicht.

Wir könnten nun einfach den input type auf "button" ändern und einen onclick Händler hinzufügen, aber dann kann der Nutzer nicht mehr via z.B. Eingabetaste das Formular abschicken.

Schöner ist es folgendes zu machen:
```html
<script>
    function handler(){
        alert("hi");
    }
</script>
<form action="" method="POST" onsubmit="handler(); return false;">
    <input type="submit"/>
</form>
```

Wir haben unserem Form Element gesagt, es solle vor dem Abschicken immer den handler() aufrufen und via return false sagen wir, dass die Standardaktion (abschicken) nicht gemacht werden soll.

## Eingabe über Android Keyboard

Entweder muss man tatsächlich eine eigene Tastatur machen, oder nur ein paar Tasten für +/-/*//, da man mit folgendem Input Typ einen Nummernblog als Tastatur erzwingt:
```html
<input type="number"/>
```

## Rechner nicht über eval
jaja, da reden wir noch drüber :*