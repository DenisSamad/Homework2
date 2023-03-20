
function printNumbers(from, to){
    
    let timerId = setInterval(function(){
        for(let i = from; i<= to; i++){
            console.log(i);
        }
    }, 1000);
}



printNumbers(1, 4);