$(document).ready(function ()  {
var valor_dado = 0;
$("#boton").click(function (e) {
    valor_dado = Math.floor(Math.random()*10+1)
    console.log("Sacaste  un: " + valor_dado)
    $("#dado").attr("src", "imagenesproyecto/carta" + valor_dado + ".PNG");
    $("#numero").html(valor_dado)

});
});

