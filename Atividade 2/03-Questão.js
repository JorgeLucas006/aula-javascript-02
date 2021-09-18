/*
3) Considere x = x + y, dado que x = 10 e y = 5.

a) Use o operador de atribuição correto que resultará em x = 15 numa expressão reduzida.

b) Use o operador de atribuição correto que resultará em x = 50 numa expressão reduzida.

c) Use o operador de atribuição correto que resultará em x = 0 numa expressão reduzida.

d) Use o operador de atribuição correto que resultará em x = 2 numa expressão reduzida.

e) Use o operador de atribuição correto que resultará em x = 5 numa expressão reduzida.
*/

var x = 10;
var y = 5; 

function reset(){
  x = 10;
  y = 5;
}

var a = (x += y);
reset()
var b = (x *= y);
reset()
var c = (x %= y);
reset()
var d = (x /= y);
reset()
var e = (x -= y);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);