function ValueOfButton(x)
{	
	var in_result = document.getElementById("resulttext").innerHTML;
	if(in_result==='0')
	{
		document.getElementById("resulttext").innerHTML = x;
	}
	else
	{
		document.getElementById("resulttext").innerHTML = in_result + x;
	}
}
function Clean()
{
	document.getElementById("resulttext").innerHTML = "";
}
function Equals()
{
	var in_result = document.getElementById("resulttext").innerHTML;
	document.getElementById("resulttext").innerHTML = eval(in_result);
}
function Power()
{
	var in_result = document.getElementById("resulttext").innerHTML;
	document.getElementById("resulttext").innerHTML = eval(Math.pow(in_result,2));
}
function Sqrt()
{
	var in_result = document.getElementById("resulttext").innerHTML;
	document.getElementById("resulttext").innerHTML = eval(Math.sqrt(in_result,2));
}
function Sign()
{
	var in_result = document.getElementById("resulttext").innerHTML;
	if(in_result>=0)
	{
		document.getElementById("resulttext").innerHTML = "-" + in_result;
	}
	else
	{
		document.getElementById("resulttext").innerHTML = eval(Math.abs(in_result));
	}
}
function DecimalSeparator()
{
	var in_result = document.getElementById("resulttext").innerHTML;
	document.getElementById("resulttext").innerHTML = in_result + ".";
}