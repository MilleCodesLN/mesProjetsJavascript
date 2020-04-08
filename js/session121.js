//On récupère nos éléments et on déclare nos variables
let btn = document.querySelector('button');
let p = document.querySelector('p');
let hidden = true;

// on ajoute le style
btn.textContent = "Afficher le spoiler";
p.innerHTML = "Je suis un spoiler";
p.className = "d-none p-3";


//on détecte le clic et on crée l'action à réaliser
btn.addEventListener('click', () => {
    if (hidden == true) {
        btn.textContent = "Cacher le spoiler";
        p.className = "p-3";
        hidden = false;
    }
    else {
        btn.textContent = "Afficher le spoiler";
        p.className = "d-none";
        hidden = true;
    }
})