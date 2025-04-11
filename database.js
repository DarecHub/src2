const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('questions.db');

// Vytvoření tabulky pro otázky
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL,
        answer1 TEXT NOT NULL,
        answer2 TEXT NOT NULL,
        answer3 TEXT NOT NULL,
        correct_answer INTEGER NOT NULL
    )`);

    // Vložení testovacích otázek
    const questions = [
        {
            question: "Jaká je maximální povolená výstupní výkon pro radioamatérskou stanici třídy N?",
            answers: ["10 W", "25 W", "50 W"],
            correctAnswer: 0
        },
        {
            question: "Co znamená zkratka CQ?",
            answers: ["Všeobecná výzva", "Konec vysílání", "Potvrzení příjmu"],
            correctAnswer: 0
        },
        {
            question: "Jaký je mezinárodní tísňový kmitočet v pásmu VKV?",
            answers: ["145.500 MHz", "156.800 MHz", "121.500 MHz"],
            correctAnswer: 1
        },
        {
            question: "Co znamená Q-kód QTH?",
            answers: ["Jaké je počasí?", "Jaká je vaše poloha?", "Jaký je čas?"],
            correctAnswer: 1
        },
        {
            question: "Jaká je hodnota napětí v běžné elektrické síti v ČR?",
            answers: ["110V", "220V", "230V"],
            correctAnswer: 2
        }
    ];

    // Vložení otázek do databáze
    const stmt = db.prepare(`INSERT INTO questions (question, answer1, answer2, answer3, correct_answer) VALUES (?, ?, ?, ?, ?)`);
    
    questions.forEach(q => {
        stmt.run(q.question, q.answers[0], q.answers[1], q.answers[2], q.correctAnswer);
    });
    
    stmt.finalize();
});

// Funkce pro získání všech otázek
function getAllQuestions(callback) {
    db.all("SELECT * FROM questions", [], (err, rows) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, rows);
    });
}

// Funkce pro získání náhodné otázky
function getRandomQuestion(callback) {
    db.get("SELECT * FROM questions ORDER BY RANDOM() LIMIT 1", [], (err, row) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, row);
    });
}

module.exports = {
    getAllQuestions,
    getRandomQuestion
}; 