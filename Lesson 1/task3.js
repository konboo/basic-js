"use strict";
/*
1. Ассоциативность оператора сложения происходит слева направо;
2. 10 складывается с 10 получаем 20;
3. Получаем конкатенацию путем прибавления ранее полученого числа 20 к строке "10";
4. В результате вычислений получаем строку "2010" и справа налево присваиваем в переменную result1;
5. С помощью функции console.log выводим result1 в консоль;
*/
let result1 = 10 + 10 + "10";
console.log(result1);

/*
1. Ассоциативность оператора сложения происходит слева направо;
2. 10 складывается со строкой "10" в результате конкатенации получаем строку "1010";
3. К строке "1010" прибавляем число 10;
4. В результате вычислений получаем строку "101010" и справа налево присваиваем в переменную result2;
5. С помощью функции console.log выводим result2 в консоль;
*/
let result2 = 10 + "10" + 10;
console.log(result2);

/*
1. Ассоциативность оператора сложения происходит слева направо, однако из за того унарный плюс имеет более высокий приоритет, перед тем как произойдет вычисление, результатом оператора унарный плюс мы получаем число 10;
2. Числа складываются между собой слева направо;
3. В результате вычислений получаем число 30 и справа налево присваиваем в переменную result3;
4. С помощью функции console.log выводим result3 в консоль;
*/
let result3 = 10 + 10 + +"10";
console.log(result3);

/*
1. Ассоциативность оператора деления происходит слева направо, однако из за того унарный минус имеет более высокий приоритет, перед тем как произойдет вычисление, результатом оператора унарный минус мы получаем число -0, так как пустые двойные кавычки равняются null;
2. Числа делятся между собой слева направо;
3. В результате вычислений получаем значение -infinity и справа налево присваиваем в переменную result4;
4. С помощью функции console.log выводим result4 в консоль;
*/
let result4 = 10 / -"";
console.log(result4);

/*
1. Ассоциативность оператора деления происходит слева направо, однако из за того унарный плюс имеет более высокий приоритет, перед тем как произойдет вычисление, результатом оператора унарный плюс мы должны были получить число 2.5, но этого не происходит так как, дробные числа в JS разделяются с помощью точки;
2. Так как "2,5" является строка, результом работы унарного плюса мы получаем значение NaN;
3. Результатом деления слево направо числа 10 на NaN - получаем значение NaN и справа налево присваиваем в переменную result5
4. С помощью функции console.log выводим result5 в консоль;
*/
let result5 = 10 / +"2,5";
console.log(result5);