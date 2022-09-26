const canvas = document.getElementById('telaDesenho');

function desenhaForca() {
    let ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(300, 235);
    ctx.lineTo(500, 235);
    ctx.moveTo(350, 235);
    ctx.lineTo(350, 5);
    ctx.lineTo(450, 5);
    ctx.lineTo(450, 35)
    ctx.stroke();
    ctx.closePath();
}

function desenhaCabeca() {
    let ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(450, 50, 15, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
}

function desenhaCorpo() {
    let ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(450, 65);
    ctx.lineTo(450, 140);
    ctx.stroke();
    ctx.closePath();
}

function desenhaPernas() {
    let ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(450, 140);
    ctx.lineTo(465, 175);
    ctx.moveTo(450, 140);
    ctx.lineTo(435, 175);
    ctx.stroke();
    ctx.closePath();
}

function desenhaBracos() {
    let ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(450, 70);
    ctx.lineTo(465, 90);
    ctx.moveTo(450, 70);
    ctx.lineTo(435, 90);
    ctx.stroke();
    ctx.closePath();
}

function desenhaLinhas(valor) {
    let moveX = 0;
    let moveY = 0;
    let lineX = 0;
    let lineY = 0;
    let ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenhaForca();

    for (let i = 0; i < valor; i++) {
        if (i == 0) {
            moveX = 250;
            moveY = 300;
            lineX = 280;
            lineY = 300;

            ctx.beginPath();
            ctx.moveTo(moveX, moveY);
            ctx.lineTo(lineX, lineY);
            ctx.stroke();
            ctx.closePath();
        } else {
            moveX += 40;
            lineX += 40;

            ctx.beginPath();
            ctx.moveTo(moveX, moveY);
            ctx.lineTo(lineX, lineY);
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function desenhaLetra(letra, posicao) {
    let moveX = 250;
    let moveY = 290;

    moveX = moveX + (posicao * 40);

    let ctx = canvas.getContext('2d');
    ctx.font = '50px serif'
    ctx.fillText(letra, moveX, moveY);
}

function desenhaLetraErro(letra) {
    let moveX = 250;
    let moveY = 350;

    moveX = moveX + (posicaoLetraErro * 40);

    let ctx = canvas.getContext('2d');
    ctx.font = '30px serif'
    ctx.fillText(letra, moveX, moveY);
    posicaoLetraErro++;
}

function desenhaFraseFinal(frase) {
    let moveX = 600;
    let moveY = 200;

    let ctx = canvas.getContext('2d');
    ctx.font = '30px serif'
    ctx.fillText(frase, moveX, moveY);
}
