const buttonEl = document.getElementById("home-button");
let homeEl = document.querySelector(".home-container");

buttonEl.addEventListener("click", () => {
  console.log("clicked");
  homeEl.classList.add("hidden");
});
