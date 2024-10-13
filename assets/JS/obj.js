const sum = document.getElementById('sum');
const negrita = document.getElementById('black');
var counter = 0;

sum.addEventListener('click', () => {
    counter++;
    if (counter % 2 !== 0) {
        negrita.textContent = "CERRAR MENÚ";
        negrita.style.fontWeight = "bold";
        negrita.style.textAlign = "center";
        negrita.style.display = "flex";
        negrita.style.justifyContent = "center";
    }else{
        negrita.textContent = "MENÚ";
        negrita.style.fontWeight = "bold";
        negrita.style.textAlign = "left";
        negrita.style.display = "flex";
        negrita.style.justifyContent = "flex-start";
    }
    if(counter > 1){
        counter = 0;
    }
});


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
    abrirModal.addEventListener('click', () => {
        alert('¡Email copiado al portapapeles!');
        var copyText = email;
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    });
}
