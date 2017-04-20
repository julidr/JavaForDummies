var cont=1;
var tiempo=[30,96,117,153,171,238]
var i=0;
function retroceder()
{
     var vid=document.getElementById('video1');
	if(cont!=1)
    {
    	cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 1 Clase 1/"+cont+".png";
        i=i-1;
        vid.currentTime=tiempo[i];
    }   
}
function adelantar()
{
    var vid=document.getElementById('video1');
	if(cont!=7)
    {
    	cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 1 Clase 1/"+cont+".png";
        vid.currentTime=tiempo[i];
        i=i+1;
    }   
}

function retroceder2()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 1 Clase 2/"+cont+".png";
    }   
}
function adelantar2()
{
    if(cont!=7)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 1 Clase 2/"+cont+".png";
    }   
}

function retroceder3()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 1 Clase 3/"+cont+".png";
    }   
}
function adelantar3()
{
    if(cont!=8)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 1 Clase 3/"+cont+".png";
    }   
}

function retroceder4()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 2 Clase 1/"+cont+".png";
    }   
}
function adelantar4()
{
    if(cont!=8)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 2 Clase 1/"+cont+".png";
    }   
}

function retroceder5()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 2 Clase 2/"+cont+".png";
    }   
}
function adelantar5()
{
    if(cont!=8)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 2 Clase 2/"+cont+".png";
    }   
}

function retroceder6()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 2 Clase 3/"+cont+".png";
    }   
}
function adelantar6()
{
    if(cont!=8)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 2 Clase 3/"+cont+".png";
    }
}

function retroceder7()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 2 Clase 4/"+cont+".png";
    }   
}
function adelantar7()
{
    if(cont!=7)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 2 Clase 4/"+cont+".png";
    }
}

function retroceder8()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 3 Clase 1/"+cont+".png";
    }   
}
function adelantar8()
{
    if(cont!=7)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 3 Clase 1/"+cont+".png";
    }
}

function retroceder9()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 3 Clase 2/"+cont+".png";
    }   
}
function adelantar9()
{
    if(cont!=12)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 3 Clase 2/"+cont+".png";
    }
}

function retroceder10()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 3 Clase 3/"+cont+".png";
    }   
}
function adelantar10()
{
    if(cont!=6)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 3 Clase 3/"+cont+".png";
    }
}

function retroceder11()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 4 Clase 1/"+cont+".png";
    }   
}
function adelantar11()
{
    if(cont!=9)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 4 Clase 1/"+cont+".png";
    }
}

function retroceder12()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 4 Clase 2/"+cont+".png";
    }   
}
function adelantar12()
{
    if(cont!=8)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 4 Clase 2/"+cont+".png";
    }
}

function retroceder13()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 4 Clase 3/"+cont+".png";
    }   
}
function adelantar13()
{
    if(cont!=8)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 4 Clase 3/"+cont+".png";
    }
}

function retroceder14()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 5 Clase 1/"+cont+".png";
    }   
}
function adelantar14()
{
    if(cont!=9)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 5 Clase 1/"+cont+".png";
    }
}

function retroceder15()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 5 Clase 2/"+cont+".png";
    }   
}
function adelantar15()
{
    if(cont!=10)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 5 Clase 2/"+cont+".png";
    }
}

function retroceder16()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 5 Clase 3/"+cont+".png";
    }   
}
function adelantar16()
{
    if(cont!=9)
    {
        cont=cont+1;
        document.getElementById('im1').src="iu/image/Diapositivas Modulo 5 Clase 3/"+cont+".png";
    }
}

function retrocederGa()
{
    if(cont!=1)
    {
        cont=cont-1;
        document.getElementById('gal').src="iu/image/Galeria/"+cont+".png";
    }   
}
function adelantarGa()
{
    if(cont!=10)
    {
        cont=cont+1;
        document.getElementById('gal').src="iu/image/Galeria/"+cont+".png";
    }
}