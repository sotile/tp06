var cantidadDeGatos = 3;
var cantidadDePasos = 9;
for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = '';
    for (var j = 1; j <= cantidadDePasos; j++) {
        pasos += '🐾';
    }
    console.log('B Gato #' + i + ': 🐈 ' + pasos);
}