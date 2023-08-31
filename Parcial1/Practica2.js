$(document).ready(function(){
    $("#boton1").click(function(e){
        alert("Evento click boton 1")
    });
    $("#div1").dblclick(function(e){
        alert("Evento doble click")
    });
    $("#input1").focus(function(e){
        console.log("Metodo focus al dar clic en input")
    });
    $("#texto1").hover(function(){
            $("#texto1").css("background-color", "purple");
        },function(){
            $("#texto1").css("background-color", "blue");
        }
    );
    $("#input2").keydown(function(e){
        console.log("Keydown")
        $("#input2").css("background-color", "green");
    });
});