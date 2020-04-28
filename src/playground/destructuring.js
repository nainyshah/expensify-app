console.log('destructuring');
// ES6 Destructuring
const person = {
	name: 'Syed raza',
	age: 36,
	location: {
		city: 'Riyadh',
		country: 'Saudi Arabia',
		temp: 39,
	},
};

const { name, age, location } = person;
const { city, country, temp: temprature = 23 } = location;

console.log(
	`My name is ${name} and age is ${age} and living in ${city}, ${country}`
);

if (temprature && city) {
	console.log(`It's ${temprature} in ${city}`);
}

//
// Array Destructuring
//

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// Need out put like this
// A medium Coffee (hot) costs $2.50

const [itemname, , mediumPrice] = item;

console.log(`A medium ${itemname} costs ${mediumPrice}`);
