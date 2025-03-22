"use strict";
//pizzas:think of at least three kinds of your favourite pizza.store these pizza names in a array, and then use a for loop to
///print the name of each pizza
//.modify your loop to print a sentences using the name of the pizza instead of printing
//just the name of the pizza 
//.add a line at the end of your programe,outside the for loop ,that states how much yu 
//like pizza the output should cosist of three or more lines about the kinds of pizza you like and then and additional, such as i really love pizza
let pizzas = ['pepporoni', 'cuban', 'bbq chicken'];
for (let pizza of pizzas) {
    console.log(`i like ${pizza}pizza `);
}
console.log('i really love pizza');
