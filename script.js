const question = document.getElementById("question");
const answer = document.getElementById("answer");
const btn = document.getElementById("btn");
const cards = document.getElementById("cards");

const savedCards = localStorage.getItem("memory");
let memoryCards = JSON.parse(savedCards) || [];

const createCard = (qv, av, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const h1 = document.createElement("h1");
  h1.classList.add("h1");
  h1.textContent = qv;
  const p = document.createElement("p");
  p.classList.add("paragraph");
  p.textContent = "answer: " + av;
  p.style.display = "none";
  const showBtn = document.createElement("button");
  showBtn.classList.add("show-btn");
  showBtn.textContent = "show answer";
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "×";
  showBtn.addEventListener("click", () => {
    p.style.display = "block";
    setTimeout(() => {
      p.style.display = "none";
    }, 1000);
  });
  deleteBtn.addEventListener("click", () => {
    memoryCards.splice(index, 1);
    localStorage.setItem("memory", JSON.stringify(memoryCards));
    card.remove();
  });
  card.appendChild(h1);
  card.appendChild(p);
  card.appendChild(showBtn);
  card.appendChild(deleteBtn);
  cards.appendChild(card);
};

const addCard = () => {
  const qv = question.value.trim();
  const av = answer.value.trim();
  if (!qv || !av) {
    alert("Please fill in both fields.");
    return;
  }

  memoryCards.push({
    question: qv,
    answer: av,
  });

  localStorage.setItem("memory", JSON.stringify(memoryCards));

  createCard(qv, av, memoryCards.length - 1);

  question.value = "";
  answer.value = "";
};

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

memoryCards.forEach((card, index) => {
  createCard(card.question, card.answer, index);
});
