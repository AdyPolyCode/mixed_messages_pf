import { msgGenerator } from "./main.js";

const messageOne = msgGenerator();
const messageTwo = msgGenerator();
const messageThree = msgGenerator();

const buttonEl = document.getElementById("home-button");
let homeEl = document.querySelector(".home-container");
let windowEl = document.querySelector(".message-window");
let messageOneEl = document.getElementById("text-one");
let messageTwoEl = document.getElementById("text-two");
let messageThreeEl = document.getElementById("text-three");

buttonEl.addEventListener("click", () => {
  homeEl.classList.add("hidden");
  windowEl.classList.remove("hidden");
  messageOneEl.textContent = messageOne;
  messageTwoEl.textContent = messageTwo;
  messageThreeEl.textContent = messageThree;
});
