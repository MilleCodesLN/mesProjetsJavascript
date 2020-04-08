let btn = document.createElement('button');
let section = document.body.querySelector('section')
let secondes = 10;
let interval;


btn.textContent = "Lancer le décompte";
section.prepend(btn);

btn.addEventListener('click', start);


function start() {

    interval = setInterval(decompte, 1000);
}

function decompte() {
    if (secondes === 0) {
        stop();
    } else {
        section.innerHTML += '<br>' + secondes;
        secondes--;
    }
}

function stop() {
    clearInterval(interval);
    section.innerHTML += "<br>Stop !";
}