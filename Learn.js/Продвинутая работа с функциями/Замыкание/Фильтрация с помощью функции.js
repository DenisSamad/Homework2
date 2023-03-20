function inArray(arr){
    return function(n){
        return arr.includes(n);
    }
}

function inBetween(a, b){
    return function(n){
        return n >= a && n <= b;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) );
console.log( arr.filter(inArray([1, 2, 10])) );

