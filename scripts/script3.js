var main = function(){
	$("#cbx")[0].disabled = true;
	
	if(localStorage.getItem("cedula") !== null){
		var cd = localStorage.getItem("cedula").split("-");

		$("#ced1")[0].value = cd[0];
		$("#ced2")[0].value = cd[1];
		$("#ced3")[0].value = cd[2];
	}
	if(localStorage.getItem("tarjeta") !== null){
		$("#tcd")[0].value = localStorage.getItem("tarjeta");		
	}
	if(localStorage.getItem("codigo") !== null){
		$("#cs")[0].value = localStorage.getItem("codigo");		
	}
	if(localStorage.getItem("terminos") === true){
		$("#cbx")[0].disabled = false;
		$("#cbx")[0].checked = true;
	}

	var ced, tcd, cs;
	var cont = 0;
	var c1 = 0;
	var c2 = 0;
	var c3 = 0;
	var ccs = 0

	$("#ced1").keydown(function(event){		
		if(c1 < 3){
			if(event.which === 8 & c1 > 0){	
		 		c1--;
		 		console.log(c1);
			}
			else{
				c1++;
				console.log(c1);			
			}
		}
		else{
			if(event.which === 8){
				c1--;
				console.log(c1);
				return true;
			}

			return false;
		}		
	});

	$("#ced2").keydown(function(event){	
		if(c2 < 7){
			if(event.which === 8 & c2 > 0){	
		 		c2--;
		 		console.log(c2);
			}
			else{
				c2++;
				console.log(c2);			
			}
		}
		else{
			if(event.which === 8){
				c2--;
				console.log(c2);
				return true;
			}

			return false;
		}		
	});

	$("#ced3").keydown(function(event){		
		if(c3 < 1){
			if(event.which === 8 & c3 > 0){	
		 		c3--;
		 		console.log(c3);
			}
			else{
				c3++;
				console.log(c3);			
			}
		}
		else{
			if(event.which === 8){
				c3--;
				console.log(c3);
				return true;
			}

			return false;
		}		
	});

	$("#tcd").keyup(function(){
		tcd = $("#tcd")[0].value.toString();
		console.log("TCred: " + tcd);

	});

	$("#tcd").keydown(function(event){			
		if(cont < 16){
			if(event.which === 8 & cont > 0){
				if(cont === 5){
					tcd = tcd.slice(0, cont-1) + tcd.slice(cont);			
		 			$("#tcd")[0].value = tcd;
		 		}
		 		else if(cont === 9){
		 			tcd = tcd.slice(0, cont) + tcd.slice(cont+1);			
		 			$("#tcd")[0].value = tcd;
		 		}
		 		else if(cont === 13){
		 			tcd = tcd.slice(0, cont+1) + tcd.slice(cont+2);			
		 			$("#tcd")[0].value = tcd;
		 		}

		 		cont--;
		 		console.log(cont);
			}
			else{
				cont++;
				console.log(cont);			

				if(cont === 5 || cont === 9 || cont === 13){
		 			$("#tcd")[0].value = $("#tcd")[0].value + "-";
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

	$("#cs").keydown(function(event){		
		if(ccs < 3){
			if(event.which === 8 & ccs > 0){	
		 		ccs--;
		 		console.log(ccs);
			}
			else{
				ccs++;
				console.log(ccs);			
			}
		}
		else{
			if(event.which === 8){
				ccs--;
				console.log(ccs);
				return true;
			}

			return false;
		}		
	});

	$("#tcbtn").click(function(){
		$("#mod").show();
		$("#cbx")[0].disabled = false;
	});

	$("#sbtn").click(function(){
		ced = $("#ced1")[0].value + "-" + $("#ced2")[0].value + "-" + $("#ced3")[0].value;
		tcd = $("#tcd")[0].value;
		cs = $("#cs")[0].value;

		if(ced.length < 13){
			$("#ced").css("margin-bottom","5px");
		 	$("#msjerr1").show();
		}
		else{
		 	$("#msjerr1").hide();		 	
		}

		if(tcd.length < 19){
			$("#tcd").css("margin-bottom","5px");
		 	$("#msjerr2").show();
		}
		else{
		 	$("#msjerr2").hide();		 	
		}

		if(cs.length < 3){
			$("#cs").css("margin-bottom","5px");
		 	$("#msjerr3").show();
		}
		else{
		 	$("#msjerr3").hide();		 	
		}

		if(cs.length >= 3 & tcd.length >= 19 & ced.length >= 13 & $("#cbx")[0].checked === true){
			localStorage.setItem("cedula", ced);
			localStorage.setItem("tarjeta", tcd);
			localStorage.setItem("codigo", cs);
			localStorage.setItem("terminos", true);

		 	window.location.href="infopage.html";
		}
		
	});

	$("#bbtn").click(function(){
		window.location.href="secondpage.html";
	});
}

function cls(){
	$("#mod").hide();
}

$(document).ready(main);
