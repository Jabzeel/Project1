var main = function(){
	
	if(localStorage !== null){
		$("#nom")[0].value = localStorage.getItem("nombre");
		$("#ape")[0].value = localStorage.getItem("apellido");
		$("#tel")[0].value = localStorage.getItem("telef");
		$("#bday ")[0].value = localStorage.getItem("fnacim");
	}

	$("#nbtn").click(function(){
		var nm = $("#nom")[0].value;
		var ap = $("#ape")[0].value;
		var fn = $("#bday")[0].value;
		var tf = $("#tel")[0].value;

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
		 	localStorage.setItem("nombre", nm);
		 	localStorage.setItem("apellido", ap);
		 	localStorage.setItem("telef", tf);
		 	localStorage.setItem("fnacim", fn);
		 	
		 	window.location.href="secondpage.html";
		}		 
	});
	var cont = 0;	

	$("#tel").keyup(function(){
		var tf = $("#tel")[0].value.toString();
		console.log("Tel: " + tf);

	});

	$("#tel").keydown(function(event){			
		if(cont < 10){
			if(event.which === 8 & cont > 0){
				if(cont === 4){
					tf = tf.slice(0, cont-1) + tf.slice(cont);			
		 			$("#tel")[0].value = tf;
		 		}
		 		else if(cont === 7){
		 			tf = tf.slice(0, cont) + tf.slice(cont+1);			
		 			$("#tel")[0].value = tf;
		 		}

		 		cont--;
		 		console.log(cont);
			}
			else{
				cont++;
				console.log(cont);			

				if(cont === 4 || cont === 7){
		 			$("#tel")[0].value = $("#tel")[0].value + "-";
				}			
			}
		}
		else{
			if(event.which === 8){
				cont--;
				console.log(cont);
				return true;
			}

			return false;
		}		
	});

}

$(document).ready(main);

