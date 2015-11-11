var main = function(){
	var calle;
	var ciud;
	var pro;

	$("#p1direc").click(function(){
		$(direc).toggle();

		if($(direc).css('display') === "none"){
			$(pdirec)[0].innerHTML = "+  ";
		}
		else{
			$(pdirec)[0].innerHTML = "-  ";
		}
	});

	$("#ad1").click(function(){
	});

	$("#remov").click(function(){

	});

	$("#nbtn2").click(function(){
		prov = $("#pro")[0].value;
		calle = $("#cal")[0].value;
		ciud = $("#ciud")[0].value;
		
		if(ciud.length === 0){
			$("#ciud").css("margin-bottom","5px");
		 	$("#msjerr3").show();
		}
		else{
			$("#msjerr3").hide();
		}

		if(prov === "-"){
			$("#pro").css("margin-bottom","5px");
		 	$("#msjerr4").show();
		}
		else{
			$("#msjerr4").hide();
		}

		if(ciud.length > 0 & prov != "-"){
		 	window.location.href="thirdpage.html";
		}

	});
}

$(document).ready(main);
