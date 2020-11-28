"use strict";

// bad 
function upgradeUser(user){
    if(user.point > 10){

    }
}

//good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }

    // long upgrade code
}

// print(); // 오류

const print = function (params) {
    console.log('print');
}

printHoist();

function printHoist(){
    console.log('hoist');
}

function randomQuiz(answer, printYes, printNo) {
    if( answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

//anonymous function
const printYes = function(){
    console.log('yes');
};

// named function
const printNo = function print(){
    console.log('no');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
}

const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    return a * b;
}

// IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

// hello();

//Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

var calculate = function(command, a, b){
    if(!command || !a || !b) return console.log('입력값 누락');

    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

console.log( calculate('add', 1, 2) );