//Создаем INPUT и выводим на странницу

const $app = document.querySelector(".app");

const $input = document.createElement("input");
$input.classList.add("input");
$input.type = "number";
$input.min = "0";
$input.max = "100";
$app.append($input);

// Обработчик ввода в input: вызываем функцию смены цвета фона
$input.addEventListener("input", () => {
  countColor();
});

// Функция для смены фона в зависимости от введенного числа
function countColor() {
  let count = $input.value;// Получаем значение из input

   // В зависимости от значения count меняем цвет фона
  if (count >= 90) document.body.style.backgroundColor = "black";
  else if (count > 80) document.body.style.backgroundColor = "grey";
  else if (count >= 70) document.body.style.backgroundColor = "pink";
  else if (count > 60) document.body.style.backgroundColor = "red";
  else if (count >= 50) document.body.style.backgroundColor = "green";
  else if (count > 40) document.body.style.backgroundColor = "yellow";
  else if (count >= 30) document.body.style.backgroundColor = "lightblue";
  else if (count > 20) document.body.style.backgroundColor = "blue";
  else if (count >= 10) document.body.style.backgroundColor = "brown";
  else if (count >= 0) document.body.style.backgroundColor = "orange";
}
