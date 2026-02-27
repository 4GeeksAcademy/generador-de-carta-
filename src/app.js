import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const carta = document.querySelector("#carta");

  const SIGNS = ["♦", "♥", "♠", "♣"];
  const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function getSignHTML(sign) {
    const isRed = sign === "♦" || sign === "♥";
    return `<span style="color:${isRed ? "red" : "black"}">${sign}</span>`;
  }

  function generateCard() {
    const sign = getRandom(SIGNS);
    const value = getRandom(VALUES);

    carta.innerHTML = `
      <div class="fs-1 container bg-light border rounded my-4 text-center" style="width:20rem;">
        <div class="text-start">${getSignHTML(sign)}</div>
        <div class="py-5" style="font-size:9rem">${value}</div>
        <div class="text-end">${getSignHTML(sign)}</div>
      </div>
    `;
  }

  generateCard();

  const button = document.createElement("button");
  button.innerHTML = "Generate card";
  button.classList.add("btn", "btn-primary", "d-block", "mx-auto");
  button.addEventListener("click", generateCard);

  document.body.appendChild(button);

};