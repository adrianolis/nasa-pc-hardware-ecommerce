document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroForm");
    const cpfInput = document.getElementById("cpf");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (e) {
        if (!validateCPF(cpfInput.value)) {
            alert("CPF inválido! Certifique-se de usar o formato 000.000.000-00.");
            e.preventDefault();
        } else if (!validateEmail(emailInput.value)) {
            alert("Por favor, insira um email válido.");
            e.preventDefault();
        }
    });

    function validateCPF(cpf) {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return regex.test(cpf);
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
