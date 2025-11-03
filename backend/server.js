const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// CORS Middleware aktivieren
app.use(cors());

// Route für Barcelona Spiele
app.get('/api/barcelona/next-match', async (req, res) => {
    try {
        const response = await fetch(
            'https://api.football-data.org/v4/teams/81/matches?status=SCHEDULED&limit=1',
            {
                headers: {
                    'X-Auth-Token': process.env.FOOTBALL_API_KEY
                }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Fehler beim Abrufen der Spieldaten' });
    }
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});