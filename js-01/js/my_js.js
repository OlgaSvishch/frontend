function calc() { //создаём функцию cacl

var power = document.getElementById('inp_1').value; 
// Объявляем переменную  и присваиваем ей значение, равное значению, введенному в поле 

	if (power > 100) {
	//Проверяем условие. Если значение переменной power больше 100,

 		power = (power - 100) * 1.68 + 90;
 		 // то переменной power присваивается результат вычисления данного выражения
	}

	else if (power == 100 || power < 100) { 
	//Иначе, если переменная power равна или больше 100
			
			power = power * 0.9; 
	// то переменной power присваивается результат вычисления данного выражения
	}

var hotwater = document.getElementById('inp_2').value  * 93.22;
// Объявляем переменную  и присваиваем ей значение, равное значению, введенному в поле и умноженному его на 93.22

var coldwater = document.getElementById('inp_3').value  * 15.228;
// Объявляем переменную  и присваиваем ей значение, равное значению, введенному в поле и умноженному его на 15.228

var result = power + hotwater + coldwater;
//Объявляем переменную  и присваиваем ей значение, равное сумме значений переменных power, hotwater и coldwater

alert("Ваша сумма к оплате: " + result);
// Вызываем окно вывода результата

}