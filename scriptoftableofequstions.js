document.getElementById('btnAnswer').setAttribute('onclick','btClick();');
document.getElementById('btnStartStop').setAttribute('onclick','StartStop();');
document.getElementById('txtUserAnswer').setAttribute('onkeypress','ckUpdate(event);');



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
document.getElementById('txtNumber1').innerHTML = quest['num1'];
document.getElementById('txtNumber2').innerHTML = quest['num2'];
function btClick()
{
	if(!start)
	{
		return;
	}
	if(checkAnswer(quest['num1'], quest['num2'], document.getElementById("txtUserAnswer").value))
	{
		good++;
		document.getElementById("txtUserAnswer").value = '';
		document.getElementById('spnCorrectAnswers').innerHTML = good;
		update();
	}
	else
	{
		bad++;
		document.getElementById('spnWrongAnswers').innerHTML = bad;
		document.getElementById('fntError').color = 'red';
		document.getElementById('fntError').innerHTML = 'Ошибка!';
		document.getElementById("txtUserAnswer").value = '';
	}
}
function StartStop()
{
	start = !start; 
	if(start)
	{
		(function() {
			document.getElementById('btnStartStop').innerHTML = 'Закончить';
	})();
	}
	else
	{
		(function() {
			document.getElementById('btnStartStop').innerHTML = 'Начать';
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
	document.getElementById('fntError').color = 'green';
	document.getElementById('fntError').innerHTML = 'Верно!';
	document.getElementById('txtNumber1').innerHTML = quest['num1'];
	document.getElementById('txtNumber2').innerHTML = quest['num2'];
}

