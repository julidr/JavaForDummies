var i=0;
var tiempo=[30,96,117,153,171,238]
function runVide()
{
   document.getElementById('video1').ontimeupdate=algoritmos;
}
function algoritmos()
{
   var vid=document.getElementById('video1');
  i= rango(vid.currentTime);
   if (i==30) {
   	 document.getElementById('im1').src="iu/image/Diapositivas Modulo 1 Clase 1/2.png";
   }
   else if (i==96) {
   	 document.getElementById('im1').src="iu/image/Diapositivas Modulo 1 Clase 1/3.png";
   }
   else if (i==117) {
   	 document.getElementById('im1').src="iu/image/Diapositivas Modulo 1 Clase 1/4.png";
   }
   else if (i==153) {
   	 document.getElementById('im1').src="iu/image/Diapositivas Modulo 1 Clase 1/5.png";
   }
   else if (i==171) {
   	 document.getElementById('im1').src="iu/image/Diapositivas Modulo 1 Clase 1/6.png";
   }
   else if (i==238) {
   	 document.getElementById('im1').src="iu/image/Diapositivas Modulo 1 Clase 1/7.png";
   };
   	var lab= document.getElementById('prueba32');
   	lab.innerHTML =vid.currentTime;
   	
}

function rango(x)
{
  if (x>=30 && x<31) {
  	return tiempo[0];
  }
  else if (x>=96 && x<97) {
  		return tiempo[1];
  }
  else if (x>=117 && x<118) {
  		return tiempo[2];
  }
  else if (x>=153 && x<154) {
  		return tiempo[3];
  }
  else if (x>=171 && x<172) {
  		return tiempo[4];
  }
  else if (x>=238 && x<239) {
  		return tiempo[5];
  };
}