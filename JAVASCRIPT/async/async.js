'use strict';

// async
// function fetchUser(){

//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs...
//         resolve('ellie');
//     });
// }

async function fetchUser() {

    // do network request in 10 secs...
    return ('ellie');
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1000);
    // throw 'error';
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

function getBananaPromise(){
    return delay(3000)
    .then(() => 'banana');
}

// function pickFruitsPromise(){
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

// pickFruitsPromise().then(console.log);

// not used (bad)
async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();

    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);