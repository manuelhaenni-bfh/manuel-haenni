// Funktion zum Formatieren des Datums
function formatDate(dateString) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('de-DE', options);
}

// Funktion zum Abrufen des nächsten Spiels
async function getNextBarcelonaMatch() {
    const matchInfoElement = document.getElementById('next-match');
    matchInfoElement.innerHTML = '<div class="loading-spinner">Lade Spieldaten...</div>';

    try {
        console.log('Starte API-Anfrage...');
        const url = 'http://localhost:3000/api/barcelona/next-match';
        console.log('API URL:', url);

        const response = await fetch(url);

        console.log('API Response Status:', response.status);
        console.log('API Response Headers:', [...response.headers.entries()]);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Fehler Details:', {
                status: response.status,
                statusText: response.statusText,
                errorText: errorText
            });
            throw new Error(`Netzwerkfehler ${response.status} beim Abrufen der Spieldaten`);
        }

        const data = await response.json();
        
        if (data.matches && data.matches.length > 0) {
            const match = data.matches[0];
            const matchDate = formatDate(match.utcDate);
            const competition = match.competition.name;
            
            const matchInfo = `
                <div class="match-details">
                    <div class="match-teams">
                        <span class="team home">${match.homeTeam.name}</span>
                        <span class="vs">vs</span>
                        <span class="team away">${match.awayTeam.name}</span>
                    </div>
                    <div class="match-date">${matchDate}</div>
                    <div class="match-competition">${competition}</div>
                </div>
            `;

            document.getElementById('next-match').innerHTML = matchInfo;
        } else {
            document.getElementById('next-match').innerHTML = 'Keine anstehenden Spiele gefunden';
        }
    } catch (error) {
        console.error('Fehler beim API-Aufruf:', error);
        matchInfoElement.innerHTML = `
            <div class="error-message">
                <p>Fehler beim Laden der Spieldaten</p>
                <p class="error-details">Bitte prüfen Sie die Browser-Konsole (F12) für weitere Details</p>
            </div>
        `;
    }
}

// Daten beim Laden der Seite abrufen
document.addEventListener('DOMContentLoaded', getNextBarcelonaMatch);