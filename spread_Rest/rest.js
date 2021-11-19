//Spread syntax "expands" an array into its elements, while
//rest syntax collects multiple elements and "condenses" them into a single element.

function sumTwo(...args) { //(...arg) when we are not sure how many arguments is comming. it expect the array.
    //args converts individual values into array
    console.log(args); // [2,3] -->args converts individual values into array
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sumTwo(2, 3)); //5
console.log(sumTwo(2, 3, 4)); //9

// *****************************************************

function sumTwo(a, b, ...args) { // args ignores a abd b
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];
}
console.log(sumTwo(2, 3, 1, 1, 1));//[3, 6]
