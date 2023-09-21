$(document).ready(function () {
    var valor_dado1 = 0;
    var total1 = 0;
    var quedo1 = false;

    var valor_dado2 = 0;
    var total2 = 0;
    var quedo2 = false;

    $("#boton1").on("click", function () {
        if (!quedo1) {
            valor_dado1 = Math.floor(Math.random() * 10 + 1);
            console.log("Jugador 1 sacó un: " + valor_dado1);
            $("#dado1").attr("src", "imagenesproyecto/carta" + valor_dado1 + ".PNG");
            $("#numero1").html(valor_dado1);

            total1 += valor_dado1;
            $("#total1").html("Acumuladas: " + total1);
        }
    });

    $("#mequedo1").on("click", function () {
        quedo1 = true;
        $("#boton1").attr("disabled", true);
        $("#mequedo1").attr("disabled", true); 
        $("#total1").html("<h1>Total Jugador 1: " + total1 + "</h1>");
        $("#numero1").hide();
    });

    $("#boton2").on("click", function () {
        if (!quedo2) {
            valor_dado2 = Math.floor(Math.random() * 10 + 1);
            console.log("Jugador 2 sacó un: " + valor_dado2);
            $("#dado2").attr("src", "imagenesproyecto/carta" + valor_dado2 + ".PNG");
            $("#numero2").html(valor_dado2);

            total2 += valor_dado2;
            $("#total2").html("Acumuladas: " + total2);
        }
    });

    $("#mequedo2").on("click", function () {
        quedo2 = true;
        $("#boton2").attr("disabled", true);
        $("#mequedo2").attr("disabled", true); 
        $("#total2").html("<h1>Total Jugador 2: " + total2 + "</h1>");
        $("#numero2").hide();
    });
});
