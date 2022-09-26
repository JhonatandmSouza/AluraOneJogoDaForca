const btnIniciar = document.getElementById('btnIniciar');

let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let palavras = "";
let palavraSorteada = '';
let letrasDigitadas = [];
let posicaoLetraErro = 0;
let contadorErros = 0;
let contadorAcertos = 0;
let jogoIniciado = false;

if (localStorage.getItem("palavras") == null) {
    localStorage.setItem("palavras", '["ALURA","ORACLE","ONE", "DESENVOLVEDOR"]');
}

btnIniciar.addEventListener('click', iniciarJogo);

document.addEventListener('keydown', (e) => {
    let letraDigitada = e.key.toUpperCase();
    if (jogoIniciado) {
        verificaLetra(letraDigitada);
    }
});


function iniciarJogo() {

    jogoIniciado = true;
    palavras = JSON.parse(localStorage.getItem("palavras"));
    palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
    desenhaLinhas(palavraSorteada.length);
    letrasDigitadas = [];
    posicaoLetraErro = 0;
    contadorErros = 0;
    contadorAcertos = 0;

    console.log(localStorage)
    console.log(palavraSorteada)
}

function verificaLetra(letra) {
    let achouLetra = false;

    if (!letrasDigitadas.includes(letra) && letras.includes(letra)) {
        letrasDigitadas.push(letra);

        for (let i = 0; i < palavraSorteada.length; i++) {
            if (palavraSorteada[i] == letra) {
                desenhaLetra(letra, i);
                achouLetra = true;
                contadorAcertos++;
            }
        }

        if (achouLetra == false) {
            contadorErros++;
            desenhaLetraErro(letra);
        }

        verificaErro(contadorErros);
        fimJogo();

    }
}

function verificaErro(contadorErros) {
    switch (contadorErros) {
        case 1:
            desenhaCabeca();
            break;
        case 2:
            desenhaCorpo();
            break;
        case 3:
            desenhaPernas();
            break;
        case 4:
            desenhaBracos();
            break;
    }
}

function fimJogo() {
    if (contadorAcertos == palavraSorteada.length) {
        jogoIniciado = false;
        desenhaFraseFinal('Parabén! Você ganhou!');
    } else if (contadorErros == 4) {
        jogoIniciado = false;
        desenhaFraseFinal('Que pena! Você perdeu!');
    }
}