/* цикл */


function fib(n) {

    let n1 = 1;

    let n2 = 0;

    if ( n <= 1) return n;

    for( let i = 3; i<= n; i++ ) {


        let sumFib = n1 + n2;
        n2 = n1;
        n1 = sumFib;
        
    }
    console.log ( n1, n2)
    return n1 + n2;

}

console.log( fib(9))



/* рекурсия */
function fib(n){
    
    if ( n <= 1) return n;

    return fib(n-1) + fib(n-2)
}

console.log(fib(9))


