let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSecretos = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p', `¡Acertaste, número adivinado al ${intentos}${intentos == 1 || intentos == 3 ? 'er' : 'do'} intento!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto < numeroUsuario) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(numeroMaximo) {
    let numeroAleatorio =  Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroAleatorio);
    console.log(listaNumerosSecretos);

    if (listaNumerosSecretos.length == numeroMaximo) {
        asignarTextoElemento('p', '¡Has adivinado todos los números posibles!')
    } else {
        if (listaNumerosSecretos.includes(numeroAleatorio)) {
            return generarNumeroSecreto(numeroMaximo);
        } else {
            listaNumerosSecretos.push(numeroAleatorio);
            return numeroAleatorio
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Bienvenido al Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(numeroMaximo);
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();