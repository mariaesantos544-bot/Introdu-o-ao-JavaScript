// const nome = "Carlos";
// const idade = 20;
// const estudante = true;

// // console.log(nome)
// // console.log(idade)
// // console.log(estudante)

// // console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)

// // if(idade >= 18){
// //     console.log("Maior de idade")
// // }
// // else{
// //     console.log("Menor Idade")
// // }

// const nomes = [
// "Fernanda",
// "Bruno",
// "Leonardo",
// "Eric"
// ]

// for (let cont = 0; cont < nomes.length; cont++){
//     console.log(nomes[cont]);
// }

// function calcularMedia(nota1, nota2){
//     return (nota1 + nota2)
// }

// console.log(media)

// if(media >= 7){
//     console.log("Aprovado")
// }
// else if(media >= 5){
//     console.log("Recuperação")
// }
// else{
//     console.log("Reprovado")
// }


// -----------------------------ATIVIDADE INTRODUÇÃO AO JAVASCRIPT--------------------------------
const nome = "Maria";
const idade = 21;
const cidade = "São Paulo";
const profissao = "Desenvolvedora";

console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e trabalho como ${profissao}.`);

console.log(nome)
console.log(idade)
console.log(cidade)
console.log(profissao)

const num1 = 10;
const num2 = 5;

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`Multiplicação: ${num1 * num2}`);
console.log(`Divisão: ${num1 / num2}`);

const idadeAnos = 21;
const mesesVividos = idadeAnos * 12;

console.log(`Uma pessoa com ${idadeAnos} anos viveu aproximadamente ${mesesVividos} meses.`);

const nota1 = 8.0;
const nota2 = 7.5;
const nota3 = 5.0;

const media = (nota1 + nota2 + nota3) / 3;
console.log(`A média das notas é: ${media.toFixed(2)}`);

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

const numero = 7;

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é igual a zero.");
}

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

if (num1 > num2) {
    console.log(`O maior número é ${num1}`);
} else if (num2 > num1) {
    console.log(`O maior número é ${num2}`);
} else {
    console.log("Os números são iguais.");
}

const a = 10;
const b = 25;
const c = 15;

if (a >= b && a >= c) {
    console.log(`O maior número é ${a}`);
} else if (b >= a && b >= c) {
    console.log(`O maior número é ${b}`);
} else {
    console.log(`O maior número é ${c}`);
}

const precoOriginal = 125.00;
let precoFinal = precoOriginal;

if (precoOriginal > 100) {
    precoFinal = precoOriginal * 0.90;
}

console.log(`Valor original: R$ ${precoOriginal.toFixed(2)}`);
console.log(`Valor final: R$ ${precoFinal.toFixed(2)}`);

const autorizado = true;

if (idade >= 18 && autorizado) {
    console.log("Acesso permitido.");
} else {
    console.log("Acesso negado.");
}

const nomes = [
"Nomes:",
"Thayna",
"Duda Santos",
"Andressa",
"Arthur"
];

for (let cont = 0; cont < nomes.length; cont++){
    console.log(nomes[cont]);
}

const compras = [
"Arroz", 
"Carne",
"Linguiça",
"Açucar", 
"Ovos"
];

console.log(`Total de itens: ${compras.length}`);
console.log("Produtos:");
for (let i = 0; i < compras.length; i++) {
    console.log(`- ${compras[i]}`);
}

const pessoa = {
    nome: "Arthur",
    idade: 23,
    cidade: "Bahia",
    profissao: "Carpinteiro"
};

console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
console.log(`Cidade: ${pessoa.cidade}`);
console.log(`Profissão: ${pessoa.profissao}`);

const produto = {
    nome: "livro",
    preco: 50,
    categoria: "romance",
    disponivel: true
};

console.log(`O ${produto.nome} de ${produto.categoria} custa R$ ${produto.preco.toFixed(2)} e está ${produto.disponivel ? "disponível" : "indisponível"}.`);

const alunos = [
    { nome: "Livia", idade: 16 },
    { nome: "Amanda", idade: 15 },
    { nome: "Gustavo", idade: 17 }
];

for (let i = 0; i < alunos.length; i++) {
    console.log(`Aluno: ${alunos[i].nome}, idade: ${alunos[i].idade} anos`);
}

function calcularDobro(numero) {
    return numero * 2;
}

console.log(`Cálculo do dobro: ${calcularDobro(5)}`);
console.log(`Cálculo do dobro: ${calcularDobro(12)}`);
console.log(`Cálculo do dobro: ${calcularDobro(-4)}`);

function somar(a, b) {
    return a + b;
}

console.log(`Cálculo da soma: ${(somar(10, 20))}`);
console.log(`Cálculo da soma: ${(somar(5.5, 4.5))}`);
console.log(`Cálculo da soma: ${(somar(-3, 8))}`);

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

console.log(`Cálculo da média: ${(calcularMedia(8, 6))}`);
console.log(`Cálculo da média: ${(calcularMedia(5, 9))}`);
console.log(`Cálculo da média: ${(calcularMedia(4, 3.5))}`);

function saudar(nome) {
    return `Olá, ${nome}! Seja bem-vinda!`;
}

console.log(saudar("Maria"));


for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("Fim");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

const notas = [5.0, 6.5, 10.0, 6.5, 8.5];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

const mediaLista = somaNotas / notas.length;
console.log(`Média da lista: ${mediaLista.toFixed(2)}`);

const produto = {
    nome: "Mouse Gamer",
    preco: 150.00,
    quantidade: 8
};

if (produto.quantidade > 0) {
    console.log(`O produto "${produto.nome}" está disponível (${produto.quantidade} em estoque).`);
} else {
    console.log(`O produto "${produto.nome}" está indisponível.`);
}

const nome = "Pedro";
const nota1 = 8.0;
const nota2 = 5.5;
const media = (nota1 + nota2) / 2;

let situacao = "";
if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log(`Aluno: ${nome}`);
console.log(`Média: ${media.toFixed(1)}`);
console.log(`Situação: ${situacao}`);

const alunos = [
    { nome: "Arthur", nota1: 8.0, nota2: 7.5 },
    { nome: "Duda Santos", nota1: 5.0, nota2: 6.0 },
    { nome: "Thayna", nota1: 3.5, nota2: 4.0 }
];

for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    const media = (aluno.nota1 + aluno.nota2) / 2;
    
    let situacao = "";
    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    console.log(`Nome: ${aluno.nome}`);
    console.log(`Primeira nota: ${aluno.nota1}`);
    console.log(`Segunda nota: ${aluno.nota2}`);
    console.log(`Média final: ${media.toFixed(1)}`);
    console.log(`Situação: ${situacao}`);
}