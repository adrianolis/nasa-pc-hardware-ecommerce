// promocoes.js

// Realça o item ativo no menu de navegação
document.querySelectorAll('.menu-item').forEach((menuItem) => {
    menuItem.addEventListener('click', (e) => {
      document.querySelectorAll('.menu-item').forEach((item) => item.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
  
  // Adiciona destaque ao produto ao passar o mouse
  document.querySelectorAll('.product').forEach((product) => {
    product.addEventListener('mouseover', () => {
      product.style.transform = 'scale(1.05)';
      product.style.transition = 'transform 0.3s';
    });
  
    product.addEventListener('mouseout', () => {
      product.style.transform = 'scale(1)';
    });
  });
  
  // Exibe um alerta ao clicar no produto
  document.querySelectorAll('.product').forEach((product) => {
    product.addEventListener('click', () => {
      const price = product.dataset.price;
      const discount = product.dataset.discount;
      alert(`Você selecionou um produto com preço original de R$${price} e desconto de ${discount}%!`);
    });
  });
  