"use strict";
let guest_list = ['imran khan',
    'Nawas sharif', 'Asif Ali Zardari'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!');
}
let absent_guest = 'Imran khan';
let new_guest = 'Kamran tessori';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!');
}
console.log(`Mr. ${absent_guest}is not coming to the party.`);
