// Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

// Reveal Sections
sr.reveal('.home__data, .about__data, .skills__data, .projects__container, .contact__container, .footer');
sr.reveal('.home__img, .about__img, .skills__img', {delay: 400});
sr.reveal('.skills__item, .work__img, .contact__form', {interval: 200});


const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
       
        alert('Please fill out all fields.');
    } else if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    } else {
        alert(`Thank you, ${name}! Your message is being sent.`);
    }
});
// Dynamic Date and Time
function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Karachi', // PKT time zone
        hour12: true
    };
    datetimeElement.textContent = `Last Updated: ${now.toLocaleString('en-US', options)} PKT`;
}

updateDateTime(); // Initial call
setInterval(updateDateTime, 60000); // Update every minute