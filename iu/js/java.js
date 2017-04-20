$(document).ready(function(){
	$("#modulo1").click(function(){
		window.location="PrimerModulo.html";
	});

	$("#modulo2").click(function(){
		window.location="SegundoModulo.html";
	});

	$("#modulo3").click(function(){
		window.location="TercerModulo.html";
	});

	$("#modulo4").click(function(){
		window.location="CuartoModulo.html";
	});

	$("#modulo5").click(function(){
		window.location="QuintoModulo.html";
	});
															<!--Modulo 1 taller-->
															
															$("#res1Taller1").click(function(){

																var A1=document.getElementsByName('A1');
																if (verificar(A1)==true) {
																	var P1=document.getElementById('res1Taller1').disabled=true;
																for (var i = 0; i < A1.length; i++) {
																	A1[i].disabled=true;
																	if (A1[i].checked) {
																		if (A1[i].value=='1') {
																			document.getElementById('CyX').src="iu/image/check.png";
																		}else{
																			document.getElementById('CyX').src="iu/image/x.png";
																		};
																	};
																	
																};
																};
																//alert("Corroborar La Respuesta 1");
															});
															$("#res2Taller1").click(function(){
																alert("Corroborar La Respuesta 2");
															});
															$("#res3Taller1").click(function(){
																alert("Corroborar La Respuesta 3");
															});
															$("#res4Taller1").click(function(){
																alert("Corroborar La Respuesta 4");
															});
															$("#res5Taller1").click(function(){
																alert("Corroborar La Respuesta 5");
															});
															$("#res6Taller1").click(function(){
																alert("Corroborar La Respuesta 6");
															});
															$("#res7Taller1").click(function(){
																alert("Corroborar La Respuesta 7");
															});
															$("#res8Taller1").click(function(){
																alert("Corroborar La Respuesta 8");
															});
															$("#res9Taller1").click(function(){
																alert("Corroborar La Respuesta 9");
															});
															$("#res10Taller1").click(function(){
																alert("Corroborar La Respuesta 10");
															});

															
});



function run1(){
	location.href="ModuloUnoClase1.html"
}

function run2(){
	location.href="ModuloUnoClase2.html"
}

function run3(){
	location.href="ModuloUnoClase3.html"
}

function run4(){
	location.href="ModuloUnoTaller.html"
}