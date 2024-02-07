const questions_with_answers = [
  [
    "Кто изобрёл модель ядра, крайне похожую на сливовый пудинг.",
    "Джозеф Джон Томсон",
  ],
  [
    "Что использовал Томсон для доказательства своей модели и когда была открыта модель?",
    "Колбочка заполненная разреженным газом. 1897 год",
  ],
  [
    "Электричество является типичным примером когда...",
    "Применять технологии начали первее, чем изучили их природу.",
  ],
  [
    "Что между собой общего имеют все излучения?",
    "Огромную энергию несущую в себе.",
  ],
  [
    "Может ли трансформатор работать в сети с постоянным напряжением?",
    "Нет, так как нет изменения напряжения, а следовательно и изменения магнитного поля.",
  ],
  [
    "Что такое электромагнитная индукция и кем она была открыта?",
    `(Возможная формулировка) Электромагнитная индукция - это явление возникновения тока в замкнутой цепи при воздействии движущегося магнита.
    Была открыта 17 октября 1831 года, Майклом Фарадеем.`,
  ],
  ["Сила, которая держит каплю на монетке.", "Сила поверхностного натяжения"],
  ["На что чувствительны наши глаза ?", "На электромагнитной волну."],
  [
    "Если вы когда нибудь заходили в деревянный дом, то знаете этот запах. Из-за Какого явления он присутствует? ",
    "Джозеф Джон Томсон ",
  ],
  [
    "Кто изобрёл модель ядра, крайне похожую на сливовый пудинг.",
    "Джозеф Джон Томсон ",
  ],
  [
    "Кто изобрёл модель ядра, крайне похожую на сливовый пудинг.",
    "Джозеф Джон Томсон ",
  ],
  [
    "Кто изобрёл модель ядра, крайне похожую на сливовый пудинг.",
    "Джозеф Джон Томсон ",
  ],
  [
    "Кто изобрёл модель ядра, крайне похожую на сливовый пудинг.",
    "Джозеф Джон Томсон ",
  ],
  [
    "Кто изобрёл модель ядра, крайне похожую на сливовый пудинг.",
    "Джозеф Джон Томсон ",
  ],
  [
    "Кто изобрёл модель ядра, крайне похожую на сливовый пудинг.",
    "Джозеф Джон Томсон ",
  ],
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

  if (question >= questions_with_answers.length * 2 - 1) {
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
