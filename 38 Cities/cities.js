//cities write a function called describe _city()that accept the name of city and its country.
// the function should print a simple sentences ,such a karachi is i pakisan .give the
//parameter for the country a default value.call your function for three different citis,at
//least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = 'default Country'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('karachi', 'pakistan');
describe_city('tokiyo', 'japan');
describe_city('paris');
