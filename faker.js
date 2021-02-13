// https://www.npmjs.com/package/faker
const faker = require('faker');

let options = process.argv;
options.splice(0, 2); // trim commands

// build command
let cmd = '';
cmd += 'faker.';
for (let i = 0; i < options.length; i++) {
	if (i === options.length - 1) {
		cmd += `${options[i]}()`;
	} else {
		cmd += `${options[i]}.`;
	}
}

// execute command
try {
	console.log(eval(cmd));
} catch (err) {
	console.log('>>> INVALID COMMAND <<<');
	console.log(`Try "faker --help" for a list of commands`);
}
