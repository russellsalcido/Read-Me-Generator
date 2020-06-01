const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
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
		.then(function (data) {
			console.log(data);
			writeFileAsync("readme.md", generateMarkdown(data)).catch(function (err) {
				console.log(err);
			});
		});
}

init()
