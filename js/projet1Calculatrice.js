//Etape 3: Etape 3 : Créer les 4 fonctions

function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}

function division(nombreA, nombreB) {
    if (nombreB == 0) {
        throw new Error("C'est impossible de diviser un nombre par 0!");
    } else {
        return nombreA / nombreB;
    }
}

var restart = false;
do {
    //Etape 1 : demander un mode de calcul
    do {
        var choix = Number(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Mulitiplication\n 3 - Soustraction\n 4 - Division"));
    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4)


    //Etape 2 : Demander deux nombres à utiliser

    do {
        var premierNombre = Number(prompt("Veuillez saisir un premier nombre pour votre calcul : "));
        var deuxiemeNombre = Number(prompt("Veuillez saisir un deuxième nombre pour votre calcul : "));
    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre))



    // Etape 4 : Appeler la fonction à utiliser
    // Etape 5 : Afficher le résultat
    // Etape 6 : Gérer les exceptions



    var resultat;
    try {
        switch (choix) {
            case 1:
                resultat = addition(premierNombre, deuxiemeNombre);
                break;
            case 2:
                resultat = multiplication(premierNombre, deuxiemeNombre);
                break;
            case 3:
                resultat = soustraction(premierNombre, deuxiemeNombre);
                break;
            case 4:
                resultat = division(premierNombre, deuxiemeNombre);
                break;

            default:
                throw new Error("Une erreur est survenue dans une alerte. \nNous ne sommes jamais à l'abri d'un bug.");
        }

        alert("le résultat du calcul est : " + resultat);
    } catch (error) {
        alert(error);
    }

    restart = confirm("Voulez-vous refaire un calcul?");
} while (restart)