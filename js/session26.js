let nombreUn = 4, nombreDeux = 7;

alert("Nous avons deux nombres : nombreUn = " + nombreUn + " , et nombreDeux = " + nombreDeux);
function addition(nombreA, nombreB) {
    let resultat = nombreA + nombreB;
    //console.log(resultat);// affiche
    return resultat; //retourne un resultat
    console.log('test');//Ne sera pas exécuté puisque c'est après le return

}
alert("Voici le résultat de l'addition de ces deux nombres : " + addition(nombreUn, nombreDeux));


function division(nombreA, nombreB) {
    let resultat = nombreA / nombreB;

    return resultat; //retourne un resultat

}
alert("Voici le résultat de la division de ces deux nombres : " + division(nombreUn, nombreDeux));

let resultatAddition = addition(nombreUn, nombreDeux);
let resultatDivision = division(nombreUn, nombreDeux);

alert("Voici le résultat de la multiplication de ces deux résultats : " + (resultatAddition * resultatDivision));
