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

WIE?

    submit Button(s) -> Weiterleitung?
    Eingabe über Android Keyboard
    Rechner nicht über eval
