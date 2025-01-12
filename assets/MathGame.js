const questions_with_answers = [
  ["Что такое интеграл?", ""],
  ["Найдите интеграл", ""],
  ["Как можно избавиться от неопределенности в пределе?", ""],
  ["Найдите предел", ""],
  ["Найдите предел", ``],
  ["Асимптота -- это", ""],
  ["Найдите асимптоту", ""],
  ["Комплексное число это", ""],
  [``, ``],
  ["", ``],
  ["Числовой ряд это...", ""],
  ["Какой ряд больше?", ""],
  ["Какой это ряд?", ``],
  ["Как решаются дифф. уравнения?", ``],
  ["Решите дифф. уравнения", ""],
];

var teams_quantity = 3;
var teams = [];

var question = 0;

function MakeResult() {
  let max_score = Math.max(...teams);

  for (let i = 0; i < teams_quantity; i++) {
    let team_result = document.createElement("li");
    // button.setAttribute("attribute", "value");
    team_result.innerHTML = `
    <div>
    <label for="team${i}">${i + 1}</label>
    <progress id="file" max="${max_score}" 
    value="${teams[i]}">${teams[i]}</progress>
    <b>${teams[i]}</b>
    </div>`;
    document.getElementById("results_list").appendChild(team_result);
  }
}

function ToNextSlide(step = 1) {
  question += step;

  if (question >= questions_with_answers.length * 2) {
    document.getElementById("game").style = "display: none;";
    document.getElementById("results_screen").style = "";
    MakeResult();
    return;
  }

  let isAnswer = question % 2;
  let block = 0;
  try {
    block = Math.floor(question / 2);
  } catch (error) {}

  let header = "Вопрос";

  if (isAnswer) {
    header = "Ответ";
  } else {
  }

  let array = document.querySelectorAll("#team_selector");
  for (let i = 0; i < teams_quantity; i++) {
    array[i].disabled = isAnswer;
  }

  header = `<h3 id="header">${header}</h3>`;
  let label = document.getElementById("info");

  label.innerHTML = header + questions_with_answers[block][isAnswer];
  document
    .getElementById("header")
    .animate(
      [
        { transform: "scale(100%)" },
        { transform: "scale(120%)" },
        { transform: "scale(80%) " },
        { transform: "scale(100%)" },
      ],
      {
        duration: 50,
        iterations: 1,
      }
    );
}

function Win(number = -1) {
  ToNextSlide();

  if (number != -1) {
    teams[number] += 1;
  }
}

const value = document.querySelector("#team_count");
const input = document.querySelector("#team_count_slider");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

document.getElementById("start_game").onclick = StartQuiz;

function StartQuiz() {
  teams_quantity = input.value;

  document.getElementById("splash").style = "display: none";
  document.getElementById("game").style = "";
  for (let i = 0; i < teams_quantity; i++) {
    teams[i] = 0;
    let button = document.createElement("button");
    button.setAttribute("attribute", "value");
    button.innerHTML = i + 1;
    button.onclick = () => Win(i);
    document.getElementById("teams").appendChild(button);
    button.setAttribute("id", "team_selector");
  }

  let button = document.createElement("button");

  button.innerHTML = ">";
  button.onclick = Win;
  document.getElementById("teams").appendChild(button);

  ToNextSlide(0);
}
