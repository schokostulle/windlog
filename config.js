// Trage hier deine Supabase-Projektdaten ein.
// Beides findest du in deinem Supabase-Projekt unter: Settings -> API (bzw. "Connect")
// "Project URL" und "anon public" / "publishable" Key (NICHT den "service_role" Key verwenden!)

window.SUPABASE_URL = 'https://aesvmcxaxwciopfyaoeq.supabase.co';
window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlc3ZtY3hheHdjaW9wZnlhb2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwODYxOTIsImV4cCI6MjEwMzY2MjE5Mn0.iL2vaU2Wbad9ApT8ceWP-vTaXmeVN6YKi_OuknTGYyU';

// Passwort für den Zugang zur App.
// Hier steht NICHT das Passwort selbst, sondern ein Hash davon (eine Art digitaler
// Fingerabdruck, aus dem sich das Passwort nicht zurückrechnen lässt).
//
// So bekommst du den Hash für euer gewünschtes Passwort:
// 1. Öffne eure bereits online gestellte Windlog-Seite im Browser.
// 2. Drücke F12 (bzw. am Handy: über die Browser-Einstellungen "Entwicklertools"),
//    wechsle zum Tab "Console".
// 3. Füge diese Zeile ein und ersetze DEIN-PASSWORT durch euer gewünschtes Passwort:
//
//    crypto.subtle.digest('SHA-256', new TextEncoder().encode('DEIN-PASSWORT')).then(b => console.log(Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2,'0')).join('')))
//
// 4. Enter drücken. Es erscheint eine lange Zeichenfolge (der Hash) - die kopierst
//    du hier unten rein.

window.WINDLOG_PASSWORD_HASH = 'fb05cada665f946259fc894c0c66015d560c2db415c05d32973508c8c985b8bb';