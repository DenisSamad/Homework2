
/* цикл */ 
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(100));

/* рекурсия */ 

function sumTo(n) {
  sum = 0;
  if (n == 1) return 1;
  else {
    return n + sumTo(n - 1);
  }
}
console.log(sumTo(100));


/* формула */ 
function sumTo(n){
    return n * (n + 1)/ 2;
}
console.log( sumTo(10))