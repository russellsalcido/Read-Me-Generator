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
    console.log();

    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
        console.log(repo)
      });

    //   const repoData = ;

    //   fs.writeFile("read-me.md", repoName, function(err) {
    //     if (err) {
    //       throw err;
    //     }

    //     console.log()
    //   });
    });
  });

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
