//store the location in array ,make the array is not in alphabetical order.
let places:string[]=['Italy','Germany','Agra','eifel Tower','Times square'];


//print your array in its originial order.
console.log( 'orginal '+places);
//print ur array in alphabetical order without modifing the actual list.
console.log('copy '+[...places].sort());
//show that your array is still in its orginal order by printing it.
console.log( 'orginal '+places);
//print your array in reverse alphabetical order ithout changing the order of the original list.
console.log('copy '+[...places].sort());

//show that your array is still in its orginal order by printing it again.
console.log( 'orginal '+places);
//reverse the order of your list again . print the list to show that its back to its orignial order.
console.log( 'original '+places.reverse());
//sort your array so its stored in aplphabetical order.print the array to show that its order has been changed.
console.log(places.sort());
//sort to change ur aray  so its store in reverse alphabetical order .print the list to show that its order has changed.
console.log(places.sort().reverse());