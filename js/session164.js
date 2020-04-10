const url = 'https://blockchain.info/ticker';

function recupererPrix() {

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
                let prixEnEuros = reponse.EUR.last;
                //console.log(prixEnEuros);//  ligne de test en console pour voir ce que l'on a récupéré
                document.querySelector('#price_label').textContent = prixEnEuros;
            }
            else {
                alert("Un problème est survenue, merci de revenir plus tard.");
            }
        }
    }
    console.log('Prix actualisé');
}
setInterval(recupererPrix, 1000);