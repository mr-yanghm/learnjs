'use strict';

// 함수 선언
function doSomething(add){
    console.log(add);
    add(1, 2);
}

function add(a, b){
    const sum = a + b;

    return sum;
}

// 함수 호출
doSomething(add);

const result = add(1, 2);
// console.log(result);
