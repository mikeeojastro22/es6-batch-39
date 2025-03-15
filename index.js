import { helloWorld, data, greeting, add } from "./data.js";

helloWorld();
console.log(data);
data.push(4);
console.log(data);

greeting("Hoshi");

let result = add(30, 20);
console.log(result);

// Object recap

// const student = {
//     name: "Jihoon Lee",
//     grade: "4th year"
// }

// let name = student.name;
// let grade = student.grade;

// console.log(name, grade);

const player = {
    name: "Kobe Bryant",
    club: "LA Lakers",
    address: {
        city: "Los Angeles"
    }
}

// dot notation
console.log(player.club);

// bracket notation
console.log(player["club"]);

// object destructuring

const { name, club, address } = player;
const { city } = address;
console.log(name);
console.log(club);
console.log(address);
console.log(city);

// object literals

function addressMaker(city, country){
    const address = {
        newCity: city,
        newCountry: country
    }

    return address;
}

console.log(addressMaker("Manila", "Philippines"));

// creating object literals
function newAddressMaker(city, country){
    const address = {
        city,
        country
    }

    // const sample = {
    //     city: city,
    //     country: country
    // }

    return address;
}

console.log(newAddressMaker("Tokyo", "Japan"));

// For of

let incomes = [62000, 67000, 75000];
let total = 0;
// income - any variable that will represent each element in our iterable object
// incomes - iterable object
// for of - key word for indicating that we're going thru an iterable object. You don't need to access them, by index
for(const income of incomes){
    total += income;
    console.log(income);
}

console.log(`Total income is ${total}`);

// string is an iterable object
let fullname = "Tony Stark";

for(const a of fullname){
    console.log(a);
}

// default parameters

const leadSinger = (singer = "no one") => {
    console.log(`The lead singer of the band is ${singer}`);
}

leadSinger();
leadSinger("Ben");

function printStudents(students = ["Victor", "John"]){
    for(const student of students){
        console.log(student);
    }
}

printStudents();
printStudents(["Blossom", "Bubbles", "Buttercup"]);