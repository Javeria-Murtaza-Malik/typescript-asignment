"use strict";
let guest_list = ['imran khan',
    'Nawas sharif', 'Asif Ali Zardari'];
//for(let i=0;i<guest_list.length;i++){
// console.log('dear Mr.'+guest_list[i]+',\n\nIt is our pleasure to invite you in our party. \n\nThank You!')
// }
let absent_guest = 'Imran khan';
let new_guest = 'Kamran tessori';
guest_list[0] = new_guest;
``;
// for (let i = 0; i < guest_list.length; i++) {
// //     console.log('dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!')
// // }
// console.log(`Mr. ${absent_guest}is not coming to the party.`);
// console.log('Good News!We find Big table so we are inviting 3 more guests')
// //here i added six guest
guest_list.unshift('sir Zia Khan');
guest_list.splice(2, 0, 'Mariyam Nawaz');
guest_list.push('Bilawal Bhutto  Zardari');
//here i printed array of six guest//
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!')
// }
//sorry message to guest not inviting.
// console.log('\nsorry we can not arrange table ,only two peoples will be invited');
//here i removed guest
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    //    console.log(`sorry Mr.${remove_guest},you are not invited for dinner`);
}
//left 2 more guest
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('dear Mr.' + guest_list[i] + ',\n\n you are still invited \n\nThank You!')
// }
//remove all  guest from array
guest_list.splice(0, 2);
console.log(guest_list);
//excercise 19
//print the message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest are:${guest_list.length}`);
