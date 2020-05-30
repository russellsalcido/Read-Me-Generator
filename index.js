const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer.prompt(
  {
  type: "input",
  name: "username",
  message: "Enter your GitHub username:"
  },
  {
  type: "input",
  name: "title",
  message: "Enter the title of your project:"
  },
  {
  type: "input",
  name: "description",
  message: "Describe your project:"
  },
  {
  type: "input",
  name: "table of contents",
  message: "Enter your GitHub username:"
  },
  {
  type: "input",
  name: "installation",
  message: "What are the steps required to install your project?:"
  },
  {
  type: "input",
  name: "usage",
  message: "Provide instructions and examples for use.:"
  },
  {
  type: "input",
  name: "credits",
  message: "List your collaborators, if any, with links to their GitHub profiles. Include third-party assets and tutorials you utilized:"
  },
  {
  type: "input",
  name: "licence",
  message: "List your collaborators, if any, with links to their GitHub profiles. Include third-party assets and tutorials you utilized:"
  },
  {
  type: "input",
  name: "contributing",
  message: "List your collaborators, if any, with links to their GitHub profiles. Include third-party assets and tutorials you utilized:"
  },
  {
  type: "input",
  name: "tests",
  message: "Go the extra mile and write tests for your application. Then provide examples on how to run them:"
  },
)
 console.log()
  

  // .then(function({ username }) {
  //   const queryUrl = `https://api.github.com/users/${username}`;

  //   axios.get(queryUrl).then(function(res) {
  //       const name = (function(data) {
  //           return name;
  //       console.log(res.data.name)
  //       console.log(res.data.email)
  //       console.log(res.data.avatar_url)


  //     });
     
      

    //   fs.writeFile("read-me.md", repoNamesStr, function(err) {
    //     if (err) {
    //       throw err;
    //     }

    //   
    // });
//     });
// });
