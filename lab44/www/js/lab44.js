$('#cordova-alert').bind('click', function(event){ //evento click

    navigator.notification.alert('Información de Alerta', onAlert, '¡Alerta!', 'Aceptar'); //(mensaje, callback funcion q se ejecuta al dar click en el botón del alert,titulo, texto boton) siempre este orden

    event.preventDefault();

});

$('#cordova-confirm').bind('click', function(event){//evento click

    navigator.notification.confirm('Información de confirmación', onConfirm, '¡Confirmación!', ['Aceptar', 'Cancelar']); //(mensaje, callback funcion q se ejecuta al dar click en el botón del confirm,titulo, texto btn 1,2,3) siempre este orden

});

$('#cordova-prompt').bind('click', function(event){//evento click

    navigator.notification.prompt('Ingrese su nombre', onPrompt, 'Su nombre!', ['Aceptar', 'Cancelar'], 'Información'); //(texto del input, callback, mensaje, botones,titulo) siempre este orden


});

$('#cordova-beep').bind('click', function(event){//evento click

    navigator.notification.beep(4);//sonido cantidad de veces (n)

});

$('#cordova-vibration').bind('click', function(event){//evento click

    navigator.vibrate(3000);//tiempo de vibracion en milisegundos

});

$('#cordova-vibration-pattern').bind('click', function(event){

    navigator.vibrateWithPattern([3000, 200, 1000, 300, 4000, 200, 1000]); //patron de vibracion en milisegundos

    // para firefoxos
    // navigator.vibrate([3000, 200, 1000, 300, 4000, 200, 1000]);

});


var onAlert = function(){ //funcion que se llama en el alert

	console.log('¡Alert Correcto!');
};

var onConfirm = function(btn){//funcion que se llama en el confirm

	if (btn == 1) {

		console.log('Botón Aceptar');

	} else {

		console.log('Botón Cancelar');
	}

};

var onPrompt = function(results){//funcion que se llama en el prompt

	if (results.buttonIndex == 1) { //especifico del api llama al boton 1
		console.log('Botón Aceptar');
		localStorage.setItem('name', results.input1); //especifico del api llama al input
		$('#prompt-info').html('<span>' + localStorage.getItem('name') + '</span>');
	} else {
		console.log('Botón Cancelar');
		localStorage.removeItem('name');
	}

};