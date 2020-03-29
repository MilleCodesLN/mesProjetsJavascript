function prevoirAge() {
    let age = prompt("Quel âge avez-vous?"); // on récupère une chaine de caratères
    // alert("Vous aurez bientôt " + (age + 1) + " ans !"); // affiche une concaténation de chaine de caractères
    // ex: "30"+1 => "301"
    //age = parseInt(age);
    //age = parseFloat(age);

    age = Number(age);
    alert("Vous aurez bientôt " + (age + 1) + " ans !");
}

prevoirAge();

//-------Conversion de nombre en chaîne de caractères-----

//Méthode "barbare"

    //nombre = 45;
    //nombreEnString = 45 + "";

//Méthode recommandée

    //nombreEnString = nombre.toString();