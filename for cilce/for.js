
const $textContent = document.getElementById("text");
const innerText = "Created Neon Text By Cycle FOR";

for(let i = 0; i < innerText.length; i++){
    let $spanText = document.createElement("span");
    $spanText.classList.add("letter");
    $spanText.innerHTML = innerText[i];
    $textContent.appendChild($spanText)
}

function addNeonColor(){
    let $letters = document.querySelectorAll(".letter");
    for(let i = 0; i < $letters.length; i++){
        $letters[i].style.color = `hsl(${Math.random() *360} , 100%, 70%)`;
    }
}

setInterval(addNeonColor, 500)