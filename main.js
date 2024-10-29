let adviceNumber = document.querySelector(".advice");
let generatedQuote = document.querySelector(".quote");
let spinner = document.querySelector(".spinner");
let button = document.querySelector(".glowing");

let adviceGeneratorData = async () => {
  let res = await fetch("https://api.adviceslip.com/advice");
  let data = await res.json();
  spinner.classList.add("d-none");
  adviceNumber.textContent = `ADVICE #${data.slip.id}`;
  generatedQuote.textContent = `${data.slip.advice}`;
};

button.addEventListener("click", () => {
  location.reload();
});

setTimeout(() => {
  adviceGeneratorData();
}, 3000);
