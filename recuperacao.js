// Seleção de elementos
const form = document.getElementById("recuperacao-form");
const emailInput = document.getElementById("email");
const themeToggle = document.getElementById("theme-toggle");

// Validação do email
form.addEventListener("submit", (event) => {
  const email = emailInput.value.trim();
  if (!validateEmail(email)) {
    event.preventDefault();
    alert("Por favor, insira um email válido!");
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

