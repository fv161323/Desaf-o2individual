// Nuestras variables
var canvas, ctx, img, x, y, step, direction;

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
img = document.getElementById('img');

// La posición x inicial, variara con cada paso
x = 0;
// La posición y inicial, quedará estatica
y = 25;

// Numerador de paso, lo usaremos para saber que frame dibujar
step = 0;

// Direccion, 1 derecha, -1 izquierda
direction = 1;

setInterval(function() {
    // Borramos lo dibujado
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibujamos el frame adecuado en la posicion correspondiente
    ctx.drawImage(
        // Imagen
        img,
        // Source x
        (step++ %4) * 23, // Avance sobre el eje x
        // Source y
        [40, 0, 80][direction + 1], // Selecciona el frame adecuado
        // Source width
        23,
        // Source height
        40,
        // Dest x
        x,
        // Dest y
        y,
        // Dest width
        23,
        // Dest height
        40
    );
           
    // Avance, indistinto de la direccion
    x += 5 * direction;
    
    // Si toca un limite, cambiamos la dirección
    if (x >= canvas.width - 23 || x <= 0) {
        direction = -direction;
    }
}, 1000 / 12); // Aproximadamente 12 frames por segundo