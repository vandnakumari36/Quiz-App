const quizData = [
  {
    question: "Javascript is an _______ language?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "NOTA",
    correct: "a",
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    a: "in",
    b: "is in",
    c: "exists",
    d: "lies",
    correct: "a",
  },
  {
    question:
      "When an operator's value is NULL, the typeof returned by the unary operator is:    ",
    a: "Boolean",
    b: "undefined",
    c: "object",
    d: "Integer",
    correct: "c",
  },
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    a: "stringify()",
    b: "parse()",
    c: "convert()",
    d: "NOTA",
    correct: "a",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

//submit button
function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered correctly at ${score}
      /${quizData.length} questions</h2>

      <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
