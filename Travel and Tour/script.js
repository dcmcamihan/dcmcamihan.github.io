const header = document.querySelector("header");
const logo = document.querySelector(".logo img");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
    logo.classList.toggle("hidden", window.scrollY > 0);
});