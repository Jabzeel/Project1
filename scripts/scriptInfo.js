var main = function(){
	if(localStorage !== null){
		$("#nom")[0].innerHTML = localStorage.getItem("nombre");
		$("#ap")[0].innerHTML = localStorage.getItem("apellido");
		$("#tel")[0].innerHTML = localStorage.getItem("telef");
		$("#fn")[0].innerHTML = localStorage.getItem("fnacim");
		$("#d1")[0].innerHTML = localStorage.getItem("direccion1");

		if(localStorage.getItem("direccion2") !== null){
			$("#d2")[0].innerHTML = localStorage.getItem("direccion2");
			$("#dd2").show();
			$("#d2").show();
		}
		if(localStorage.getItem("direccion3") !== null){
			$("#d3")[0].innerHTML = localStorage.getItem("direccion3");
			$("#dd3").show();
			$("#d3").show();
		}

		$("#ced")[0].innerHTML = localStorage.getItem("cedula");
		$("#tc")[0].innerHTML = "XXXX-XXXX-XXXX-" + localStorage.getItem("tarjeta").slice(15);
	}

	$("#bbtn").click(function(){
		window.location.href="thirdpage.html";
	});
}

$(document).ready(main);
