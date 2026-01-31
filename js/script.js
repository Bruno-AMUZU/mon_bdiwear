let menuIcon = document.getElementById("menu_icon");
let burgerMenu = document.querySelector(".for_burger_menu");
let breadcrumb = document.querySelector('#breadcrumb');

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("change");

    if (burgerMenu.style.display === 'flex') {
        burgerMenu.style.display = 'none';
        breadcrumb.style.display = 'block';
    } else {
        burgerMenu.style.display = 'flex';
        breadcrumb.style.display = 'none';
    }
});