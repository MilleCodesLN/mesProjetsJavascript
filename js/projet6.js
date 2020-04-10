let ville = "Paris";
recevoirTemperature(ville);


let btnChanger = document.querySelector('#changer');
btnChanger.addEventListener('click', () => {
    ville = prompt("Quelle ville souhaitez-vous choisir?");
    recevoirTemperature(ville);

});



let affVille = document.querySelector('#ville');

function recevoirTemperature(ville) {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=6e1f893448bf514cc75f220ad77a9d39&units=metric';


    //Créer une requête
    let requete = new XMLHttpRequest(); // Créer un objet
    requete.open('GET', url); // Premier paramètre GET / POST , deuxième paramètre url de l'API

    requete.responseType = 'json'; //Nous attendons du JSON
    requete.send(); //Nous envoyons notre requête

    //Dès qu'on reçoit une réponse on effectue une fonction

    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;//on stocke  la réponse
                let temperature = reponse.main.temp;
                affVille.textContent = reponse.name;
                document.querySelector('#temperature_label').textContent = temperature;
            }
            else {
                alert("Un problème est survenu, merci de revenir plus tard.");
            }
        }
    }



}