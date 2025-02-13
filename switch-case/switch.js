const $input = document.getElementById("inputText");
$input.addEventListener("input", showMonthNumber);

function showMonthNumber() {
  let textRes = $input.value.trim().toUpperCase();
  let $content = document.querySelector(".content");
  let $app = document.querySelector(".app");

  switch (textRes) {
    case "JANUARY":
      $app.classList.add("active");
      $content.textContent = "январь : первый месяц";
      break;

    case "ЯНВАРЬ":
      $app.classList.add("active");
      $content.textContent = "January : first month";
      break;
    case "FEBRUARY":
      $app.classList.add("active");
      $content.textContent = "февраль : второй месяц";
      break;
    case "ФЕВРАЛЬ":
      $app.classList.add("active");
      $content.textContent = "February : second month";
      break;
    case "MARCH":
      $app.classList.add("active");
      $content.textContent = "март : третий месяц";
      break;
    case "МАРТ":
      $app.classList.add("active");
      $content.textContent = "March  : third month";
      break;
    case "APRIL":
      $app.classList.add("active");
      $content.textContent = "апрель : четвертый месяц";
      break;
    case "АПРЕЛЬ":
      $app.classList.add("active");
      $content.textContent = "April   : fourth month";
      break;
    case "MAY":
      $app.classList.add("active");
      $content.textContent = "май : пятый месяц";
      break;
    case "МАЙ":
      $app.classList.add("active");
      $content.textContent = "May   : fifth month";
      break;
    case "JUNE":
      $app.classList.add("active");
      $content.textContent = "июнь: шестой месяц";
      break;
    case "ИЮНЬ":
      $app.classList.add("active");
      $content.textContent = " June   : sixth month";
      break;
    case "JULY":
      $app.classList.add("active");
      $content.textContent = "июль: седьмой месяц";
      break;
    case "ИЮЛЬ":
      $app.classList.add("active");
      $content.textContent = " July : seventh month";
      break;
    case "AUGUST":
      $app.classList.add("active");
      $content.textContent = "август: восьмой месяц";
      break;
    case "АВГУСТ":
      $app.classList.add("active");
      $content.textContent = " August : eight month";
      break;
    case "SEPTEMBER":
      $app.classList.add("active");
      $content.textContent = "сентябрь: девятый месяц";
      break;
    case "СЕНТЯБРЬ":
      $app.classList.add("active");
      $content.textContent = " September  : ninth month";
      break;
    case "OCTOBER":
      $app.classList.add("active");
      $content.textContent = "октябрь: десятый месяц";
      break;
    case "ОКТЯБРЬ":
      $app.classList.add("active");
      $content.textContent = " October  : tenth month";
      break;
    case "NOVEMBER":
      $app.classList.add("active");
      $content.textContent = "ноябрь: одинадцатый месяц";
      break;
    case "НОЯБРЬ":
      $app.classList.add("active");
      $content.textContent = " November  : eleventh month";
      break;
    case "DECEMBER":
      $app.classList.add("active");
      $content.textContent = "декабрь: Двенадцатый месяц";
      break;
    case "ДЕКАБРЬ":
      $app.classList.add("active");
      $content.textContent = " December  : twelfth month";
      break;
   
    default:
      $app.classList.remove("active");
     
  }
}
showMonthNumber();
