 /*
 Desafios
 */

//1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let numeroContador = 1;
alert ('O Contador será iniciado agora!');

while(numeroContador  <=10){
    console.log(numeroContador);
    alert (`Número:  ${numeroContador}`);
    numeroContador++;
}


//2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número..
let numeroContadorInverso = 10;
alert ('O Contador será iniciado agora!');

while(numeroContadorInverso  >=1){
    console.log(numeroContadorInverso);
    alert (`Número:  ${numeroContadorInverso}`);
    numeroContadorInverso--;
}

//3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contadorRegressivo = parseInt(prompt('Insira um número entre 5 e 10'));
alert ('A Contagem regressiva será iniciada agora!');

while(contadorRegressivo >= 0){
    console.log(contadorRegressivo);
    alert (`Número:  ${contadorRegressivo}`);
    contadorRegressivo--;
}

//4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contadorProgressivo = parseInt(prompt('Insira um número entre 5 e 10'));
let contador = 0;
alert ('A Contagem progressiva será iniciada agora!');
if (contadorProgressivo>=0){
    contador = 1;
}

while(contador <= contadorProgressivo){
    console.log(contador);
    alert (`Número:  ${contador}`);
    contador++;
}