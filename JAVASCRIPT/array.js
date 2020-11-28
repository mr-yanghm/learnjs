
const arr = new Array("1", "2");

console.log(arr);

for (const item of arr) {
    console.log(item);
}

arr.indexOf("1");

arr.push("3", "4");

console.log(arr);

console.log(arr.join("-"));

console.log(arr.slice(1,2));

console.log(arr.reverse());