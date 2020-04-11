let bouton = document.querySelector('#mode');
let span = document.querySelector('span');

function modeSombre() {
    document.body.className = 'dark';
    span.textContent = "Thème clair";
    localStorage.setItem('theme', 'sombre');
}


function verifTheme() {
    if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') == 'sombre') {
            modeSombre();
        }
    }
}

bouton.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        span.textContent = "Thème sombre";
        localStorage.setItem('theme', 'clair');
    } else {
        modeSombre();

    }
})
document.onload = verifTheme();