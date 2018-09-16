

function aleatorio() {
	
var valorAleatorio = Math.random();

	return valorAleatorio;
}

;
 
var numero1 = aleatorio();
var numero2 = aleatorio();

var maiorNota = Math.max(numero1,numero2)
console.log('Maior nota', maiorNota);