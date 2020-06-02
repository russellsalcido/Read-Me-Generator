const util = require("util");
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./util/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
	return inquirer.prompt([
	{
		type: "input",
		name: "username",
		message: "Enter your GitHub username:",
	},
	{
		type: "input",
		name: "title",
		message: "Enter the title of your project:",
	},
	{
		type: "input",
		name: "description",
		message: "Describe your project:",
	},
	{
		type: "input",
		name: "installation",
		message: "What are the steps required to install your project?:",
	},
	{
		type: "input",
		name: "usage",
		message: "Provide instructions and examples for use.:",
	},
	{
		type: "input",
		name: "credits",
		message:
			"List your collaborators, if any, with links to their GitHub profiles. Include third-party assets and tutorials you utilized:",
	},
	{
		type: "input",
		name: "tests",
		message:
			"Go the extra mile and write tests for your application. Then provide examples on how to run them:",
	},
	])
}

(function ({ username }) {
	const queryUrl = `https://api.github.com/users/${username}`;

	axios.get(queryUrl).then(function (res) {
		let fullName = res.data.map(function (name) {
			return answers;
		})
		let picture = res.data.map(function (avatar_url) {
			return answers;
		})
		let email = res.data.map(function(email) {
			return answers;
		})
	});
})

promptUser()
	.then(function (answers) {
		const md = generateMarkdown(answers);
			return writeFileAsync("read-me.md", md);
	})
	.then(function() {
		console.log("Success!")
	})
	.catch(function (err) {
		console.log(err);
	});
