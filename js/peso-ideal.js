$("#answertext").attr("class","bnt normalw");
$('#sexBtn').click(function() {
    if($('#sexBtn').hasClass("woman")) {
        $('#sexBtn').removeClass("woman");
        $('#sexBtn').addClass("man");
        $('#sexBtn').val("man");
    }
    else {
        $('#sexBtn').removeClass("man");
        $('#sexBtn').addClass("woman");
        $('#sexBtn').val("woman");
    }
    
       calcular();
});
function calcular()
{
    var peso = parseFloat($("#peso").val());
    var altura = parseFloat($("#altura").val());
    var salida = parseInt((peso)/((altura/100) * (altura/100)));
    $("#salida").remove();
    $("#answer").after("<p id ='salida'>"+salida+" es "+$('.btn.active').val()+"</p>");
    if((salida)>40) {
        $("#answertext").attr("class","bnt hhig");
        $("#answertext").text("Fuerte obesidad");
        
    }
    else {
        if((salida) > 31) {
            $("#answertext").attr("class","bnt nhig");
            $("#answertext").text("Obesidad");
        }
        else
        {
            if( ((salida)>26 && $('#sexBtn').val()=="man") || ((salida)>25 && $('#sexBtn').val()=="woman"))
            {
                $("#answertext").attr("class","bnt lhig");
                $("#answertext").text("Sobrepeso");
            }
            else
            {
                if( ((salida)>20 && $('#sexBtn').val()=="man") || ((salida)>19 && $('#sexBtn').val()=="woman"))
                {
                    $("#answertext").attr("class","bnt normalw");
                    $("#answertext").text("Normal");
                }
                else
                {
                    $("#answertext").attr("class","bnt loww");
                    $("#answertext").text("Falta de peso");
                }
            }
        }
    }
}
function change()
{
          var valuePeso = parseFloat($("#peso").val())/10;
    //  $("#peso-label").text("Peso: "+valuePeso+"kg");
    var valueAltura = parseFloat($("#altura").val())/100;
   //   $("#altura-label").text("Altura: "+valueAltura+"m");
    calcular();
}
/*
$(document).ready(function() {
$("input").click(function () {
     change();
    }).keyup();
});*/