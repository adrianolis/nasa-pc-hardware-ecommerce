document.addEventListener("DOMContentLoaded", () => {
    const drawerButtons = document.querySelectorAll(".drawer-btn");
    const drawers = document.querySelectorAll(".drawer");

    drawerButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            drawers.forEach(drawer => {
                if (drawer.id === targetId.replace("#", "")) {
                    drawer.classList.toggle("active");
                } else {
                    drawer.classList.remove("active");
                }
            });
        });
    });
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const requiredFields = form.querySelectorAll('[required]');
    let valid = true;

    requiredFields.forEach(field => {
        if (!field.value) {
            valid = false;
            document.getElementById('error-message').style.display = 'block';
        }
    });

    if (!valid) e.preventDefault();
});

const shippingOptions = document.querySelectorAll('input[name="shipping"]');
shippingOptions.forEach(option => {
    option.addEventListener('change', () => {
        const shippingCost = option.value === 'correios' ? 13.7 : 10.2;
        document.getElementById('shipping-cost').innerText = `R$ ${shippingCost.toFixed(2)}`;
    });
});

document.getElementById('cep').addEventListener('blur', async () => {
    const cep = document.getElementById('cep').value;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (data.erro) {
        alert('CEP inválido.');
    } else {
        document.querySelector('[placeholder="Endereço"]').value = data.logradouro;
        document.querySelector('[placeholder="Bairro"]').value = data.bairro;
        document.querySelector('[placeholder="Cidade"]').value = data.localidade;
        document.querySelector('[placeholder="Estado"]').value = data.uf;
    }
});

