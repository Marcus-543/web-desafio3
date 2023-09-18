var apagada = true;
var quebrada = false;

function acender() {
	if (apagada && !quebrada) {
		document.getElementById('lampada').src = './assets/images/acesa.png';
		document.getElementById('main').style.background = 'white';
		document.getElementById('btn').innerHTML = 'Desligar';
		apagada = false;

	}else if (!apagada && !quebrada) {
		document.getElementById('lampada').src = './assets/images/apagada.png';
		document.getElementById('main').style.background = 'black';
		document.getElementById('btn').innerHTML = 'Ligar';
		apagada = true;
	}
}

function quebrar() {
	if (!quebrada) {
		document.getElementById('lampada').src = './assets/images/quebrada.png';
		document.getElementById('main').style.background = 'black';
		quebrada = true;
	}
}
