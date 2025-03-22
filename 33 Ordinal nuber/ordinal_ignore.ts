//ordinalnumbers:ordinal numbers indicates their position in a array ,
// such as 1sr]t or 2nd most ordinal numbers end in th,except 1,2,and 3
//.store the numbers 1 through 9 in a array.
//.loop through the array 
//.use an if -elese chain inside the loop to print the proper ordinal ending for each number.
// your out put  should read 1st 2nd 3rd 4rth 5th 6th 7th 8th 9th and each result should be on a separate line.
let number:number[]=[1,2,3,4,5,6,7,8,9,];
for(let num of number){
    let ordinalending:string;
    if(num=== 2){
        ordinalending="sd";
    }
    else if(num=== 2){
        ordinalending="nd";
    }
    else if(num=== 3){
        ordinalending="rd";
    }
    else{
        ordinalending="th";
    }
    console.log (`${num}${ordinalending}`);
}