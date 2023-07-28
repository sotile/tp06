var cantidadDeGatos = 10;
var cantidadDePasos = 5;
var gatos = ['🐈', '🐈‍⬛'];
for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = '';
    for (var j = 1; j <= cantidadDePasos; j++) {
        pasos += '🐾';
    }
    console.log('C Gato #' + i + ': ' + gatos[(i - 1) % 2] + ' ' + pasos);
}
