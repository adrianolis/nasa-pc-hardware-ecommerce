// Seleciona os elementos do DOM
const quantityInputs = document.querySelectorAll('.quantity-input');
const itemTotals = document.querySelectorAll('.item-total');
const cartTotal = document.getElementById('cart-total');

// Atualiza o total de cada item e o total do carrinho
function updateCartTotals() {
  let total = 0;
  quantityInputs.forEach((input, index) => {
    const price = parseFloat(input.closest('tr').querySelector('[data-price]').dataset.price);
    const quantity = parseInt(input.value, 10);
    const itemTotal = price * quantity;

    itemTotals[index].textContent = `R$ ${itemTotal.toFixed(2)}`;
    total += itemTotal;
  });
  cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Adiciona eventos de input nos campos de quantidade
quantityInputs.forEach((input) => {
  input.addEventListener('input', updateCartTotals);
});

// Adiciona funcionalidade aos botões
document.querySelector('.continue-btn').addEventListener('click', () => {
  window.location.href = '../src/index.html'; // Redireciona para a página principal
});

document.querySelector('.checkout-btn').addEventListener('click', () => {
  alert('Redirecionando para o pagamento...');
  window.location.href = 'checkout.html'; // Redireciona para a página de pagamento
});

// Atualiza o carrinho inicialmente
updateCartTotals();

function saveCart() {
    const cartData = Array.from(quantityInputs).map((input, index) => ({
      name: input.closest('tr').querySelector('p').textContent,
      quantity: input.value,
      price: parseFloat(input.closest('tr').querySelector('[data-price]').dataset.price),
    }));
    localStorage.setItem('cart', JSON.stringify(cartData));
  }
  
  quantityInputs.forEach((input) => {
    input.addEventListener('input', () => {
      updateCartTotals();
      saveCart();
    });
  });
  
  // Restaurar dados do Local Storage
  function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      savedCart.forEach((item, index) => {
        quantityInputs[index].value = item.quantity;
      });
      updateCartTotals();
    }
  }
  
  window.onload = loadCart;
  