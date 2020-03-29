let nombreUn = 4, nombreDeux = 7;

function addition(nombreA, nombreB = 10) {
    let resultat = nombreA + nombreB;

    return resultat; //retourne un resultat

}
alert("Nous avons deux nombres : nombreUn = " + nombreUn + " , et nombreDeux = " + nombreDeux);
alert("Voici le résultat de l'addition de ces deux nombres : " + addition(nombreUn, nombreDeux));

alert("J'ai défini un paramètre par défaut, ma fonction prend un nombre et par défaut un deuxieme nombre qui s'il n'est pas défini vaut 10.");
alert("Testons maintenant en ne passant qu'un paramètre à notre fonction addition, le nombreUn");
alert("Voici le résultat de l'addition avec juste nombreUn passé en paramètre : " + addition(nombreUn));


//-------------------Nous allons cuisiner maintenant ;-) ------------

let preparation = 10, cuisson = 15;

function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15) {
    let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
    return resultat;

}
let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20);
console.log(tempsDePreparationFraisier + tempsDePreparationChocolat);