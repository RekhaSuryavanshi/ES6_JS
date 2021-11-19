// spread operator(...)

function sumOne(a, b) {
    return a + b;
}
console.log(sumOne(4, 5)); // 9

//********************************
function sumOne(a, b) {
    return a + b;
}
var myArr = [4, 5];
console.log(sumOne(myArr)); // 4,5undefined

//*******************************

function sumOne(a, b) {
    return a + b;
}
var myArr = [3, 4, 5];
console.log(sumOne(myArr)); // 3,4,5undefined

//**********************************

function sumOne(a, b) {
    return a + b;
}
var myArr = [3, 4, 5];
console.log(sumOne(...myArr)); // 7 // spread operator: it takes the group (3,4,5) and spread it into individuals.(group can be array or objects or anything)
