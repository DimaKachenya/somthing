document.write("ЗАДАНИЕ 4");

document.write('<table border>');
    
    document.write("</br></br>");
    var x = new Date();
    var firstCol = ["Год","Месяц","День","Час","Минуты","Секунды"];
    var secondCol = [x.getFullYear(),x.getMonth() + 1, x.getDate(), x.getHours(), x.getMinutes(), x.getSeconds() ];
  
    document.write("<table class='table' border='1'>");
    for(var i = 0; i < 6; i++) {
            document.write("<tr class='row'>");
            document.write("<td class='col'>" + firstCol[i] + "</td>");
            document.write("<td class=' col1'>" + secondCol[i] + "</td>");
            document.write("</tr>");
    }
    document.write("</table>");

 document.write('</table>');