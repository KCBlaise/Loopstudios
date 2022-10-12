const body = document.querySelector('body');
const mobileNav = document.querySelector('.mobile-nav');

const hamburgerBtn = document.querySelector('#hamburger-btn');
const closeBtn = document.querySelector('#close-nav-btn');

hamburgerBtn.addEventListener('click', () => {
    mobileNav.classList.remove('hidden');
    body.style.overflow = "hidden"; // Prevent background scrolling
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    body.style.overflow = "auto"; // Resume scrolling when nav is closed
});