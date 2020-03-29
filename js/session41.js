//let x = 2;

// if (x > 3) {
//     console.log("X est supérieur à trois");
// } else {
//     console.log('X est inférieur à trois');
// }

//x > 3 ? console.log("X est supérieur à trois") : console.log('X est inférieur à trois');

let gardeDeDepart = "Valenciennes";
let gareDArrivee = prompt("Où voulez-vous allez?") || "Gare de Lille";
let chauffeur = "Hélène";

if ((gardeDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
    alert('Le train va démarrer à destination de ' + gareDArrivee + ' .');
} else {
    alert('Le train ne peut pas démarrer.');
}