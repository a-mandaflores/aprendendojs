## Documentando o aprendizado

### Declarando variavel

Var - é escopo de funçãp
Let e Const - é escopo de bloco

A variavel é dinamicamente tipada - Porde receber diferentes tipos

```javascript
var number1 = 10;
const number2 = 10
let number3 = 10
```
Tipos primitivos
Number, string, boolean, undefined

**Number (Número)**: Representa números inteiros e de ponto flutuante. Por exemplo:
javascript
```javascript
let idade = 30;
let preco = 19.99;
```
**String:** Representa sequências de caracteres. Pode ser declarada usando aspas simples ou duplas. Por exemplo:
```javascript
let nome = "Alice";
let mensagem = 'Olá, mundo!';
```
**Boolean:** Representa valores lógicos verdadeiro (true) ou falso (false). É comumente usado em expressões condicionais. Por exemplo:
```javascript
let temChuva = true;
let temSol = false;
```
**Undefined:** Representa uma variável que foi declarada, mas ainda não recebeu um valor. Por exemplo:
```javascript
let x;
console.log(x); // undefined
```
**Null:** Representa a ausência de valor intencional. Geralmente é usado quando você deseja indicar que uma variável não possui um valor válido. Por exemplo:
```javascript
let esdereco = null;
```

---
### Functions

Funções em JavaScript são blocos de código que podem ser definidos e reutilizados para realizar tarefas específicas

**Declarando a função**
Você pode declarar uma função usando a palavra-chave function, seguida pelo nome da função e, opcionalmente, parâmetros entre parênteses. A definição do corpo da função está entre chaves {}.
```js
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}
```

**Chamando a função**
Uma função pode opcionalmente retornar um valor usando a palavra-chave return. Isso permite que a função produza um resultado que pode ser usado em outros lugares do código.
Para executar uma função, você a chama pelo seu nome, passando os argumentos necessários (se houver) entre parênteses.
```js
saudacao("Alice"); // Chama a função saudacao e passa "Alice" como argumento.
```
**Retorno de valores**
Variáveis declaradas dentro de uma função têm escopo local, o que significa que elas só podem ser acessadas dentro da função. Variáveis definidas fora da função têm escopo global.
```js
function soma(a, b) {
  return a + b;
}

let resultado = soma(3, 5); // resultado agora é 8
```
**Função anonima**
Funções anônimas são funções que não têm um nome definido e geralmente são usadas como argumentos para outras funções ou atribuídas a variáveis.
```js
let multiplicacao = function(a, b) {
  return a * b;
};

let resultado = multiplicacao(4, 6); // resultado é 24
```
**Arrow functions**
As arrow functions são uma forma mais curta e concisa de declarar funções em JavaScript, introduzidas no ES6. Elas têm uma sintaxe mais compacta e compartilham o escopo léxico com o contexto em que foram criadas.
```js
const quadrado = (x) => x * x;
```
**Função Callback**
Funções de callback são funções passadas como argumentos para outras funções e são executadas após a conclusão de uma operação assíncrona ou de um evento.
```js
setTimeout(function() {
  console.log("Esta é uma função de callback.");
}, 1000);
```

---
### Hosting

As declarações de variaveis sao içadas e levadas para o inicio do codigo
Exemplo:
```js
casa = 'home'
console.log(casa)
var casa;
```

O valor da variavel não é içado junto somente a declaração de tipo.
Exemplo:
```js
var x = 10
console.log(x, y)
var y = 10
```
Nesse exemplo o valor de y vai ser undefined. Existe a variavel mas o valor não foi declarado.

Só funciona com var, o const e let precisa ser informada na hora da declaração

---
### Estrutura condicionais 

A estrutura if permite executar um bloco de código se uma condição especificada for verdadeira. 
A estrutura else if é usada para verificar várias condições em sequência. Ela segue um bloco if e é executada apenas se a condição do if anterior for falsa.
A estrutura else é usada para executar um bloco de código quando nenhuma das condições anteriores for verdadeira.
```js
let idade = 18;

if (idade < 18) {
    console.log("Você é menor de idade.");
} else if (idade >= 18 && idade < 65) {
    console.log("Você é um adulto.");
} else {
    console.log("Você é um idoso.");
}
```

**switch:** A estrutura switch permite selecionar diferentes blocos de código com base no valor de uma expressão.
```js
switch (expressao) {
    case valor1:
        // Código a ser executado se a expressao for igual a valor1
        break;
    case valor2:
        // Código a ser executado se a expressao for igual a valor2
        break;
    default:
        // Código a ser executado se nenhum dos casos for correspondido
}
```

**Operador ternário:** O operador ternário é uma forma concisa de escrever estruturas condicionais em uma única linha.
```js
const resultado = condicao ? valorSeVerdadeiro : valorSeFalso;
```

---
### Estrutura de repetições

**for:** O loop for é usado quando você sabe o número de vezes que deseja repetir um bloco de código.
```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
**while:** O loop while é usado quando você deseja repetir um bloco de código enquanto uma condição especificada for verdadeira.
```js
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
```
**do...while:** O loop do...while é semelhante ao while, mas garante que o código seja executado pelo menos uma vez, mesmo se a condição inicial for falsa.
```js
let contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador < 5);
```
**for...in:** O loop for...in é usado para iterar sobre as propriedades enumeráveis de um objeto.
```js
const pessoa = {
    nome: "Alice",
    idade: 30,
    cidade: "Rio de Janeiro"
};

for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
```

**for...of:** O loop for...of é usado para iterar sobre elementos de objetos iteráveis, como arrays e strings.

```js
var email = 'nanda@gmail.com'
var val = email.split('')

for(const letra of val){
    console.log(letra)
}
```
---
### Objetos

Inicializando um obseto
```js
const objVazio = {}
```

Acessando um objeto
```js
const objOne = {
    prop1: 'Sou uma propriedade que será acessada usando dot notation",
    metodo: function (){
        return "Sou o retorno de um metodo, ou seja, uma função de um objeto"
    }
}

console.log(objOne.prop1, obj.metodo)
```

---
### Array

Um array é uma estrutura de dados em JavaScript (e em muitas outras linguagens de programação) que é usada para armazenar uma coleção ordenada de valores. Esses valores podem ser de qualquer tipo de dados, como números, strings, objetos, funções e até mesmo outros arrays. Os arrays em JavaScript são objetos especiais que têm propriedades e métodos para facilitar a manipulação dos dados armazenados.

Aqui estão alguns conceitos importantes relacionados a arrays:

**Índices:** Cada elemento dentro de um array é identificado por um índice, que começa em 0 para o primeiro elemento, 1 para o segundo elemento, 2 para o terceiro e assim por diante. Você pode acessar elementos individuais de um array usando seu índice.

**Comprimento:** O comprimento de um array é a quantidade de elementos que ele contém. Você pode acessar o comprimento de um array usando a propriedade length.

**Mutabilidade:** Os arrays em JavaScript são mutáveis, o que significa que você pode adicionar, remover e modificar elementos após a criação do array.

**Métodos de Array:** JavaScript fornece uma variedade de métodos integrados para manipular arrays. Alguns dos métodos mais comuns incluem push, pop, shift, unshift, splice, concat, slice, map, filter, reduce, entre outros. Esses métodos facilitam a realização de operações comuns em arrays.

```js
// Criando um array de números
const numeros = [1, 2, 3, 4, 5];

// Acessando elementos do array por índice
console.log(numeros[0]); // Saída: 1
console.log(numeros[2]); // Saída: 3

// Modificando um elemento
numeros[1] = 10;

// Adicionando elementos ao final do array
numeros.push(6);

// Removendo o último elemento do array
numeros.pop();

// Comprimento do array
console.log(numeros.length); // Saída: 5

// Iterando sobre os elementos do array usando um loop
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Usando métodos de array para operações
const dobrados = numeros.map(numero => numero * 2); // Cria um novo array com o dobro de cada número

console.log(dobrados); // Saída: [2, 20, 6, 8]
```