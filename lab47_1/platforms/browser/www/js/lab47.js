$('#cordova-device-info').bind('click', function(event){ //evento click

    $("#device-info").append("<p>Versión de cordova: "+device.cordova+"</p>");
    $("#device-info").append("<p>Modelo: "+device.model+"</p>");
    $("#device-info").append("<p>Plataforma: "+device.platform+"</p>");
    $("#device-info").append("<p>uuid: "+device.uuid+"</p>");
    $("#device-info").append("<p>Versión SO: "+device.version+"</p>");
    event.preventDefault();

});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

   $("#device-info2").append("<p>Versión de cordova: "+device.cordova+"</p>");
    $("#device-info2").append("<p>Modelo: "+device.model+"</p>");
    $("#device-info2").append("<p>Plataforma: "+device.platform+"</p>");
    $("#device-info2").append("<p>uuid: "+device.uuid+"</p>");
    $("#device-info2").append("<p>Versión SO: "+device.version+"</p>");

}