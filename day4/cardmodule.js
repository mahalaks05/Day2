// Function to create a profile card
export function createProfileCard(name, role) {
  const card = document.createElement("div");
  card.classList.add("card");

  const nameElem = document.createElement("h3");
  nameElem.textContent = name;

  const roleElem = document.createElement("p");
  roleElem.textContent = role;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("removeBtn");
  removeBtn.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(nameElem);
  card.appendChild(roleElem);
  card.appendChild(removeBtn);

  return card;
}
