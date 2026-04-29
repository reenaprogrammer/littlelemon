// ==========================================
// 1. DATA & CONTENT
// ==========================================

const dailyTips = [
    "You're doing great, I'm so proud of your progress! ❤️",
    "Don't worry about the accent, your confidence is what matters! 🗣️",
    "English is hard, but you are harder! 💪",
    "Remember why we started this journey together. ✈️"
];

const englishLessons = [
    { category: "Articles", title: "The 'A' Rule", front: "When do we use 'A'?", back: "Use 'A' before words starting with a CONSONANT sound. (e.g., A Book, A Car, A University)." },
    { category: "Articles", title: "The 'An' Rule", front: "When do we use 'An'?", back: "Use 'An' before words starting with a VOWEL sound. (e.g., An Apple, An Hour)." },
    { category: "Vowels", title: "Short 'A'", front: "Cat vs Cake", back: "The 'A' in Cat is short. The 'A' in Cake is long!" },
    { category: "Vowels", title: "The Magic E", front: "What does 'E' do?", back: "An 'E' at the end of a word usually makes the first vowel say its own name! (Like 'Bit' to 'Bite')" },
    { category: "Phonetics", title: "The 'SH' Sound", front: "Ship vs Sip", back: "For 'SH', your tongue is back. For 'S', your tongue is forward near your teeth!" },
    { category: "Phonetics", title: "Silent Letters", front: "Knee and Write", back: "Some letters are 'ghosts'! You don't say the 'K' in Knee or the 'W' in Write." },
    { category: "Confusing Words", title: "Your vs. You're", front: "Which one is for 'You are'?", back: "Use 'You're' for 'You are'. Use 'Your' for things he owns (eg.Your book)." },
    { category: "Confusing Words", title: "Their, There, They're", front: "Location vs. People?", back: "There = Place. Their = Ownership. They're = They are!" },
    { category: "Daily English", title: "Greeting Friends", front: "Instead of 'How are you?'", back: "Try: 'How's it going?', 'What's up?', or 'How have you been?'" },
    { category: "Phonetics", title: "The 'TH' Sound", front: "Think vs. The", back: "For 'Think', air flows out. For 'The', your vocal cords vibrate!" }
];

const quizData = [
    { question: "I want to eat ___ apple.", answer: "an" },
    { question: "He is ___ university student.", answer: "a" },
    { question: "It takes ___ hour to get there.", answer: "an" },
    { question: "I saw ___ cat in the garden.", answer: "a" },
    { question: "Complete the word: 'You ___ my best friend.'", answer: "are" },
    { question: "Which word is correct: 'Can you see ___?' (there/their)", answer: "there" },
    { question: "Is the 'K' in 'Knee' silent? (yes/no)", answer: "yes" },
    { question: "I have ___ orange and ___ banana.", answer: "an and a" }, // Note: He'd type 'an/a' or you can split these
    
    // --- Daily Conversation ---
    { question: "What is a shorter way to say 'I am'?", answer: "i'm" },
    { question: "How do you say 'Hello' to a friend? (H__!)", answer: "hi" },

    // --- Relationship Bonus Questions ---
    { question: "Who is your favorite English teacher? ❤️", answer: "you" }, // He should type your name or 'you'!
    { question: "Are we going to achieve our dreams? ✨", answer: "yes" }
];


const readingLessons = [
    {
        title: "A Sunny Day ☀️",
        text: "The sun was shining brightly in the blue sky. Sarah decided to go to the park with her dog, Max. They played with a yellow ball for two hours.",
        questions: [
            { q: "Where did Sarah go?", a: "park" },
            { q: "What is the dog's name?", a: "max" },
            { q: "What color was the ball?", a: "yellow" }
        ]
    },
    {
        title: "The Coffee Shop ☕",
        text: "John went to the coffee shop at 8:00 AM. He ordered a large latte and a chocolate muffin. He sat near the window to read his book.",
        questions: [
            { q: "What time did John go to the shop?", a: "8:00 am" },
            { q: "What did he eat?", a: "muffin" },
            { q: "Where did he sit?", a: "window" }
        ]
    },
    {
        title: "The Weekend Trip 🚗",
        text: "Last Saturday, Maya and her brother went to the beach. They swam in the ocean and built a big sandcastle. They ate ice cream before going home.",
        questions: [
            { q: "When did they go to the beach?", a: "saturday" },
            { q: "What did they build?", a: "sandcastle" },
            { q: "What did they eat?", a: "ice cream" }
        ]
    },
    {
        title: "A Rainy Afternoon ☔",
        text: "It started to rain at 3:00 PM. Liam stayed inside and watched a movie. He made some hot popcorn and wore his favorite blue sweater.",
        questions: [
            { q: "What time did it start raining?", a: "3:00 pm" },
            { q: "What did Liam watch?", a: "movie" },
            { q: "What color was his sweater?", a: "blue" }
        ]
    },
    {
        title: "The Garden 🌻",
        text: "Mrs. Green loves her garden. She has red roses and purple lavender. Every morning, she waters the plants and talks to the birds.",
        questions: [
            { q: "What is the woman's name?", a: "mrs. green" },
            { q: "What color are the roses?", a: "red" },
            { q: "Who does she talk to?", a: "birds" }
        ]
    }
];

// ==========================================
// 2. THEME & GLOBAL LOGIC
// ==========================================

const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const mode = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('hubTheme', mode);
    });
}

if (localStorage.getItem('hubTheme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// Daily Motivation on Home Page
function showMotivation() {
    const tipTextElement = document.getElementById('tip-text');
    if (tipTextElement) {
        const randomIndex = Math.floor(Math.random() * dailyTips.length);
        tipTextElement.innerText = dailyTips[randomIndex];
    }
}
showMotivation();

// ==========================================
// 3. LESSON CARDS LOGIC
// ==========================================

const shelf = document.getElementById('lesson-shelf');
function displayCards(filter) {
    if (!shelf) return;
    shelf.innerHTML = "";

    const filteredData = filter === 'All' ? englishLessons : englishLessons.filter(l => l.category === filter);

    filteredData.forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <div class="book-inner">
                <div class="book-front">
                    <span class="dream-glow">📖</span>
                    <small>${lesson.category}</small>
                    <h3>${lesson.title}</h3>
                    <p>${lesson.front}</p>
                </div>
                <div class="book-back">
                    <p>${lesson.back}</p>
                </div>
            </div>
        `;
        card.addEventListener('click', () => card.querySelector('.book-inner').classList.toggle('is-flipped'));
        shelf.appendChild(card);
    });
}
if (shelf) displayCards('All');

// ==========================================
// 4. QUIZ LOGIC
// ==========================================

let currentQuizIndex = 0;
const questionEl = document.getElementById('quiz-question');
const answerInput = document.getElementById('user-answer');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');

function loadQuizQuestion() {
    if (!questionEl) return;
    const currentQ = quizData[currentQuizIndex];
    questionEl.innerText = currentQ.question;
    answerInput.value = "";
    feedbackEl.innerText = "";
    nextBtn.style.display = "none";
}

function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase().trim();
    const correctAnswer = quizData[currentQuizIndex].answer;

    if (userAnswer === correctAnswer) {
        feedbackEl.innerText = "✅ Correct! Great job!";
        feedbackEl.style.color = "#27ae60";
        nextBtn.style.display = "inline-block";
        answerInput.classList.remove('shake'); // Remove shake if they fix it
    } else {
        feedbackEl.innerText = "❌ Not quite! Try again! ❤️";
        feedbackEl.style.color = "#e74c3c";
        
        // 1. Add the shake class
        answerInput.classList.add('shake');
        
        // 2. Remove it after 500ms so he can shake it again on the next try!
        setTimeout(() => {
            answerInput.classList.remove('shake');
        }, 500);
    }
}

function nextQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < quizData.length) {
        loadQuizQuestion();
    } else {
        questionEl.innerText = "🎉 Quiz Complete! You are a superstar!";
        document.querySelector('.quiz-input-area').style.display = "none";
        nextBtn.style.display = "none";
    }
}
if (questionEl) loadQuizQuestion();

// ==========================================
// 5. SEQUENTIAL READING CHALLENGE
// ==========================================

let currentStoryIndex = 0;
let currentStory = {};

function loadNewStory() {
    const storyTitle = document.getElementById('story-title');
    const storyText = document.getElementById('story-text');
    const questionsList = document.getElementById('questions-list');
    const feedback = document.getElementById('reading-feedback');
    const nextStoryBtn = document.getElementById('new-story-btn');

    if (!storyTitle) return;

    currentStory = readingLessons[currentStoryIndex];
    
    // Applying the Dreamy Glow to the title emojis
    storyTitle.innerHTML = `<span class="dream-glow">✨</span> ${currentStory.title} <span class="dream-glow">❤️</span>`;
    storyText.innerText = currentStory.text;
    feedback.innerText = "";
    if (nextStoryBtn) nextStoryBtn.style.display = "none";
    
    questionsList.innerHTML = "";
    currentStory.questions.forEach((item, index) => {
        const qDiv = document.createElement('div');
        qDiv.style.marginBottom = "15px";
        qDiv.innerHTML = `
            <p style="margin-bottom: 5px;">${item.q}</p>
            <input type="text" class="reading-input" data-index="${index}" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid var(--secondary-color);">
        `;
        questionsList.appendChild(qDiv);
    });
}

function checkReadingAnswers() {
    const inputs = document.querySelectorAll('.reading-input');
    let allCorrect = true;

    inputs.forEach(input => {
        const index = input.getAttribute('data-index');
        const userAnswer = input.value.toLowerCase().trim();
        const correctAnswer = currentStory.questions[index].a.toLowerCase();

        if (userAnswer === correctAnswer) {
            input.style.borderColor = "#27ae60";
        } else {
            input.style.borderColor = "#e74c3c";
            allCorrect = false;
        }
    });

    const feedback = document.getElementById('reading-feedback');
    const surpriseBox = document.getElementById('surprise-box');
    const nextStoryBtn = document.getElementById('new-story-btn');

    if (allCorrect) {
        feedback.innerText = "🌟 Amazing! You understood everything!";
        feedback.style.color = "#27ae60";
        
        if (currentStoryIndex === readingLessons.length - 1) {
    surpriseBox.style.display = "block";
    // Add a little extra sparkle to the surprise
    surpriseBox.style.animation = "pulse-animation 2s infinite";
    surpriseBox.scrollIntoView({ behavior: 'smooth' });
        } else {
            if (nextStoryBtn) nextStoryBtn.style.display = "block";
        }
    } else {
        feedback.innerText = "❌ Some answers are wrong. Look at the story again!";
        feedback.style.color = "#e74c3c";
    }
}

function nextStory() {
    currentStoryIndex++;
    if (currentStoryIndex < readingLessons.length) {
        loadNewStory();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

if (document.getElementById('story-title')) loadNewStory();