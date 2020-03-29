function addition(nombreUn, nombreDeux) {
    nombreUn = parseInt(nombreUn);
    nombreDeux = parseInt(nombreDeux)
    let resultat = nombreUn + nombreDeux;
    alert("voici le résultat de l'addtion de vos deux nombres : " + resultat + "!");

}

function direBonjour(prenom) {
    alert("Bonjour " + prenom + " !");
}

let prenomUtlisateur = prompt("Veuillez entrer votre prénom : ");
direBonjour(prenomUtlisateur);
let nbUn = prompt("Veuillez entrez un premier nombre");
let nbDeux = prompt("Veuillez entrez un deuxième nombre");
addition(nbUn, nbDeux);