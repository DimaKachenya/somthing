    document.write("ЗАДАНИЕ 2");
    document.write("</br></br>");
    var methodsOfArAndMath = ["pow", "pop", "push", "shift", "round", "floor", "slice", "sort"];
    document.write(methodsOfArAndMath);
    document.write("</br>");
    var methodsOfAr = [];
    var methodsOfMath = [];

    for (var i = 0; i < 8; i++) 
	{
      if(methodsOfArAndMath[i] === "round" || methodsOfArAndMath[i] === "floor" || methodsOfArAndMath[i] === "pow")
		  {
			methodsOfMath.push(methodsOfArAndMath[i]);
		  }
		else
		  {
			  methodsOfAr.push(methodsOfArAndMath[i]);
		  }

    }
		methodsOfMath.push("log");
		document.write(methodsOfMath);
		document.write("</br>");
		methodsOfAr.push("toUpperCase");
		document.write(methodsOfAr);
		document.write("</br></br>");