var main = function(){
	var nm;
	var ap;
	var fn;

	$("#nbtn").click(function(){
		nm = $("#nom")[0].value;
		ap = $("#ape")[0].value;
		fn = $("#bday")[0].value;

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
	var tf;

	$("#tel").keyup(function(){
		tf = $("#tel")[0].value.toString();
		console.log("Tel: " + tf);

	});

	$("#tel").keydown(function(event){			

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

		if(cont > 10){
		 	event.stopPropagation();
		}
		
	});

}

$(document).ready(main);
