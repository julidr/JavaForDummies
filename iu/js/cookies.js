$(document).ready(function(){
	if (readCookie("Test1")!=null) {

	  if (readCookie("Test2")==100) {
	  	document.getElementById('modulo2').disabled=false;
	  	document.getElementById('p1').value=100;
	  	document.getElementById('c1').checked=true;
	  }
	  if (readCookie("Test3")==100) {
	  	document.getElementById('modulo3').disabled=false;
	  	document.getElementById('p2').value=100;
	  	document.getElementById('c2').checked=true;
	  }
	  if (readCookie("Test4")==100) {
	  	document.getElementById('modulo4').disabled=false;
	  	document.getElementById('p3').value=100;
	  	document.getElementById('c3').checked=true;
	  }
	  if (readCookie("Test5")==100) {
	  	document.getElementById('modulo5').disabled=false;
	  	document.getElementById('p4').value=100;
	  	document.getElementById('c4').checked=true;
	  }
	  if (readCookie("Test6")==100) {
	  	document.getElementById('p5').value=100;
	  	document.getElementById('c5').checked=true;
	  };
	  //document.location="../../index.html"
	}
	else
	{
		alert("Esta es la primera vez que nos visita");
		document.getElementById('modulo2').disabled=true;
		document.getElementById('modulo3').disabled=true;
		document.getElementById('modulo4').disabled=true;
		document.getElementById('modulo5').disabled=true;
		createCookie("Test1",0,1);

	}
});

function createCookie (name,value,days){
 if (days) {
 	var date= new Date();
 	date.setTime(date.getTime()+(days*24*60*60*1000));
 	var expires="; expires=" +date.toGMTString(); 
 }else var expires ="";

document.cookie= name+ "=" +value+expires+"; path=/";
};

function readCookie(name){
	var nameEQ= name+"=";
	var ca= document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];

			while( c.charAt(0)==' ') c=c.substring(1,c.length);

			if (c.indexOf(nameEQ)==0) return c.substring(nameEQ.length,c.length);
		};
		return null;
}