function openMenu(x) {
    x.classList.toggle("change");
    const menu = document.querySelector('.for_burger_menu');
    const breadcrumb = document.querySelector('#breadcrumb');
    menu.style.display = 'flex';
    breadcrumb.style.display = 'none';
}