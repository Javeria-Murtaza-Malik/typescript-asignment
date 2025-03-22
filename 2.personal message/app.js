"use strict";
let personName = "";
personName = prompt("what is ur name?") || '';
if (personName !== null && personName !== '') {
    alert(`hello ${personName},would u like to learn some python today?`);
}
else {
    alert('you have to fill ur name!');
}
