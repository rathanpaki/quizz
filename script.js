const questions = [
  {
    category: "JavaScript",
    question: "What is the use of the 'let' keyword in JavaScript?",
    options: [
      "Declare variables",
      "Create constants",
      "Define functions",
      "Define classes",
    ],
    correctAnswer: "Declare variables",
    userAnswer: null,
  },
  {
    category: "JavaScript",
    question:
      "Which method is used to parse a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toObject()",
      "JSON.parseObject()",
    ],
    correctAnswer: "JSON.parse()",
    userAnswer: null,
  },
  {
    category: "JavaScript",
    question: "What is the output of 'typeof null' in JavaScript?",
    options: ["'object'", "'null'", "'undefined'", "'number'"],
    correctAnswer: "'object'",
    userAnswer: null,
  },
  {
    category: "JavaScript",
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Character"],
    correctAnswer: "Character",
    userAnswer: null,
  },
  {
    category: "JavaScript",
    question:
      "Which method adds one or more elements to the end of an array and returns the new length?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "push()",
    userAnswer: null,
  },
  {
    category: "JavaScript",
    question:
      "What is the correct syntax for referring to an external script called 'app.js'?",
    options: [
      "<script src='app.js'>",
      "<script name='app.js'>",
      "<script href='app.js'>",
      "<script file='app.js'>",
    ],
    correctAnswer: "<script src='app.js'>",
    userAnswer: null,
  },
  {
    category: "JavaScript",
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
    correctAnswer: "Netscape",
    userAnswer: null,
  },
  {
    category: "JavaScript",
    question: "Which of the following is used to define a class in JavaScript?",
    options: ["class", "def", "function", "object"],
    correctAnswer: "class",
    userAnswer: null,
  },
  {
    category: "JavaScript",
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction()",
      "def myFunction()",
      "create myFunction()",
      "function:myFunction()",
    ],
    correctAnswer: "function myFunction()",
    userAnswer: null,
  },
  {
    category: "JavaScript",
    question: "How do you write an array in JavaScript?",
    options: [
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 'red', 'green', 'blue'",
      "var colors = {'red', 'green', 'blue'}",
    ],
    correctAnswer: "var colors = ['red', 'green', 'blue']",
    userAnswer: null,
  },
  {
    category: "HTML",
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "HyperTool Markup Language",
    ],
    correctAnswer: "HyperText Markup Language",
    userAnswer: null,
  },
  {
    category: "HTML",
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    options: ["<footer>", "<section>", "<bottom>", "<aside>"],
    correctAnswer: "<footer>",
    userAnswer: null,
  },
  {
    category: "HTML",
    question: "Which HTML element is used to define important text?",
    options: ["<strong>", "<important>", "<b>", "<i>"],
    correctAnswer: "<strong>",
    userAnswer: null,
  },
  {
    category: "HTML",
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["alt", "title", "src", "href"],
    correctAnswer: "alt",
    userAnswer: null,
  },
  {
    category: "HTML",
    question: "Which HTML element is used to define a navigation link?",
    options: ["<nav>", "<navigate>", "<navigation>", "<navlink>"],
    correctAnswer: "<nav>",
    userAnswer: null,
  },
  {
    category: "HTML",
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<br>", "<lb>", "<break>", "<linebreak>"],
    correctAnswer: "<br>",
    userAnswer: null,
  },
  {
    category: "HTML",
    question:
      "Which HTML element is used to specify a header for a document or section?",
    options: ["<header>", "<section>", "<top>", "<head>"],
    correctAnswer: "<header>",
    userAnswer: null,
  },
  {
    category: "HTML",
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "styles", "font"],
    correctAnswer: "style",
    userAnswer: null,
  },
  {
    category: "HTML",
    question: "Which HTML element is used to define a table?",
    options: ["<table>", "<tab>", "<tr>", "<td>"],
    correctAnswer: "<table>",
    userAnswer: null,
  },
  {
    category: "HTML",
    question: "Which HTML element is used to define emphasized text?",
    options: ["<em>", "<italic>", "<i>", "<strong>"],
    correctAnswer: "<em>",
    userAnswer: null,
  },
  {
    category: "CSS",
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
    userAnswer: null,
  },
  {
    category: "CSS",
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "id", "font"],
    correctAnswer: "style",
    userAnswer: null,
  },
  {
    category: "CSS",
    question: "Which is the correct CSS syntax?",
    options: [
      "body {color: black;}",
      "{body;color:black;}",
      "{body:color=black;}",
      "body:color=black;",
    ],
    correctAnswer: "body {color: black;}",
    userAnswer: null,
  },
  {
    category: "CSS",
    question: "Which property is used to change the background color?",
    options: ["background-color", "color", "bgcolor", "background"],
    correctAnswer: "background-color",
    userAnswer: null,
  },
  {
    category: "CSS",
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-style", "text-size", "font-style"],
    correctAnswer: "font-size",
    userAnswer: null,
  },
  {
    category: "CSS",
    question:
      "What is the correct CSS syntax to make all the <p> elements bold?",
    options: [
      "p {font-weight: bold;}",
      "p {text-size: bold;}",
      "p {font-style: bold;}",
      "p {text-weight: bold;}",
    ],
    correctAnswer: "p {font-weight: bold;}",
    userAnswer: null,
  },
  {
    category: "CSS",
    question:
      "How do you make each word in a text start with a capital letter?",
    options: [
      "text-transform: capitalize;",
      "text-style: capitalize;",
      "transform: capitalize;",
      "text-capitalize: true;",
    ],
    correctAnswer: "text-transform: capitalize;",
    userAnswer: null,
  },
  {
    category: "CSS",
    question: "Which property is used to change the font of an element?",
    options: ["font-family", "font-style", "font-size", "font-weight"],
    correctAnswer: "font-family",
    userAnswer: null,
  },
  {
    category: "CSS",
    question: "Which property is used to center text?",
    options: ["text-align", "align-text", "center-text", "text-center"],
    correctAnswer: "text-align",
    userAnswer: null,
  },
  {
    category: "CSS",
    question: "How do you select an element with id 'demo'?",
    options: ["#demo", ".demo", "demo", "*demo"],
    correctAnswer: "#demo",
    userAnswer: null,
  },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let timerInterval;
let timeRemaining = 30;
let filteredQuestions = questions;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cancelQuiz").addEventListener("click", cancelQuiz);
  document
    .getElementById("submitAnswer")
    .addEventListener("click", submitAnswer);
  document.getElementById("restartQuiz").addEventListener("click", restartQuiz);
  document
    .getElementById("filterHTML")
    .addEventListener("click", () => filterQuestions("HTML"));
  document
    .getElementById("filterCSS")
    .addEventListener("click", () => filterQuestions("CSS"));
  document
    .getElementById("filterJavaScript")
    .addEventListener("click", () => filterQuestions("JavaScript"));

  displayQuestion(true); // Initial display with max 10 questions
  startTimer();
});

function startTimer() {
  clearInterval(timerInterval);
  timeRemaining = 30;
  const timerElement = document.getElementById("timer");
  timerElement.textContent = `00:${timeRemaining}`;
  timerElement.classList.remove("blink"); // Ensure the blinking class is removed

  timerInterval = setInterval(() => {
    timeRemaining--;
    timerElement.textContent = `00:${
      timeRemaining < 10 ? "0" : ""
    }${timeRemaining}`;

    if (timeRemaining <= 10) {
      timerElement.classList.add("blink"); // Start blinking when time is <= 5 seconds
    }

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      // Move to the next question when time finishes
      submitAnswer();
    }
  }, 1000);
}


function displayQuestion() {
  const questionObj = filteredQuestions[currentQuestionIndex];
  document.getElementById("questionTitle").textContent = questionObj.question;
  const optionsList = document.getElementById("optionsList");
  optionsList.innerHTML = "";
  questionObj.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => {
      document
        .querySelectorAll("#optionsList li")
        .forEach((li) => li.classList.remove("selected"));
      li.classList.add("selected");
    });
    optionsList.appendChild(li);
  });
  updateQuestionList();
}

function submitAnswer() {
  const selectedOption = document.querySelector("#optionsList .selected");
  if (selectedOption) {
    const answer = selectedOption.textContent;
    filteredQuestions[currentQuestionIndex].userAnswer = answer; // Store user answer
    const isCorrect =
      answer === filteredQuestions[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      correctAnswers++;
      document
        .getElementById("questionList")
        .children[currentQuestionIndex].classList.add("correct");
    } else {
      document
        .getElementById("questionList")
        .children[currentQuestionIndex].classList.add("incorrect");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < filteredQuestions.length) {
      displayQuestion();
      startTimer();
    } else {
      displayResult();
    }
  } else {
    document
      .getElementById("questionList")
      .children[currentQuestionIndex].classList.add("incorrect");
    currentQuestionIndex++;
    if (currentQuestionIndex < filteredQuestions.length) {
      displayQuestion();
      startTimer();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  clearInterval(timerInterval);
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("resultCard").style.display = "block";
  document.getElementById(
    "resultText"
  ).textContent = `You answered ${correctAnswers} out of ${filteredQuestions.length} questions correctly.`;
}

function cancelQuiz() {
  clearInterval(timerInterval);
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("resultCard").style.display = "block";
  document.getElementById("resultText").textContent = "Quiz cancelled.";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  correctAnswers = 0;
  document.getElementById("resultCard").style.display = "none";
  document.getElementById("quizContainer").style.display = "flex";
  displayQuestion(); // Display questions based on the filteredQuestions
  startTimer();
}

function filterQuestions(category) {
  filteredQuestions = questions.filter((q) => q.category === category);
  currentQuestionIndex = 0; // Reset the current question index
  correctAnswers = 0; // Reset the correct answers count
  displayQuestion(true); // Display the first question of the filtered category
  startTimer(); // Start the timer
}

function updateQuestionList() {
  const questionList = document.getElementById("questionList");
  questionList.innerHTML = "";
  filteredQuestions.forEach((question, index) => {
    const li = document.createElement("li");
    li.textContent = `Quiz question ${index + 1}`;
    if (index < currentQuestionIndex) {
      if (question.userAnswer === question.correctAnswer) {
        li.classList.add("correct");
      } else {
        li.classList.add("incorrect");
      }
    }
    questionList.appendChild(li);
  });
}
