"use strict";
//Magician : Make  array of magician's namcalledes.pass the array to  a function 
//show_magician(),which prints the name of each magician in the array.
let magician = ['harry potter', 'hermione granger', 'ron weasly', 'albus dumbledore'];
function show_magician(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
show_magician(magician);
