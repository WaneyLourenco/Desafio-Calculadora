// script.js

let display = document.getElementById('display');
let entradaAtual = '';
let operador = '';
let entradaAnterior = '';

function atualizarDisplay(valor) {
    display.innerText = valor;
}

function limparDisplay() {
    entradaAtual = '';
    operador = '';
    entradaAnterior = '';
    atualizarDisplay('');
}

function lidarComNumero(valor) {
    entradaAtual += valor;
    atualizarDisplay(entradaAtual);
}

function lidarComOperador(valor) {
    if (entradaAtual === '') return;
    entradaAnterior = entradaAtual;
    operador = valor;
    entradaAtual = '';
}

function calcular() {
    if (entradaAtual === '' || entradaAnterior === '') return;

    let resultado;
    const atual = parseFloat(entradaAtual);
    const anterior = parseFloat(entradaAnterior);

    switch (operador) {
        case '+':
            resultado = anterior + atual;
            break;
        case '-':
            resultado = anterior - atual;
            break;
        case 'x':
            resultado = anterior * atual;
            break;
        case '/':
            resultado = anterior / atual;
            break;
        default:
            return;
    }

    atualizarDisplay(resultado);
    entradaAtual = resultado.toString();
    operador = '';
    entradaAnterior = '';
}

function apagarUltimo() {
    entradaAtual = entradaAtual.slice(0, -1);
    atualizarDisplay(entradaAtual);
}

document.querySelectorAll('.btn').forEach(botao => {
    botao.addEventListener('click', function () {
        const valor = this.innerText;

        if (!isNaN(valor) || valor === '.') {
            lidarComNumero(valor);
        } else if (valor === 'C') {
            limparDisplay();
        } else if (valor === '<') {
            apagarUltimo();
        } else if (valor === '=') {
            calcular();
        } else {
            lidarComOperador(valor);
        }
    });
});
