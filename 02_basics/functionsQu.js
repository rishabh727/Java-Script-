// squre
// function sq(num){
//     return num * num;
// }
// let val =sq(4);



// function sum(v1,v2){
//     return (v1+v2);
// }
// let su = sum(1,4);


function check(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}
let result = check(10);
// console.log(result);


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(5)); // Output: 120



let mul =function(num1,num2){
    return num1*num2;

}
// console.log(mul(2,5))



function discountcal(discount){
    let price = 1000;
     return function(price){
        return price - (price * discount / 100);
     }
}
let fifty = discountcal(50);
// console.log(fifty(1200));


function outer(fix){
    return function inner(num){
        return num + fix;
}}
let add5 = outer(5);
console.log(add5(10)); // Output: 15 