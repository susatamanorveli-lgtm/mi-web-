// =============================
// COCINA CON AMOR - SCRIPT JS
// =============================

// SCROLL SUAVE EN EL MENÚ
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// CAMBIAR COLOR DEL HEADER AL HACER SCROLL
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = "#ff4d4d";
        header.style.transition = "0.3s";
    } else {
        header.style.background = "linear-gradient(135deg, #ff914d, #ff4d4d)";
    }
});

// ANIMACIÓN AL APARECER TARJETAS
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.3 });

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
});

// BOTÓN WHATSAPP CON MENSAJE AUTOMÁTICO
const whatsappBtn = document.querySelector('.contacto a');

whatsappBtn.addEventListener('click', function () {
    const mensaje = encodeURIComponent("Hola, quiero hacer un pedido en Cocina con Amor 🍽️");
    this.href = "https://wa.me/1234567890?text=" + mensaje;
});