const navUl = document.getElementById('navUl');
const menuBtn = document.getElementById('menu');
let isMenuOpen = false;
if (window.innerWidth <= 767) {
    // Maneja el clic en el botón de menú
    menuBtn.addEventListener('click', (event) => {
        isMenuOpen = !isMenuOpen;
        navUl.style.display = isMenuOpen ? 'flex' : 'none';
        event.stopPropagation(); // Evita que el evento se propague y cierre el menú inmediatamente
    });

    // Maneja el clic fuera del menú para cerrarlo
    document.addEventListener('click', (event) => {
        // Si el menú está abierto y el clic no fue en el botón del menú o dentro del menú
        if (isMenuOpen && !menuBtn.contains(event.target) && !navUl.contains(event.target)) {
            isMenuOpen = false;
            navUl.style.display = 'none';
        }
    });
}