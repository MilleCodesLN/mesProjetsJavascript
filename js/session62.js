function somme(nombre) {
    if (nombre == 1) {
        return 1;
    }
    return nombre + somme(nombre - 1);
}

let nombreChoisi = Number(prompt("Veuillez taper un nombre :"));
alert(somme(nombreChoisi));
