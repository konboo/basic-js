"use strict";

let a = +prompt("Введите превое число");
let b = +prompt("Введите второе число");
let result = 0;
if (a >= 0 && b >= 0) {
  result = a - b;
  alert(result);
} else if (a <= 0 && b <= 0) {
  result = a * b;
  alert(result);
} else if ((a <= 0 && b >= 0) || (a >= 0 && b <= 0)) {
  result = a + b;
  alert(result);
}
