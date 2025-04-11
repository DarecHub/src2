const express = require('express');
const path = require('path');
const { getAllQuestions, getRandomQuestion } = require('./database');

const app = express();
const port = 3000;

// Statické soubory
app.use(express.static(path.join(__dirname, '.')));

// API endpoint pro získání všech otázek
app.get('/api/questions', (req, res) => {
    getAllQuestions((err, questions) => {
        if (err) {
            res.status(500).json({ error: 'Chyba při načítání otázek' });
            return;
        }
        res.json(questions);
    });
});

// API endpoint pro získání náhodné otázky
app.get('/api/questions/random', (req, res) => {
    getRandomQuestion((err, question) => {
        if (err) {
            res.status(500).json({ error: 'Chyba při načítání otázky' });
            return;
        }
        res.json(question);
    });
});

app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
}); 