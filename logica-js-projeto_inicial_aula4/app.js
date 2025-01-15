 /*
 Desafios
 */

 // 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
 alert ('Boas vindas ao nosso sistema!');
 console.log('Boas vindas ao nosso sistema');

 // 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
 let nome = "André Luiz";
 console.log(`O nome é ${nome}`);

// 3.  Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nomeAlert = 'André Luiz'; 
alert (`Olá,  ${nomeAlert}`);

// 4.  Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
 let pergunta = prompt('Qual linguagem você mais gosta?');
 alert (`Você gosta da liguagem: ${pergunta}`);
 console.log(`Você gosta da liguagem: ${pergunta}`);

// 5.  Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;
alert (`A soma dos valores é: ${resultado}`);
console.log(`A soma dos valores é : ${resultado}`);

// 6.  Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1sub = 100;
let valor2sub = 50;
let resultadosub = valor1sub - valor2sub;
alert (`A soma dos valores é: ${resultadosub}`);
console.log(`A soma dos valores é : ${resultadosub}`);

// 7.  Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let userIdade = prompt('Informe a sua idade:');
if (userIdade >= 18){
    alert('Você pode ser preso!');
    console.log ('Você pode ser preso!');
}else {
    alert('Você ainda pode cometer  crimes sem punição!');
    console.log ('Você ainda pode cometer  crimes sem punição!');
 }

// 8.  Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let validarNumero = prompt('Insira um valor:');

if (validarNumero >= 0){
        alert('O Número é positivo!');
        console.log ('O Número é positivo!');   
    }
        else if(validarNumero < 0){
            alert('O número é negativo!');
            console.log ('O número é negativo!');
            }
                else{
                    alert ('O número é 0');
                    console.log ('O número é 0!');
                }

// 9.  Use um loop while para imprimir os números de 1 a 10 no console.
let numeroContadorConsole = 1;
alert ('O Contador será iniciado agora!');

while(numeroContadorConsole  <=10){
    console.log(numeroContadorConsole);
    alert (`Número:  ${numeroContadorConsole}`);
    numeroContadorConsole++;
}

// 10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let notaSemestre = prompt ('Insira a nota do aluno:');

if (notaSemestre >= 7) {
    alert (`O Aluno está aprovado: ${notaSemestre}`);  
    console.log(`O Aluno está aprovado: ${notaSemestre}`);
} else if (notaSemestre < 7) {
    alert (`O Aluno está reprovado: ${notaSemestre}`);
    console.log(`O Aluno está reprovado: ${notaSemestre}`);
} else {
    alert (`Parâmetro inválido:  ${notaSemestre}`);
    console.log(`Parâmetro inválido:  ${notaSemestre}`);
}


// 11.  Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroRandom = Math.random()*10;
console.log (`O número gerado é: ${numeroRandom}`);
alert (`O Número gerado é:  ${numeroRandom}`);


// 12.  Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroRandomInt = Math.random(1,10)*10;
console.log (`O número gerado é: ${numeroRandomInt}`);
alert (`O Número gerado é:  ${numeroRandomInt}`);

// 13.  Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroRandomInt2 = Math.random(1,1000)*10;
console.log (`O número gerado é: ${numeroRandomInt2}`);
alert (`O Número gerado é:  ${numeroRandomInt2}`);


















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