"use strict";
// Alien colors .3: Turn your if-else chain from Exercise 5-4 into an if-else chain. 
// • Write three versions of this program, making sure each message is printed for the appropriate color alien. 
let alienColors = "green";
// • If the alien is green, print a message that the player earned 5 points. 
// • If the alien is yellow, print a message that the player earned le points.
// • If the alien is red, print a message that the player earned 15 points. 
//Version 1 of the program 
if (alienColors === "green") {
    console.log("player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color");
}
//Version 2 of the program 
if (alienColors = "yellow") {
    console.log("player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color");
}
//Version 3 of the program 
if (alienColors === "red") {
    console.log("player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color");
}
