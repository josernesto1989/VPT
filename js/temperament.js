$('.carousel').carousel({
  interval: false
})


var counters= [];
counters.push(0);
counters.push(0);
counters.push(0);
counters.push(0);
var typeQuestion= 0;
function count(value) {
    var pos = typeQuestion % 4;
    typeQuestion++;
    counters[pos]+=value;
	
    if(typeQuestion>55)/*aca va 55*/
    {
        //aca va el cambio y respuesta
		/*
		var pos=-1;
		var may=-1;
		
		for (var i = 0; i < 4; i++)
		{
			if(counters[i]>may)
			{
				may= counters[i];
				pos= i;
			}
		}
		var resp=[];
		
		var aux=[];
		aux.push("#san");
        aux.push("#col");
        aux.push("#fle");
        aux.push("#mel");		
		resp.push(aux[pos]);
		
		for (var i = 0; i < 4; i++)
		{
			if(i != pos && counters[i]>may-6)
			{
				resp.push(aux[i]);
			}
		}
        $(resp[0]).removeClass('hide');*/   
        $("#temperamentos").removeClass("hide");
        $("#chart-answer").removeClass('hide');
        $("#carousel-block").addClass('hide');
    var data = {    
    labels: ["Sanguíneo", "Colérico", "Flemático", "Melancólico"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgb(196, 189, 166)",
            strokeColor: "rgba(248, 239, 239, 0.36)",
            pointColor: "rgba(248, 239, 239, 0.36)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(248, 239, 239, 0.36)",            
            data: [counters[0], counters[1], counters[2], counters[3]]
        }
    ]
        
};        
        var ctx = document.getElementById("chart-answer").getContext("2d");
        
        var myPieChart = new Chart(ctx).Radar(data,
                                              {
            angleLineColor : "rgba(253, 249, 249, 0.25)",
            scaleLineColor: "rgba(253, 249, 249, 0.25)",
            pointLabelFontColor : "#f4f0f0",
            pointLabelFontSize : 14,            
            responsive :true 
        });
		counters[0]=0;
		counters[1]=0;
		counters[2]=0;
		counters[3]=0;
        typeQuestion = 0;
    }
    
}