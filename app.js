"use strict";
var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
    return +num1 + +num2;
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result1 = add(+num1, +num2);
    var result2 = add(num1, num2);
    console.log("RESULT1: ", result1);
    console.log("RESULT2: ", result2);
});
