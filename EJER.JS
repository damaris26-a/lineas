const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

const W = canvas.width;   // 800
const H = canvas.height;  // 800

// Dimensiones del cuadro del centro (Fondo del túnel)
const anchoCentro = 400;
const altoCentro = 250;

// Coordenadas del cuadro central perfectamente centrado
const xIzq = (W - anchoCentro) / 2;  // 200
const xDer = xIzq + anchoCentro;      // 600
const yArr = (H - altoCentro) / 2;   // 275
const yAbj = yArr + altoCentro;       // 525

// Configuración de las líneas de perspectiva (Líneas azules del boceto)
ctx.strokeStyle = '#000000'; 
ctx.lineWidth = 2;

// 1. DIBUJAR LAS 4 LÍNEAS DE LAS ESQUINAS (Efecto túnel 3D)
ctx.beginPath();
ctx.moveTo(0, 0); ctx.lineTo(xIzq, yArr); // Esquina superior izquierda
ctx.moveTo(W, 0); ctx.lineTo(xDer, yArr); // Esquina superior derecha
ctx.moveTo(0, H); ctx.lineTo(xIzq, yAbj); // Esquina inferior izquierda
ctx.moveTo(W, H); ctx.lineTo(xDer, yAbj); // Esquina inferior derecha
ctx.stroke();

// Configuración para las líneas de las paredes 
ctx.strokeStyle = '#141414'; 
ctx.lineWidth = 1;
const densidad = 50; // Cantidad de líneas por sección

// 2. PARED SUPERIOR (Líneas verticales arriba)
for (let i = 0; i <= densidad; i++) {
    let p = i / densidad;
    let xFondo = xIzq + (anchoCentro * p); // Punto en el cuadro del centro
    let xFrente = W * p;                   // Punto en el borde exterior de 800
    ctx.beginPath();
    ctx.moveTo(xFrente, 0);
    ctx.lineTo(xFondo, yArr);
    ctx.stroke();
}

// 3. PARED INFERIOR (Líneas verticales abajo)
for (let i = 0; i <= densidad; i++) {
    let p = i / densidad;
    let xFondo = xIzq + (anchoCentro * p);
    let xFrente = W * p;
    ctx.beginPath();
    ctx.moveTo(xFrente, H);
    ctx.lineTo(xFondo, yAbj);
    ctx.stroke();
}

// 4. PARED IZQUIERDA (Líneas horizontales a la izquierda)
for (let i = 0; i <= densidad; i++) {
    let p = i / densidad;
    let yFondo = yArr + (altoCentro * p);
    let yFrente = H * p;
    ctx.beginPath();
    ctx.moveTo(0, yFrente);
    ctx.lineTo(xIzq, yFondo);
    ctx.stroke();
}

// 5. PARED DERECHA (Líneas horizontales a la derecha)
for (let i = 0; i <= densidad; i++) {
    let p = i / densidad;
    let yFondo = yArr + (altoCentro * p);
    let yFrente = H * p;
    ctx.beginPath();
    ctx.moveTo(W, yFrente);
    ctx.lineTo(xDer, yFondo);
    ctx.stroke();
}

// 6. DIBUJAR EL CUADRADO DEL CENTRO (Al final para que quede limpio al fondo)
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 3;
ctx.fillStyle = '#fdfdfd'; // Fondo un poco más oscuro para el cuadro del centro
ctx.fillRect(xIzq, yArr, anchoCentro, altoCentro);
ctx.strokeRect(xIzq, yArr, anchoCentro, altoCentro);