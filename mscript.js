var main = function(){

	$("#nbtn").click(function(){
		var nm = $("#nom")[0].value;
		var ap = $("#ape")[0].value;
		var tf = $("#tel")[0].value;
		var fn = $("#bday")[0].value;

		if(nm.length < 3){
			$("#nom").css("margin-bottom","5px");
		 	$("#msjerr1").show();
		}
		else{
		 	$("#msjerr1").hide();
		}

		if(ap.length < 3){
		 	$("#ape").css("margin-bottom","5px");
		 	$("#msjerr2").show();
		}
		else{
		 	$("#msjerr2").hide();		 	
		}

		if(nm.length >= 3 & ap.length >= 3){
		 	window.location.href="secondpage.html";
		}		 
	});
	var cont = 0;

	$("#tel").keydown(function(event){		 

		 if(event.which === 8){
		 	cont--;
		 	console.log(cont);
		 }
		 else if(event.which > 47 event.which < 58){
		 	cont++;
		 	console.log(cont);
		 }
		 
		 if(cont === 4 || cont === 7){
		 	$("#tel")[0].value = $("#tel")[0].value + "-";

		 }
		 else if(cont > 10){
		 	event.stopPropagation();
		 }
		 
	});
}

$(document).ready(main);

