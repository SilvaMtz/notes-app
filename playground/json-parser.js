const fs = require('fs');

const user = JSON.parse(fs.readFileSync('user.json').toString());

user.name = "John";
user.age = 43;
user.homeworld = "Terra"

fs.writeFileSync('user.json', JSON.stringify(user));

console.log(user.homeworld);