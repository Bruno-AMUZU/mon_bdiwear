function openMenu(x) {
    x.classList.toggle("change");
    const menu = document.querySelector('.for_burger_menu');
    const breadcrumb = document.querySelector('#breadcrumb');
    
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        breadcrumb.style.display = 'block';
    } else {
        menu.style.display = 'flex';
        breadcrumb.style.display = 'none';
    }
}