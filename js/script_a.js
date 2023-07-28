var cantidadDeGatos = 10;
var emojis = ['😺', '😸', '😹'];
for (var i = 1; i <= cantidadDeGatos; i++) {
    console.log('A Gato #' + i + ': ' + emojis[(i - 1) % 3]);
}
