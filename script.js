// Função para alternar entre as páginas
function togglePage(pageId) {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav li a');

    sections.forEach(section => {
        if (section.id === pageId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });

    // Adicionar classe 'active' ao botão correspondente à página atual
    navLinks.forEach(link => {
        if (link.getAttribute('href').replace('#', '') === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Toggle da barra lateral para dispositivos móveis
const navToggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

navToggler.addEventListener('click', () => {
    aside.classList.toggle('active');
});

// Fechar a barra lateral ao clicar em um link
const navLinks = document.querySelectorAll('.nav li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            aside.classList.remove('active');
        }
    });
});

// Abrir na página inicial (home) ao carregar o site
window.addEventListener('DOMContentLoaded', () => {
    togglePage('home');
});

