/*
3)      Criar bloco de código que mostra, no console, o resultado da concatenação das variáveis abaixo:

a) texto1 = "Mariazinha tem "
b) idade =  9
c) texto2 = "anos e "
d) quantidade_irmaos = 7
e) texto3 = " irmãos."
*/

var texto1 = "Mariazinha tem ";
var idade =  9;
var texto2 = " anos e ";
var quantidade_irmaos = 7;
var texto3 = " irmãos.";

texto1 += idade + texto2 + quantidade_irmaos + texto3;

console.log(texto1);