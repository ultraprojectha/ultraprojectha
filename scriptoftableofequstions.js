var good = 0, bad = 0;
function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1);
	rand = Math.round(rand);
	return rand;
}
function getEx()
{
	var num1 = randomInteger(0,10);
	var num2 = randomInteger(0,10); 
	return {num1, num2};
}
function checkAnswer(num1, num2, answer)
{
	return num1 * num2 == answer;
}
var quest = getEx();
document.getElementById('txtNumber1').innerHTML = quest['txtNumber1'];
document.getElementById('txtNumber2').innerHTML = quest['txtNumber2'];
function btClick()
{
	if(!start)
	{
		return;
	}
	if(checkAnswer(quest['txtNumber1'], quest['txtNumber2'], document.getElementById("userAnswer").value))
	{
		good++;
		document.getElementById("userAnswer").value = '';
		document.getElementById('spnCorrectAnswers').innerHTML = good;
		update();
	}
	else
	{
		bad++;
		document.getElementById('spnWrongAnswers').innerHTML = bad;
		document.getElementById('error').color = 'red';
		document.getElementById('error').innerHTML = 'Ошибка!';
		document.getElementById("userAnswer").value = '';
	}
}
function StartStop()
{
	start = !start; 
	if(start)
	{
		(function() {
			document.getElementById('StartStop').innerHTML = 'Закончить';
	})();
	}
	else
	{
		(function() {
			document.getElementById('StartStop').innerHTML = 'Начать';
		})();
	}
}
function ckUpdate(e)
{
	if(e.keyCode == 13)
	{
		btClick();
	}
}
function update()
{
	quest = getEx();    
	document.getElementById('error').color = 'green';
	document.getElementById('error').innerHTML = 'Верно!';
	document.getElementById('txtNumber1').innerHTML = quest['txtNumber1'];
	document.getElementById('txtNumber2').innerHTML = quest['txtNumber2'];
}

