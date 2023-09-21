$(document).ready(function () {
    var valor_dado1 = 0;
    var total1 = 0;
    
    var valor_dado2 = 0;
    var total2 = 0;

    $("#boton1").click(function () {
        valor_dado1 = Math.floor(Math.random() * 10 + 1);
        console.log("Jugador 1 sacó un: " + valor_dado1);
        $("#dado1").attr("src", "imagenesproyecto/carta" + valor_dado1 + ".PNG");
        $("#numero1").html(valor_dado1);

        total1 += valor_dado1;
        $("#total1").html("Total: " + total1);
    });

    $("#boton2").click(function () {
        valor_dado2 = Math.floor(Math.random() * 10 + 1);
        console.log("Jugador 2 sacó un: " + valor_dado2);
        $("#dado2").attr("src", "imagenesproyecto/carta" + valor_dado2 + ".PNG");
        $("#numero2").html(valor_dado2);

        total2 += valor_dado2;
        $("#total2").html("Total: " + total2);
    });
});
