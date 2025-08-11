let memory = 0;
let isDark = false;

function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    alert("Invalid Expression");
  }
}

function memoryAdd() {
  memory += parseFloat(document.getElementById("display").value) || 0;
}

function memorySubtract() {
  memory -= parseFloat(document.getElementById("display").value) || 0;
}

function memoryRecall() {
  document.getElementById("display").value = memory;
}

function memoryClear() {
  memory = 0;
}

function saveToHistory() {
  const expr = document.getElementById("display").value;
  if (expr) {
    const li = document.createElement("li");
    li.textContent = expr;
    document.getElementById("history").appendChild(li);
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  isDark = !isDark;
}
