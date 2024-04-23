const btnMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links")

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    menu.classList.toggle("show")
});

menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
        btnMenu.classList.remove("active");
        menu.classList.remove("show")
    })
})