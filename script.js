document.addEventListener('DOMContentLoaded', () => {

  // 1. CONFIGURAÇÃO DO WHATSAPP (Mude o número aqui)
  const whatsappNumber = '5511999999999'; // Formato: 55 + DDD + Número sem traços
  const defaultMessage = 'Olá! Gostaria de saber mais sobre os colchões e tecnologias da Nippon Class.';

  // Redirecionamento dinâmico nos botões de WhatsApp
  const whatsappButtons = document.querySelectorAll('.js-whatsapp-btn');
  
  whatsappButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const encodedMessage = encodeURIComponent(defaultMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    });
  });


  // 2. MENU HAMBÚRGUER MOBILE
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Alterna ícone entre barras e 'X'
      const icon = hamburger.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Fecha o menu ao clicar em qualquer link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }


  // 3. EFEITO DE SOMBRA NO HEADER AO ROLAR A PÁGINA
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
  });

});