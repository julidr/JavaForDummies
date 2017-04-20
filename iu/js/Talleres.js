function run2() {
		document.getElementById('res1Taller1').onclick=alertap1;
		document.getElementById('res2Taller1').onclick=alertap2;
		document.getElementById('res3Taller1').onclick=alertap3;
		document.getElementById('res4Taller1').onclick=alertap4;
		document.getElementById('res5Taller1').onclick=alertap5;
		document.getElementById('res6Taller1').onclick=alertap6;
		document.getElementById('res7Taller1').onclick=alertap7;
		document.getElementById('res8Taller1').onclick=alertap8;
		document.getElementById('res10Taller1').onclick=alertap10;
		document.getElementById('res9Taller1').onclick=alertap9;
		

}

function run3() {
	document.getElementById('res1Taller2').onclick=alertap11;
	document.getElementById('res2Taller2').onclick=alertap12;
	document.getElementById('res3Taller2').onclick=alertap13;
	document.getElementById('res4Taller2').onclick=alertap14;
	document.getElementById('res5Taller2').onclick=alertap15;
	document.getElementById('res6Taller2').onclick=alertap16;
	document.getElementById('res7Taller2').onclick=alertap17;
	document.getElementById('res8Taller2').onclick=alertap18;
	document.getElementById('res9Taller2').onclick=alertap19;
	document.getElementById('res10Taller2').onclick=alertap20;
}

function run4() {
	document.getElementById('res1Taller3').onclick=alertap21;
	document.getElementById('res2Taller3').onclick=alertap22;
	document.getElementById('res3Taller3').onclick=alertap23;
	document.getElementById('res4Taller3').onclick=alertap24;
	document.getElementById('res5Taller3').onclick=alertap25;
	document.getElementById('res6Taller3').onclick=alertap26;
	document.getElementById('res7Taller3').onclick=alertap27;
	document.getElementById('res8Taller3').onclick=alertap28;
	document.getElementById('res9Taller3').onclick=alertap29;
	document.getElementById('res10Taller3').onclick=alertap30;
}

function run5() {
	document.getElementById('res1Taller4').onclick=alertap31;
	document.getElementById('res2Taller4').onclick=alertap32;
	document.getElementById('res3Taller4').onclick=alertap33;
	document.getElementById('res4Taller4').onclick=alertap34;
	document.getElementById('res5Taller4').onclick=alertap35;
	document.getElementById('res6Taller4').onclick=alertap36;
	document.getElementById('res7Taller4').onclick=alertap37;
	document.getElementById('res8Taller4').onclick=alertap38;
	document.getElementById('res9Taller4').onclick=alertap39;
	document.getElementById('res10Taller4').onclick=alertap40;
}

function run6() {
	document.getElementById('res1Taller5').onclick=alertap41;
	document.getElementById('res2Taller5').onclick=alertap42;
	document.getElementById('res3Taller5').onclick=alertap43;
	document.getElementById('res4Taller5').onclick=alertap44;
	document.getElementById('res5Taller5').onclick=alertap45;
	document.getElementById('res6Taller5').onclick=alertap46;
	document.getElementById('res7Taller5').onclick=alertap47;
	document.getElementById('res8Taller5').onclick=alertap48;
	document.getElementById('res9Taller5').onclick=alertap49;
	document.getElementById('res10Taller5').onclick=alertap50;
}


function alertap1(){
	var A1=document.getElementsByName('op1Taller1');
	if (verificar(A1)==true) {
		var P1=document.getElementById('res1Taller1').disabled=true;
	for (var i = 0; i < A1.length; i++) {
		A1[i].disabled=true;
		if (A1[i].checked) {
			if (A1[i].value=='1') {
				document.getElementById('CyX1').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX1').src="iu/image/x2.png";
			};
		};
		
	};
	};

}

function alertap2(){
	var A2=document.getElementsByName('op2Taller1');
	if (verificar(A2)==true) {
		var P2=document.getElementById('res2Taller1').disabled=true;
	for (var i = 0; i < A2.length; i++) {
		A2[i].disabled=true;
		if (A2[i].checked) {
			if (A2[i].value=='1') {
				document.getElementById('CyX2').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX2').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap4(){
	var A4=document.getElementsByName('op4Taller1');
	if (verificar(A4)==true) {
		var P4=document.getElementById('res4Taller1').disabled=true;
	for (var i = 0; i < A4.length; i++) {
		A4[i].disabled=true;
		if (A4[i].checked) {
			if (A4[i].value=='3') {
				document.getElementById('CyX4').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX4').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap3(){
	var A3=document.getElementsByName('op3Taller1');
	if (verificar(A3)==true) {
		var P3=document.getElementById('res3Taller1').disabled=true;
	for (var i = 0; i < A3.length; i++) {
		A3[i].disabled=true;
		if (A3[i].checked) {
			if (A3[i].value=='1') {
				document.getElementById('CyX3').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX3').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap5(){
	var A5=document.getElementsByName('op5Taller1');
	if (verificar(A5)==true) {
		var P5=document.getElementById('res5Taller1').disabled=true;
	for (var i = 0; i < A5.length; i++) {
		A5[i].disabled=true;
		if (A5[i].checked) {
			if (A5[i].value=='1') {
				document.getElementById('CyX5').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX5').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap6(){
	var A6=document.getElementsByName('op6Taller1');
	if (verificar(A6)==true) {
		var P6=document.getElementById('res6Taller1').disabled=true;
	for (var i = 0; i < A6.length; i++) {
		A6[i].disabled=true;
		if (A6[i].checked) {
			if (A6[i].value=='3') {
				document.getElementById('CyX6').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX6').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap7(){
	var A7=document.getElementsByName('op7Taller1');
	if (verificar(A7)==true) {
		var P7=document.getElementById('res7Taller1').disabled=true;
	for (var i = 0; i < A7.length; i++) {
		A7[i].disabled=true;
		if (A7[i].checked) {
			if (A7[i].value=='2') {
				document.getElementById('CyX7').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX7').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap8(){
	var A8=document.getElementsByName('op8Taller1');
	if (verificar(A8)==true) {
		var P8=document.getElementById('res8Taller1').disabled=true;
	for (var i = 0; i < A8.length; i++) {
		A8[i].disabled=true;
		if (A8[i].checked) {
			if (A8[i].value=='1') {
				document.getElementById('CyX8').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX8').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap9(){
	var A9=document.getElementsByName('op9Taller1');
	if (verificar(A9)==true) {
		var P9=document.getElementById('res9Taller1').disabled=true;
	for (var i = 0; i < A9.length; i++) {
		A9[i].disabled=true;
		if (A9[i].checked) {
			if (A9[i].value=='1') {
				document.getElementById('CyX9').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX9').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap10(){
	var A10=document.getElementsByName('op10Taller1');
	if (verificar(A10)==true) {
		var P10=document.getElementById('res10Taller1').disabled=true;
	for (var i = 0; i < A10.length; i++) {
		A10[i].disabled=true;
		if (A10[i].checked) {
			if (A10[i].value=='2') {
				document.getElementById('CyX10').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX10').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap11(){
	var A11=document.getElementsByName('op1Taller2');
	if (verificar(A11)==true) {
		var P11=document.getElementById('res1Taller2').disabled=true;
	for (var i = 0; i < A11.length; i++) {
		A11[i].disabled=true;
		if (A11[i].checked) {
			if (A11[i].value=='1') {
				document.getElementById('CyX11').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX11').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap12(){
	var A12=document.getElementsByName('op2Taller2');
	if (verificar(A12)==true) {
		var P12=document.getElementById('res2Taller2').disabled=true;
	for (var i = 0; i < A12.length; i++) {
		A12[i].disabled=true;
		if (A12[i].checked) {
			if (A12[i].value=='4') {
				document.getElementById('CyX12').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX12').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap13(){
	var A13=document.getElementsByName('op3Taller2');
	if (verificar(A13)==true) {
		var P13=document.getElementById('res3Taller2').disabled=true;
	for (var i = 0; i < A13.length; i++) {
		A13[i].disabled=true;
		if (A13[i].checked) {
			if (A13[i].value=='1') {
				document.getElementById('CyX13').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX13').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap14(){
	var A14=document.getElementsByName('op4Taller2');
	if (verificar(A14)==true) {
		var P13=document.getElementById('res4Taller2').disabled=true;
	for (var i = 0; i < A14.length; i++) {
		A14[i].disabled=true;
		if (A14[i].checked) {
			if (A14[i].value=='1') {
				document.getElementById('CyX14').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX14').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap15(){
	var A15=document.getElementsByName('op5Taller2');
	if (verificar(A15)==true) {
		var P15=document.getElementById('res5Taller2').disabled=true;
	for (var i = 0; i < A15.length; i++) {
		A15[i].disabled=true;
		if (A15[i].checked) {
			if (A15[i].value=='1') {
				document.getElementById('CyX15').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX15').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap16(){
	var A16=document.getElementsByName('op6Taller2');
	if (verificar(A16)==true) {
		var P16=document.getElementById('res6Taller2').disabled=true;
	for (var i = 0; i < A16.length; i++) {
		A16[i].disabled=true;
		if (A16[i].checked) {
			if (A16[i].value=='4') {
				document.getElementById('CyX16').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX16').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap17(){
	var A17=document.getElementsByName('op7Taller2');
	if (verificar(A17)==true) {
		var P17=document.getElementById('res7Taller2').disabled=true;
	for (var i = 0; i < A17.length; i++) {
		A17[i].disabled=true;
		if (A17[i].checked) {
			if (A17[i].value=='1') {
				document.getElementById('CyX17').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX17').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap18(){
	var A18=document.getElementsByName('op8Taller2');
	if (verificar(A18)==true) {
		var P18=document.getElementById('res8Taller2').disabled=true;
	for (var i = 0; i < A18.length; i++) {
		A18[i].disabled=true;
		if (A18[i].checked) {
			if (A18[i].value=='1') {
				document.getElementById('CyX18').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX18').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap19(){
	var A19=document.getElementsByName('op9Taller2');
	if (verificar(A19)==true) {
		var P19=document.getElementById('res9Taller2').disabled=true;
	for (var i = 0; i < A19.length; i++) {
		A19[i].disabled=true;
		if (A19[i].checked) {
			if (A19[i].value=='1') {
				document.getElementById('CyX19').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX19').src="iu/image/x2.png";
			};
		};
		
	};
	};
}


function alertap20(){
	var A20=document.getElementsByName('op10Taller2');
	if (verificar(A20)==true) {
		var P20=document.getElementById('res10Taller2').disabled=true;
	for (var i = 0; i < A20.length; i++) {
		A20[i].disabled=true;
		if (A20[i].checked) {
			if (A20[i].value=='2') {
				document.getElementById('CyX20').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX20').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap21(){
	var A21=document.getElementsByName('op1Taller3');
	if (verificar(A21)==true) {
		var P21=document.getElementById('res1Taller3').disabled=true;
	for (var i = 0; i < A21.length; i++) {
		A21[i].disabled=true;
		if (A21[i].checked) {
			if (A21[i].value=='1') {
				document.getElementById('CyX21').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX21').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap22(){
	var A22=document.getElementsByName('op2Taller3');
	if (verificar(A22)==true) {
		var P22=document.getElementById('res2Taller3').disabled=true;
	for (var i = 0; i < A22.length; i++) {
		A22[i].disabled=true;
		if (A22[i].checked) {
			if (A22[i].value=='1') {
				document.getElementById('CyX22').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX22').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap23(){
	var A23=document.getElementsByName('op3Taller3');
	if (verificar(A23)==true) {
		var P23=document.getElementById('res3Taller3').disabled=true;
	for (var i = 0; i < A23.length; i++) {
		A23[i].disabled=true;
		if (A23[i].checked) {
			if (A23[i].value=='4') {
				document.getElementById('CyX23').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX23').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap24(){
	var A24=document.getElementsByName('op4Taller3');
	if (verificar(A24)==true) {
		var P24=document.getElementById('res4Taller3').disabled=true;
	for (var i = 0; i < A24.length; i++) {
		A24[i].disabled=true;
		if (A24[i].checked) {
			if (A24[i].value=='1') {
				document.getElementById('CyX24').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX24').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap25(){
	var A25=document.getElementsByName('op5Taller3');
	if (verificar(A25)==true) {
		var P25=document.getElementById('res5Taller3').disabled=true;
	for (var i = 0; i < A25.length; i++) {
		A25[i].disabled=true;
		if (A25[i].checked) {
			if (A25[i].value=='1') {
				document.getElementById('CyX25').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX25').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap26(){
	var A26=document.getElementsByName('op6Taller3');
	if (verificar(A26)==true) {
		var P26=document.getElementById('res6Taller3').disabled=true;
	for (var i = 0; i < A26.length; i++) {
		A26[i].disabled=true;
		if (A26[i].checked) {
			if (A26[i].value=='1') {
				document.getElementById('CyX26').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX26').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap27(){
	var A27=document.getElementsByName('op7Taller3');
	if (verificar(A27)==true) {
		var P27=document.getElementById('res7Taller3').disabled=true;
	for (var i = 0; i < A27.length; i++) {
		A27[i].disabled=true;
		if (A27[i].checked) {
			if (A27[i].value=='1') {
				document.getElementById('CyX27').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX27').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap28(){
	var A28=document.getElementsByName('op8Taller3');
	if (verificar(A28)==true) {
		var P28=document.getElementById('res8Taller3').disabled=true;
	for (var i = 0; i < A28.length; i++) {
		A28[i].disabled=true;
		if (A28[i].checked) {
			if (A28[i].value=='1') {
				document.getElementById('CyX28').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX28').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap29(){
	var A29=document.getElementsByName('op9Taller3');
	if (verificar(A29)==true) {
		var P29=document.getElementById('res9Taller3').disabled=true;
	for (var i = 0; i < A29.length; i++) {
		A29[i].disabled=true;
		if (A29[i].checked) {
			if (A29[i].value=='1') {
				document.getElementById('CyX29').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX29').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap30(){
	var A30=document.getElementsByName('op10Taller3');
	if (verificar(A30)==true) {
		var P30=document.getElementById('res10Taller3').disabled=true;
	for (var i = 0; i < A30.length; i++) {
		A30[i].disabled=true;
		if (A30[i].checked) {
			if (A30[i].value=='2') {
				document.getElementById('CyX30').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX30').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap31(){
	var A31=document.getElementsByName('op1Taller4');
	if (verificar(A31)==true) {
		var P31=document.getElementById('res1Taller4').disabled=true;
	for (var i = 0; i < A31.length; i++) {
		A31[i].disabled=true;
		if (A31[i].checked) {
			if (A31[i].value=='1') {
				document.getElementById('CyX31').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX31').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap32(){
	var A32=document.getElementsByName('op2Taller4');
	if (verificar(A32)==true) {
		var P32=document.getElementById('res2Taller4').disabled=true;
	for (var i = 0; i < A32.length; i++) {
		A32[i].disabled=true;
		if (A32[i].checked) {
			if (A32[i].value=='1') {
				document.getElementById('CyX32').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX32').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap33(){
	var A33=document.getElementsByName('op3Taller4');
	if (verificar(A33)==true) {
		var P33=document.getElementById('res3Taller4').disabled=true;
	for (var i = 0; i < A33.length; i++) {
		A33[i].disabled=true;
		if (A33[i].checked) {
			if (A33[i].value=='1') {
				document.getElementById('CyX33').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX33').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap34(){
	var A34=document.getElementsByName('op4Taller4');
	if (verificar(A34)==true) {
		var P34=document.getElementById('res4Taller4').disabled=true;
	for (var i = 0; i < A34.length; i++) {
		A34[i].disabled=true;
		if (A34[i].checked) {
			if (A34[i].value=='1') {
				document.getElementById('CyX34').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX34').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap35(){
	var A35=document.getElementsByName('op5Taller4');
	if (verificar(A35)==true) {
		var P35=document.getElementById('res5Taller4').disabled=true;
	for (var i = 0; i < A35.length; i++) {
		A35[i].disabled=true;
		if (A35[i].checked) {
			if (A35[i].value=='4') {
				document.getElementById('CyX35').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX35').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap36(){
	var A36=document.getElementsByName('op6Taller4');
	if (verificar(A36)==true) {
		var P36=document.getElementById('res6Taller4').disabled=true;
	for (var i = 0; i < A36.length; i++) {
		A36[i].disabled=true;
		if (A36[i].checked) {
			if (A36[i].value=='1') {
				document.getElementById('CyX36').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX36').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap37(){
	var A37=document.getElementsByName('op7Taller4');
	if (verificar(A37)==true) {
		var P37=document.getElementById('res7Taller4').disabled=true;
	for (var i = 0; i < A37.length; i++) {
		A37[i].disabled=true;
		if (A37[i].checked) {
			if (A37[i].value=='1') {
				document.getElementById('CyX37').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX37').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap38(){
	var A38=document.getElementsByName('op8Taller4');
	if (verificar(A38)==true) {
		var P38=document.getElementById('res8Taller4').disabled=true;
	for (var i = 0; i < A38.length; i++) {
		A38[i].disabled=true;
		if (A38[i].checked) {
			if (A38[i].value=='1') {
				document.getElementById('CyX38').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX38').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap39(){
	var A39=document.getElementsByName('op9Taller4');
	if (verificar(A39)==true) {
		var P39=document.getElementById('res9Taller4').disabled=true;
	for (var i = 0; i < A39.length; i++) {
		A39[i].disabled=true;
		if (A39[i].checked) {
			if (A39[i].value=='1') {
				document.getElementById('CyX39').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX39').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap40(){
	var A40=document.getElementsByName('op10Taller4');
	if (verificar(A40)==true) {
		var P40=document.getElementById('res10Taller4').disabled=true;
	for (var i = 0; i < A40.length; i++) {
		A40[i].disabled=true;
		if (A40[i].checked) {
			if (A40[i].value=='2') {
				document.getElementById('CyX40').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX40').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap41(){
	var A41=document.getElementsByName('op1Taller5');
	if (verificar(A41)==true) {
		var P41=document.getElementById('res1Taller5').disabled=true;
	for (var i = 0; i < A41.length; i++) {
		A41[i].disabled=true;
		if (A41[i].checked) {
			if (A41[i].value=='1') {
				document.getElementById('CyX41').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX41').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap42(){
	var A42=document.getElementsByName('op2Taller5');
	if (verificar(A42)==true) {
		var P42=document.getElementById('res2Taller5').disabled=true;
	for (var i = 0; i < A42.length; i++) {
		A42[i].disabled=true;
		if (A42[i].checked) {
			if (A42[i].value=='2') {
				document.getElementById('CyX42').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX42').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap43(){
	var A43=document.getElementsByName('op3Taller5');
	if (verificar(A43)==true) {
		var P43=document.getElementById('res3Taller5').disabled=true;
	for (var i = 0; i < A43.length; i++) {
		A43[i].disabled=true;
		if (A43[i].checked) {
			if (A43[i].value=='1') {
				document.getElementById('CyX43').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX43').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap44(){
	var A44=document.getElementsByName('op4Taller5');
	if (verificar(A44)==true) {
		var P44=document.getElementById('res4Taller5').disabled=true;
	for (var i = 0; i < A44.length; i++) {
		A44[i].disabled=true;
		if (A44[i].checked) {
			if (A44[i].value=='1') {
				document.getElementById('CyX44').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX44').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap45(){
	var A45=document.getElementsByName('op5Taller5');
	if (verificar(A45)==true) {
		var P45=document.getElementById('res5Taller5').disabled=true;
	for (var i = 0; i < A45.length; i++) {
		A45[i].disabled=true;
		if (A45[i].checked) {
			if (A45[i].value=='1') {
				document.getElementById('CyX45').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX45').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap46(){
	var A46=document.getElementsByName('op6Taller5');
	if (verificar(A46)==true) {
		var P46=document.getElementById('res6Taller5').disabled=true;
	for (var i = 0; i < A46.length; i++) {
		A46[i].disabled=true;
		if (A46[i].checked) {
			if (A46[i].value=='4') {
				document.getElementById('CyX46').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX46').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap47(){
	var A47=document.getElementsByName('op7Taller5');
	if (verificar(A47)==true) {
		var P47=document.getElementById('res7Taller5').disabled=true;
	for (var i = 0; i < A47.length; i++) {
		A47[i].disabled=true;
		if (A47[i].checked) {
			if (A47[i].value=='2') {
				document.getElementById('CyX47').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX47').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap48(){
	var A48=document.getElementsByName('op8Taller5');
	if (verificar(A48)==true) {
		var P48=document.getElementById('res8Taller5').disabled=true;
	for (var i = 0; i < A48.length; i++) {
		A48[i].disabled=true;
		if (A48[i].checked) {
			if (A48[i].value=='1') {
				document.getElementById('CyX48').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX48').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap49(){
	var A49=document.getElementsByName('op9Taller5');
	if (verificar(A49)==true) {
		var P49=document.getElementById('res9Taller5').disabled=true;
	for (var i = 0; i < A49.length; i++) {
		A49[i].disabled=true;
		if (A49[i].checked) {
			if (A49[i].value=='1') {
				document.getElementById('CyX49').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX49').src="iu/image/x2.png";
			};
		};
		
	};
	};
}

function alertap50(){
	var A50=document.getElementsByName('op10Taller5');
	if (verificar(A50)==true) {
		var P50=document.getElementById('res10Taller5').disabled=true;
	for (var i = 0; i < A50.length; i++) {
		A50[i].disabled=true;
		if (A50[i].checked) {
			if (A50[i].value=='2') {
				document.getElementById('CyX50').src="iu/image/check2.png";
			}else{
				document.getElementById('CyX50').src="iu/image/x2.png";
			};
		};
		
	};
	};
}



function verificar(A)
{
   var cont=0;
   for (var j = 0; j < A.length; j++) {
  		if (A[j].checked==false) {
  			cont++;
  		};
  	};
  	if (cont==4) {
  		alert("No ha Seleccionado Ninguna Repuesta");
  		return false;
  	};
  	return true;
}