const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle");

if (navToggle) {

    navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    navToggle.classList.toggle("active");
    });
    
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
    navToggle.classList.remove("active");
}

navLink.forEach(n => n.addEventListener('click', linkAction))