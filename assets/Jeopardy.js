const questions_with_answers = [
  [
    "Как появились отрицательные цифры?",
    "Появились и использовались в Индии как обозначение долгов.",
  ],
  ["Что такое синус?<img src='/assets/img/Page 1.png'></img>", "AC/AB"],
  ["Сумма углов в треугольнике равна…", "180°"],
  [
    "Сумму всех внутренних углов выпуклого многоугольника можно найти по формуле…",
    "180 × (n - 2)",
  ],
  [
    "Покажите пальцем на рыбу.(Подсказка: векторы.)<img src='/assets/img/Page 3.png'></img>",
    "<img src='/assets/img/Page 4.png'></img>",
  ],
  ["Найдите шаг геометрической прогрессии 12; 36; 108", "3"],
  [
    "Найдите общий корень выражений x² + 2x = 0; 2x + 6 = 6; (0 - x)(x + 4) = 0",
    "0",
  ],
  [
    `Выберете правильную формулировку теоремы:<ol>
    <li> Если две пересекающиеся линии одной плоскости соответственно параллельны двум пересекающимся линиям другой плоскости, то эти плоскости параллельны</li>
    <li> Если две пересекающиеся прямые одной плоскости параллельны двум пересекающимся прямым другой плоскости, то эти плоскости параллельны</li>
    <li> Если две скрещивающиеся прямые одной плоскости соответственно параллельны двум скрещивающимся прямым другой плоскости, то эти плоскости параллельны</li>
    <li> Правильной формулировки нет.</li></ol>`,
    "Правильной формулировки нет.",
  ],
  [
    "В функции ax² + bx - c, x² определяет...",
    "x² определяет направление ветвей.",
  ],
  [
    "Расчитайте какая длина нужна на крышу<img src='/assets/img/Page 2.png'></img>",
    "10",
  ],
  ["Найдите шаг алгебраической прогрессии 12; 6; 0", "-6"],
  ["Вычислите sin²180° + cos²180°", "sin²180° + cos²180° = 1"],
  [
    "С помощью какой формулы можно вычислить треугольник, не зная величины ни одного угла.",
    "Формула Герона",
  ],
  [
    `При помощи какой теоремы можно найти длину одной стороны треугольника, зная длину другой стороны и противолежащий
  ей угол и угол первой стороны?<img src='/assets/img/Page 5.png'></img>`,
    "При помощи теоремы синусов. AB÷sinα=AC÷sinβ",
  ],
  [`Кто открыл неевклидовую геометрию?`, `Николай Иванович Лобачевский`],
];

var teams = [0, 0, 0];

var question = 0;

function UpdateDisplay() {
  document.getElementById(
    "team1"
  ).innerHTML = `Команда № 1: ${teams[0]} очков.`;
  document.getElementById(
    "team2"
  ).innerHTML = `Команда № 2: ${teams[1]} очков.`;
  document.getElementById(
    "team3"
  ).innerHTML = `Команда № 3: ${teams[2]} очков.`;
}

function ToNextSlide(step = 1) {
  question += step;

  if (question >= questions_with_answers.length * 2) {
    document.getElementById("game").style = "display: none;";
    document.getElementById("results").style = "";
  }

  let isAnswer = question % 2;
  let block = 0;
  try {
    block = Math.floor(question / 2);
  } catch (error) {}

  let header = "Вопрос";

  if (isAnswer) {
    header = "Ответ";
    document.getElementById("first").disabled = true;
    document.getElementById("second").disabled = true;
    document.getElementById("third").disabled = true;
  } else {
    document.getElementById("first").disabled = false;
    document.getElementById("second").disabled = false;
    document.getElementById("third").disabled = false;
  }

  header = `<h3 id="header">${header}</h3>`;
  let label = document.getElementById("info");

  label.innerHTML = header + questions_with_answers[block][isAnswer];
  document
    .getElementById("header")
    .animate(
      [
        { transform: "rotate(0)" },
        { transform: "rotate(-12deg)" },
        { transform: "rotate(12deg) " },
        { transform: "rotate(0)" },
      ],
      {
        duration: 50,
        iterations: 1,
      }
    );
}

function Win() {
  ToNextSlide();

  teams[0] += document.getElementById("first").checked;
  teams[1] += document.getElementById("second").checked;
  teams[2] += document.getElementById("third").checked;

  UpdateDisplay();

  document.getElementById("first").checked = false;
  document.getElementById("second").checked = false;
  document.getElementById("third").checked = false;
}

ToNextSlide(0);
UpdateDisplay();
