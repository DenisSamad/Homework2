let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};


function printListReverse(list){

    let arr = [];

    do {
        arr.push(list.value);
        list = list.next;
    } while ( list !== null)

    do {
        console.log(arr.pop());
    } while (arr.length > 0);

}

printListReverse(list) 


function printListReverse(list){

  if ( list.next !== null ){
    printListReverse(list.next)
  }
  
  console.log(list.value);

}

printListReverse(list)

