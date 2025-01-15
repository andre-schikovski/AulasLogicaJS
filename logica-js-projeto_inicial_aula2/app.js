 /*
 Desafios
 */

//1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
alert('Boas vindas ao nosso site!');
let diaSemana = prompt('Insira o dia da Semana atual:');

if (diaSemana.toLowerCase() === "sábado" || diaSemana.toLowerCase() === "sabado" || diaSemana.toLowerCase() === "domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

//2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt ('Insira um número:');

if (numero > 0) {
    alert (`O Número informado é positivo: ${numero}`);  
    console.log('O Número informado é positivo!');
} else if (numero < 0) {
    alert (`O Número informado é negativo: ${numero}`);
    console.log('O Número informado é negativo!');
} else {
    alert (`O Número informado é zero:  ${numero}`);
    console.log('O número é zero.');
}
//3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt ('Informe a pontuação final do jogo:');

if (pontuacao >= 100){
    alert('Parabéns você venceu!');
    console.log ('Parabéns você venceu');
}else {
    alert('Tente novamente!');
    console.log ('Tente novamente!');
 }


//4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let nomeCliente  = prompt ('Insira o seu nome completo');
let saldoCliente = 1234.56;
alert (`Olá, ${nomeCliente}! Seu saldo é de R$ ${saldoCliente.toFixed(2)}.`)
console.log(`Olá, ${nomeCliente}! Seu saldo é de R$ ${saldoCliente.toFixed(2)}.`);


//5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
alert ('Sistema da biblioteca pública:');
let nomeUsuario = prompt ('Informe o seu nome completo:');
alert (`Boas vindas, ${nomeUsuario}`);


//6.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
alert ('Sistema da biblioteca pública:');
let nomeUsuario1 = prompt ('Informe o seu nome completo:');
alert (`Boas vindas, ${nomeUsuario1}`);

