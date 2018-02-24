// var today=new Date();
// var inp=prompt("Enter Your Date of Birth (MM-DD-YYYY):");
// var ageInp=new Date(inp);

// var msToday=today.getTime();
// var msAgeInp=ageInp.getTime();

// var diff=msToday-msAgeInp;

// var aDiff=diff/(1000*60*60*24*30*12);

// aDiff=Math.floor(aDiff);

// document.write("You are "+aDiff+" years old.")
var birthDate=new Date(prompt("Enter your birthdate"));
var currentDate=new Date();
var randomDate=new Date(prompt("Enter any random date"));
var age=Math.floor((currentDate-birthDate)/(1000*60*60*24*365.25));
// var abc=Math.floor((randomDate-birthDate)/(1000*60*60*24*365.25));
alert("Your current age is"+age+"Years till your defined date is"+abc);