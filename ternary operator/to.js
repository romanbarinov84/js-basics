
const $container = document.querySelector(".container");


let count = prompt("Сколько вам лет ");
count = Number(count);

let massage = count > 18 ? "Доступ разрешен" : "Доступ запрещен"
let res = count > 18 ? "access" : "regist"

$container.innerHTML= `<div class = "content ${res}">${massage}</div>`