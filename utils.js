function generarAleatorio(min, max) {
    let random = Math.random(); // 0-1
    // EJEMPLO: max es 600, minimo es 5
    let numero = random * (max - min); 
    let numeroEntero = Math.ceil(numero);//Probó antes con parseInt, cambió a esta función,
    //pero no devuelve los números límites del rango 
    // EJEMPLO: 0
    numeroEntero = numeroEntero + min; // 5-600
    return numeroEntero
}//Este está planteado para el juego de limones en el video.

function generarAleatorio2(min,max){
    let random=Math.random();
    let numero=random*(max-min+1);
    let numeroEntero = Math.ceil(numero);
    numeroEntero = numeroEntero+min-1;
    return numeroEntero
}//Este está puesto en el juego del gato.

function mostrarEnSpan(idSpan,valor){
    let componente=document.getElementById(idSpan)
        componente.textContent=valor;
}
