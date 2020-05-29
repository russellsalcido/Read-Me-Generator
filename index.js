const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
        });
    });    
}); 

// const questions = [
//     {
//         name: "Project Title"
//         message:

//     }

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
