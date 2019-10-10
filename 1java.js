spec=new Array();
spec[0]=6*Math.pow(3.14,2)+3*Math.exp(8);
spec[1]=2*Math.cos(4)+Math.cos(12)+8*Math.exp(3);
spec[2]=3*Math.sin(9)+Math.log(5)+Math.sqrt(3);
spec[3]=2*Math.tan(5)+6*3.14+Math.sqrt(12);

for(let i=0;i<spec.length;i++){
	document.write(spec[i]+"<br>");
}
var a=0,b=100000000;
for( let i=0;i<3;i++)
	{
		if(a<spec[i])
		{
			a=spec[i];
		}
		if(b>spec[i])
			{
				b=spec[i];
			}
		
		
	}
	document.write("<br>");
	document.write("<br>");
	document.write("<br>");

document.write("Максимальное число : "+a+"<br>");

	document.write("<br>");
	document.write("<br>");
	document.write("<br>");
document.write("Минимальное число : "+b);
	