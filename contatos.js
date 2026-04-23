document.addEventListener("DOMContentLoaded", () => {
    // Exibir um alerta ao clicar em qualquer link social
    const socialLinks = document.querySelectorAll(".social-link");
    socialLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        alert(`Você está sendo redirecionado para: ${link.href}`);
      });
    });
  
    // Animação do cartão no carregamento
    const card = document.querySelector(".card");
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
  
    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 300);
  });
  