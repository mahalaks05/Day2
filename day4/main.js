import { createProfileCard } from "./cardModule.js";

const addProfileBtn = document.getElementById("addProfileBtn");
const cardContainer = document.getElementById("cardContainer");

addProfileBtn.addEventListener("click", () => {
  const name = prompt("Enter Name:");
  if (!name) return;

  const role = prompt("Enter Role:");
  if (!role) return;

  const newCard = createProfileCard(name, role);
  cardContainer.appendChild(newCard);
});
