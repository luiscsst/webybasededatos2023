$(document).ready(function () {
    var valor_dado1 = 0;
    var total1 = 0;
    var quedo1 = false;
    var intentos1 = 0;
    var juegoFinalizado = false;
    var valor_dado2 = 0;
    var total2 = 0;
    var quedo2 = false;
    var intentos2 = 0;

    $("#boton1").on("click", function () {
        if (!quedo1) {
            valor_dado1 = Math.floor(Math.random() * 10 + 1);
            
            total1 += valor_dado1;
            $("#total1").html("Acumuladas: " + total1);    
            $("#dado1").attr("src", "imagenesproyecto/carta" + valor_dado1 + ".PNG");
            $("#numero1").html(valor_dado1);
            intentos1++;
          
            if (total1 > 21) {
                $("#boton1").attr("disabled", true);
                $("#mequedo1").attr("disabled", true);
                setTimeout(function () {
                    alert("Jugador 1 ha perdido.");
                }, 500); 
            }
        }

        if (intentos1 == 5) {
            $("#boton1").attr("disabled", true);
        }
    });

    $("#mequedo1").on("click", function () {
        quedo1 = true;
        $("#boton1").attr("disabled", true);
        $("#mequedo1").attr("disabled", true);
        $("#total1").html("<h1>Total Jugador 1: " + total1 + "</h1>");
        $("#numero1").hide();
        Ganador();
    });

    $("#boton2").on("click", function () {
        if (!quedo2) {
            valor_dado2 = Math.floor(Math.random() * 10 + 1);
            console.log("Jugador 2 sacó un: " + valor_dado2);
            $("#dado2").attr("src", "imagenesproyecto/carta" + valor_dado2 + ".PNG");
            $("#numero2").html(valor_dado2);
    
            intentos2++;
    
            total2 += valor_dado2;
            $("#total2").html("Acumuladas: " + total2);
    
            if (total2 > 21) {
                setTimeout(function () {
                    $("#boton2").attr("disabled", true);
                    $("#mequedo2").attr("disabled", true);
                    alert("Jugador 2 ha perdido.");
                }, 1000); 
            }
        }
    
        if (intentos2 == 5) {
            $("#boton2").attr("disabled", true);
        }
    });

    $("#mequedo2").on("click", function () {
        quedo2 = true;
        $("#boton2").attr("disabled", true);
        $("#mequedo2").attr("disabled", true);
        $("#total2").html("<h1>Total Jugador 2: " + total2 + "</h1>");
        $("#numero2").hide();
        Ganador();
    });
    

    function Ganador() {
        if (quedo1 && quedo2) {
            var puntaje1 = Math.abs(21 - total1);
            var puntaje2 = Math.abs(21 - total2);
    
            if (puntaje1 < puntaje2) {
                alert("Jugador 1 gana.");
                redirigirAFinal("Jugador 1 gana.");
            } else if (puntaje2 < puntaje1) {
                alert("Jugador 2 gana.");
                redirigirAFinal("Jugador 2 gana.");
            } else {
                alert("Es un empate.");
                redirigirAFinal("Empate.");
            }
        } else {
            if (total1 > 21) {
                alert("Jugador 1 se pasó de 21. Jugador 2 gana.");
                redirigirAFinal("Jugador 2 gana.");
            } else if (total2 > 21) {
                alert("Jugador 2 se pasó de 21. Jugador 1 gana.");
                redirigirAFinal("Jugador 1 gana.");
            }
        }
    }
    function redirigirAFinal(resultado) {
        localStorage.setItem("resultado", resultado);
        window.location.href = "final.html";
    }
});
