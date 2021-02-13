// https://www.npmjs.com/package/faker
const faker = require('faker');

// function for generating fakeUsers as a JSON string
function fakeUsers(iterations) {
	const users = [];
	for (let i = 0; i < iterations; i++) {
		users.push(faker.helpers.userCard());
	}
	console.log(JSON.stringify(users));
}

// calling function for number of iterations passed in as option or one iteration if no options passed
if (process.argv.length > 2) {
	fakeUsers(process.argv[2]);
} else {
	fakeUsers(1);
}
