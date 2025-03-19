const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('mail');
    var errorMessage = document.getElementById('error-message');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        event.preventDefault();
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Insert the email into the "Hire Me" form
        var hireEmailInput = document.getElementById('hire-email');
        hireEmailInput.value = emailInput.value;
    }
});

