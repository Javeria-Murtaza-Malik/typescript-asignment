let personName: string = '';
personName=prompt('what is ur name?')||'';

let lowerCase: string = personName.toLowerCase();
let uppercase: string = personName.toUpperCase();

let titlecase : string = personName.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join('')

if(personName!==null&&personName!== ''){
    alert(`hello! ${personName},here are your name in:
    lowercase:${lowerCase}
    uppercase:${uppercase}
    Titlecase:${titlecase}`)
}
else{
    alert('please fill your name!')
}