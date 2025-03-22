"use strict";
let personName = '';
personName = prompt('what is ur name?') || '';
let lowerCase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
if (personName !== null && personName !== '') {
    alert(`hello! ${personName},here are your name in:
    lowercase:${lowerCase}
    uppercase:${uppercase}
    Titlecase:${titlecase}`)
}
else {
    alert('please fill your name!');
}
