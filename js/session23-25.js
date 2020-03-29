
function direBonjour(prenom) {
    alert("Bonjour " + prenom + " !");
}
direBonjour('Hélène');



let prenomUtlisateur = prompt("Veuillez entrer votre prénom : ");
let nbUn = prompt("Veuillez entrez un premier nombre");
let nbDeux = prompt("Veuillez entrez un deuxième nombre");

function addition(nombreUn, nombreDeux) {
    nombreUn = parseInt(nombreUn);
    nombreDeux = parseInt(nombreDeux)
    let resultat = nombreUn + nombreDeux;
    alert("voici le résultat de l'addtion de vos deux nombres : " + resultat + "!");

}

direBonjour(prenomUtlisateur);
addition(nbUn, nbDeux);