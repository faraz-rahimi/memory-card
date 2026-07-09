const question = document.getElementById("question");
const answer = document.getElementById("answer");
const btn = document.getElementById("btn");
const cards = document.getElementById("cards");

function addCard() {
  const qv = question.value;
  const av = answer.value;

  if (!qv || !av) {
    alert("Please fill in both fields.");
    return;
  }

  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);
  const h1 = document.createElement("h1");
  h1.classList.add("h1");
  card.appendChild(h1);
  const p = document.createElement("p");
  p.classList.add("paragraph");
  card.appendChild(p);
  const button = document.createElement("button");
  button.classList.add("show-btn");
  card.appendChild(button);
  button.textContent = "show answer";

  h1.textContent = qv;
  p.textContent = "answer: " + av;
  p.style.display = "none";
  question.value = "";
  answer.value = "";

  button.addEventListener("click", () => {
    p.style.display = "block";
    setTimeout(() => {
      p.style.display = "none";
    }, 1000);
  });
}
btn.addEventListener("click", addCard);

question.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addCard();
  }
});
answer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addCard();
  }
});