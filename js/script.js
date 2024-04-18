const btnMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links")

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    menu.classList.toggle("show")
});