// Otázky přímo v kódu
const questionsData = {
    "questions": [
        {
            "id": 1,
            "question": "Jaká je maximální povolená výstupní výkon pro radioamatérskou stanici třídy N?",
            "answer1": "10 W",
            "answer2": "25 W",
            "answer3": "50 W",
            "correct_answer": 0
        },
        {
            "id": 2,
            "question": "Co znamená zkratka CQ?",
            "answer1": "Všeobecná výzva",
            "answer2": "Konec vysílání",
            "answer3": "Potvrzení příjmu",
            "correct_answer": 0
        },
        {
            "id": 3,
            "question": "Jaký je mezinárodní tísňový kmitočet v pásmu VKV?",
            "answer1": "145.500 MHz",
            "answer2": "156.800 MHz",
            "answer3": "121.500 MHz",
            "correct_answer": 1
        },
        {
            "id": 4,
            "question": "Co znamená Q-kód QTH?",
            "answer1": "Jaké je počasí?",
            "answer2": "Jaká je vaše poloha?",
            "answer3": "Jaký je čas?",
            "correct_answer": 1
        },
        {
            "id": 5,
            "question": "Jaká je hodnota napětí v běžné elektrické síti v ČR?",
            "answer1": "110V",
            "answer2": "220V",
            "answer3": "230V",
            "correct_answer": 2
        }
    ]
};

// Stav testu
let questions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

// DOM elementy
const questionTextElement = document.getElementById('questionText');
const answerButtons = [
    document.getElementById('answer1'),
    document.getElementById('answer2'),
    document.getElementById('answer3')
];
const currentQuestionElement = document.getElementById('currentQuestion');
const correctAnswersElement = document.getElementById('correctAnswers');
const wrongAnswersElement = document.getElementById('wrongAnswers');
const successRateElement = document.getElementById('successRate');

// Inicializace testu
function initTest() {
    // Načtení a zamíchání otázek
    questions = questionsData.questions.sort(() => Math.random() - 0.5);
    showQuestion(currentQuestionIndex);
    updateStatistics();
}

// Zobrazení otázky
function showQuestion(index) {
    if (!questions[index]) {
        return;
    }

    const question = questions[index];
    questionTextElement.textContent = question.question;
    currentQuestionElement.textContent = index + 1;
    
    // Nastavení odpovědí
    answerButtons[0].textContent = question.answer1;
    answerButtons[1].textContent = question.answer2;
    answerButtons[2].textContent = question.answer3;
    
    answerButtons.forEach((button, i) => {
        button.className = 'answer-button';
        button.onclick = () => checkAnswer(i);
        button.style.display = 'block'; // Zobrazení tlačítek pokud byly skryté
    });
}

// Kontrola odpovědi
function checkAnswer(answerIndex) {
    const question = questions[currentQuestionIndex];
    const isCorrect = answerIndex === question.correct_answer;
    
    // Vizuální zpětná vazba
    answerButtons[answerIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    
    // Aktualizace statistik
    if (isCorrect) {
        correctAnswers++;
    } else {
        wrongAnswers++;
        answerButtons[question.correct_answer].classList.add('correct');
    }
    
    updateStatistics();
    
    // Deaktivace tlačítek
    answerButtons.forEach(button => {
        button.onclick = null;
    });
    
    // Přechod na další otázku po 2 sekundách
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            // Konec testu
            questionTextElement.textContent = "Test dokončen!";
            answerButtons.forEach(button => {
                button.style.display = 'none';
            });
        }
    }, 2000);
}

// Aktualizace statistik
function updateStatistics() {
    const total = correctAnswers + wrongAnswers;
    const successRate = total === 0 ? 0 : Math.round((correctAnswers / total) * 100);
    
    correctAnswersElement.textContent = correctAnswers;
    wrongAnswersElement.textContent = wrongAnswers;
    successRateElement.textContent = `${successRate}%`;
}

// Spuštění testu při načtení stránky
initTest(); 