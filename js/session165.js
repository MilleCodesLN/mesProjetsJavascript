const url = 'https://lesoublisdelinfo.com/api.php';

let requete = new XMLHttpRequest(); // Créer un objet

//GET
// requete.open('GET', url); // Premier paramètre GET / POST , deuxième paramètre url de l'API
// requete.responseType = 'json'; //Nous attendons du JSON
// requete.send(); //Nous envoyons notre requête


//POST 
requete.open('POST', url);
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
requete.responseType = 'json';
requete.send('prenom=John');

requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let reponse = requete.response;
            console.log(reponse);

        }
        else {
            alert('Un problème est intervenue, merci de réessayer plus tard.');
        }
    }
}