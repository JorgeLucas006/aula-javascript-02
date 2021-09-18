/*
2)      Criar variáveis para:

a) Armazenar os valores: 10, 3, 9, 99.9, 721;
b) As variáveis deverão ser do tipo objeto Number.
c) Mostrar os valores no console.
d) Validar se a primeira variável é menor que o valor Number.MAX_VALUE;
e) Mostrar o resultado e valores no console;
f) Validar se a segunda variável possui valor igual a NaN;
g) Mostrar o resultado e valores no console;
h) Validar se a quinta variável é menor ou igual a terceira variável;
i) Mostrar o resultado e valores no console.
*/

var num1 = new Number(10);
var num2 = new Number(3);
var num3 = new Number(9);
var num4 = new Number(99.9);
var num5 = new Number(721);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);

console.log(num1 < Number.MAX_VALUE);

console.log(Number.isNaN(num2));

console.log(num5 <= num3);