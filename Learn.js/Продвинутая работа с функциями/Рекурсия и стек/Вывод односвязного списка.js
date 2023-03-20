let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };




function printList(list){

    do {
        console.log(list.value)
        list = list.next;

    } while ( list !== null );
}





function printList(list){

    if (list === null ) return;

    console.log(list.value);
    printList(list.next)
}

printList(list)

