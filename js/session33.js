// Voici ce que nous allons faire: un calculateur d'IMC !

let poidsUtilisateur = prompt("Veuillez indiquer votre poids en kg :");
let tailleUtilisateur = prompt("Veuillez indiquer maintenant votre taille en centimètres");

poidsUtilisateur = Number(poidsUtilisateur);
tailleUtilisateur = Number(tailleUtilisateur);

function calculerIMC(poids, taille) {
    tailleEnMetre = taille / 100;
    //let IMC = poids / (tailleEnMetre * tailleEnMetre);
    let tailleCalculee = Math.pow(tailleEnMetre, 2);
    let IMC = poids / tailleCalculee;
    return IMC
}
alert("Votre IMC est de : " + calculerIMC(poidsUtilisateur, tailleUtilisateur) + "!");

