
/*var ferrari = {
	cor: 'branco',
	modelo: 'super',
	fabricante: 'ferrari german',
	mostaDados: function() {
		console.log('  Cor do carro: ' + this.cor + '  modelo: ' + this.modelo  + '  fabricante: ' + this.fabricante);
	},
};

console.log('Dados da ferrari');
ferrari.mostaDados();
*/



var polo = { 
	cor: 'prata', 
	modelo: 'sedan', 
	peso: 1250, 
	fabricante: 'VW', 
	ligar:function() { 
	console.log('Ligando o carro!'); 
	},
	desligar:function() { 
	console.log('Desligando o carro!'); 
	}
}


console.log(polo);

delete polo.desligar;
delete polo.cor;
delete polo.peso;
console.log(polo);





/*console.log(fox);
fox.ligar();

var celta = {
	cor: 'branco',
	modelo: 'celta',
	fabricante: 'GM',
	ligar: function() {
		console.log('Ligando o carro');
	}
};
console.log('celta', celta);*/