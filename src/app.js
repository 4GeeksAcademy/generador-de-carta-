import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  function generateCard() {

    const carta = document.querySelector("#carta")
    const signs = ["♦", "♥", "♠", "♣"];
    const numbersAndHeads = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    function randomSign() {
      let randomSign = signs[Math.floor(Math.random() * signs.length)]
      if (randomSign === "♦" || randomSign === "♥") {
        return `<span style="color: red;">${randomSign}</span>`;
      };
      return randomSign
    }
    let sign = randomSign()
    function randomNumberAndHeads() {
      let randomNumberAndHeads = numbersAndHeads[Math.floor(Math.random() * numbersAndHeads.length)]

      return randomNumberAndHeads
    }

    carta.innerHTML = '<div class="content fs-1 container bg-light border rounded my-4 w-50 "></div>';
    const content = document.querySelector(".content")
    content.innerHTML = `<div>${sign}</div>` + `<div class="container py-5 text-center" style=" font-size:9rem" >${randomNumberAndHeads()}</div><div class="text-end">${sign}</div>`
  }
  generateCard()

  let button = document.createElement("button");
  button.innerHTML ="Click me!"
  button.classList.add("btn-primary", "btn", "text-center")
  document.body.appendChild(button)




















};
