"use strict";

/**
 * Функция выполнения математической операции над аргументамию
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @param {string} operation название аргумента обозначающего тип желаемого вычисления ("summ", "subtract", "multiply", "divide")
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "summ":
      return sum(arg1, arg2);
    case "subtract":
      return ded(arg1, arg2);
    case "multiply":
      return mul(arg1, arg2);
    case "divide":
      return div(arg1, arg2);
    default:
      alert("Такого аргумента не существует");
  }
}

console.log(mathOperation(5, 8, "summ"));
console.log(mathOperation(5, 8, "subtract"));
console.log(mathOperation(5, 8, "multiply"));
console.log(mathOperation(5, 8, "divide"));
