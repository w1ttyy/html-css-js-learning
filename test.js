let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
    let avg = 0;
    for(let user of arr){
        avg += user.age;
    }
    avg = avg / arr.length;
    return getAverageAge;
}