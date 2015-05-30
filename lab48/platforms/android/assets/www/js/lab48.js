$(document).on('pagecreate', '#home', function(){ //pagecreate le delega el evento a la pagina #home

	console.log('Evento delegado `#home` OK');

	$('#take-picture').bind('click', function(){

        function onCameraSuccess(imageURI){
	        console.log(imageURI);

	        $('#url-picture').append('<span>' + imageURI + '</span>');
            $('#url-picture').append('<img src="' + imageURI + '"/>');

	        console.log('onCameraSuccess imageURI: ' + imageURI);
        }

        function onCameraError(cameraError){
	        $('#url-picture').append('<span>' + cameraError + '</span>');

	        console.log('onCameraError: ' + cameraError);
        }

		var options = {
            quality: 75,//calidad 1-100 a mayor calidad mayor peso recomendado 50-75
            sourceType: Camera.PictureSourceType.CAMERA, //por defecto camara, se puede poner en galeria
            destinationType: Camera.DestinationType.FILE_URI, //lugar donde se almacena la foto
            allowEdit: true, //permite editar
            encodingType: Camera.EncodingType.JPEG, // formato
            targetWidth: 1024, //ancho
            targetHeight: 768 //alto
        };

		navigator.camera.getPicture(onCameraSuccess, onCameraError, options); //exito, fallo, opciones de configuracion
	});
});