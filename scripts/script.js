var sym = '';
var firstNumber;
var secondNumber;
var plusBtn = document.getElementById('plus');
var minusBtn = document.getElementById('minus');
var divideBtn = document.getElementById('divide');
var multiplyBtn = document.getElementById('multiply');
var calculator = document.querySelector('.numbers');
var userText = document.getElementById('userNumber');
var clear = document.getElementById("del");
var equallyBtn = document.getElementById('equally');
equallyBtn.onclick = showResult;

calculator.addEventListener('click', function(elm) {
    userText.value += elm.target.textContent;
});
clear.addEventListener('click', function () {
    userText.value = '';
})
document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 49 || evt.keyCode === 97) {
        userText.value += 1;
    } else if (evt.keyCode === 50 || evt.keyCode === 98) {
        userText.value += 2;
    } else if (evt.keyCode === 51 || evt.keyCode === 99) {
        userText.value += 3;
    } else if (evt.keyCode === 52 || evt.keyCode === 100) {
        userText.value += 4;
    } else if (evt.keyCode === 53 || evt.keyCode === 101) {
        userText.value += 5;
    } else if (evt.keyCode === 54 || evt.keyCode === 102) {
        userText.value += 6;
    } else if (evt.keyCode === 55 || evt.keyCode === 103) {
        userText.value += 7;
    } else if (evt.keyCode === 56 || evt.keyCode === 104) {
        userText.value += 8;
    } else if (evt.keyCode === 57 || evt.keyCode === 105) {
        userText.value += 9;
    } else if (evt.keyCode === 48 || evt.keyCode === 96) {
        userText.value += 0;
    } else if (evt.keyCode === 106) {
        mult();
    }  else if (evt.keyCode === 109) {
        min();
    } else if (evt.keyCode === 111) {
        divideF()
    } else if (evt.keyCode === 107){
        sum()
    }  else if (evt.keyCode === 13){
        showResult()
    }
});

plusBtn.addEventListener('click', function () {
    sum()
});
minusBtn.addEventListener('click', function () {
    min()
});
multiplyBtn.addEventListener('click', function () {
    mult()
});
divideBtn.addEventListener('click', function () {
    divideF()
});

function min () {
    firstNumber = userText.value;
    userText.value = '';
    sym = '-';
}
function sum() {
    firstNumber = userText.value;
    userText.value = '';
    sym = '+';
}
function mult() {
    firstNumber = userText.value;
    userText.value = '';
    sym = '*';
}
function divideF () {
    firstNumber = userText.value;
    userText.value = '';
    sym = '/';
}

function showResult() {
    secondNumber = userText.value;
    if (sym === '+') {
        userText.value = Number(firstNumber) + Number(secondNumber);
    } else if (sym === '-') {
        userText.value = Number(firstNumber) - Number(secondNumber);
    } else if (sym === '*') {
        userText.value = Number(firstNumber) * Number(secondNumber);
    } else if (sym === '/') {
        userText.value = Number(firstNumber) / Number(secondNumber);
    }
}
document.getElementById('save').onclick = function() {
    localStorage.setItem("lastNumber", userText.value);
}
window.onload = function () {

    document.querySelector('.lastNumber').textContent = 'Последний результат: ' + localStorage.getItem("lastNumber")
}
