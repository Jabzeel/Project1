
var main = function(){
	var calle1, calle2, calle3;
	var ciud1, ciud2, ciud3;
	var pro1, pro2, pro3;
	var cont = 1;

	$("#p1direc").click(function(){
		$("#direc1").toggle();

		if($("#direc1").css('display') === "none"){
			$("#p1direc")[0].innerHTML = "+  ";
		}
		else{
			$("#p1direc")[0].innerHTML = "-  ";
		}
	});

	$("#p2direc").click(function(){
		$("#direc2").toggle();

		if($("#direc2").css('display') === "none"){
			$("#p2direc")[0].innerHTML = "+  ";
		}
		else{
			$("#p2direc")[0].innerHTML = "-  ";
		}
	});

	$("#p3direc").click(function(){
		$("#direc3").toggle();

		if($("#direc3").css('display') === "none"){
			$("#p3direc")[0].innerHTML = "+  ";
		}
		else{
			$("#p3direc")[0].innerHTML = "-  ";
		}
	});

	$("#ad").click(function(){	
		var dirn;
		cont++;

		switch(cont){
			case 2:
				$("#dir"+ cont).show();
				break;
			case 3:
				$("#p1direc")[0].innerHTML = "+  ";
				$("#direc1").hide();
				$("#dir"+ cont).show();
				break;
		
		}
	});

	$("#remov1").click(function(){
		switch(cont){
			case 2:
				$("#cal1")[0].value = $("#cal2")[0].value;
				$("#ciud1")[0].value = $("#ciud2")[0].value;
				$("#pro1")[0].value = $("#pro2")[0].value;

				$("#cal2")[0].value = "";
				$("#ciud2")[0].value = "";
				$("#pro2")[0].value = "-";

				$("#dir"+ cont).hide();
				cont--;
				break;
			case 3:
				$("#cal1")[0].value = $("#cal2")[0].value;
				$("#ciud1")[0].value = $("#ciud2")[0].value;
				$("#pro1")[0].value = $("#pro2")[0].value;

				$("#cal2")[0].value = $("#cal3")[0].value;
				$("#ciud2")[0].value = $("#ciud3")[0].value;
				$("#pro2")[0].value = $("#pro3")[0].value;

				$("#cal3")[0].value = "";
				$("#ciud3")[0].value = "";
				$("#pro3")[0].value = "-";

				$("#dir"+ cont).hide();
				cont--;
				break;
		
		}
	});

	$("#remov2").click(function(){
		if(cont > 2){
			$("#cal2")[0].value = $("#cal3")[0].value;
			$("#ciud2")[0].value = $("#ciud3")[0].value;
			$("#pro2")[0].value = $("#pro3")[0].value;

			$("#cal3")[0].value = "";
			$("#ciud3")[0].value = "";
			$("#pro3")[0].value = "-";

			$("#dir3").hide();
			cont--;
		}
		else{
			$("#cal2")[0].value = "";
			$("#ciud2")[0].value = "";
			$("#pro2")[0].value = "-";

			$("#dir2").hide();
			cont--;
		}
	});

	$("#remov3").click(function(){
		$("#cal3")[0].value = "";
		$("#ciud3")[0].value = "";
		$("#pro3")[0].value = "-";

		$("#dir3").hide();
		cont--;
	});

	$("#nbtn").click(function(){
		prov1 = $("#pro1")[0].value;
		calle1 = $("#cal1")[0].value;
		ciud1 = $("#ciud1")[0].value;

		if(ciud1.length === 0){
			$("#ciud1").css("margin-bottom","5px");
		 	$("#msjerr1").show();
		}
		else{
			$("#msjerr1").hide();
		}

		if(prov1 === "-"){
			$("#pro1").css("margin-bottom","5px");
		 	$("#msjerr2").show();
		}
		else{
			$("#msjerr2").hide();
		}

		if(cont > 1){
			prov2 = $("#pro2")[0].value;
			calle2 = $("#cal2")[0].value;
			ciud2 = $("#ciud2")[0].value;

			if(ciud2.length === 0){
				$("#ciud2").css("margin-bottom","5px");
		 		$("#msjerr3").show();
			}
			else{
				$("#msjerr3").hide();
			}

			if(prov2 === "-"){
				$("#pro2").css("margin-bottom","5px");
		 		$("#msjerr4").show();
			}
			else{
				$("#msjerr4").hide();
			}
		}

		switch(cont){
			case 1:
				if(ciud1.length > 0 & prov1 != "-"){
		 			window.location.href="thirdpage.html";
				}
				break;
			case 2:
				if(ciud1.length > 0 & prov1 != "-" & ciud2.length > 0 & prov2 != "-"){
		 			window.location.href="thirdpage.html";
				}
				break;
			case 3:
				prov3 = $("#pro3")[0].value;
				calle3 = $("#cal3")[0].value;
				ciud3 = $("#ciud3")[0].value;

				if(ciud3.length === 0){
					$("#ciud3").css("margin-bottom","5px");
		 			$("#msjerr5").show();
				}
				else{
					$("#msjerr5").hide();
				}

				if(prov3 === "-"){
					$("#pro3").css("margin-bottom","5px");
		 			$("#msjerr6").show();
				}
				else{
					$("#msjerr6").hide();
				}

				if(ciud1.length > 0 & prov1 != "-" & ciud2.length > 0 & prov2 != "-" & ciud3.length > 0 & prov3 != "-"){
		 			window.location.href="thirdpage.html";
				}
				break;
		}
	});

	$("#bbtn").click(function(){
		window.location.href="firstpage.html";
	});
}

$(document).ready(main);
