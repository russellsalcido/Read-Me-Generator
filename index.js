const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt(
    {
    message: "Enter your GitHub username:",
    name: "username"
    },
  )
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
        const name = res.data.name(function(name) {
            return name;
        console.log(res.data.name)
        console.log(res.data.email)
        console.log(res.data.avatar_url)


      });
     
      

    //   fs.writeFile("read-me.md", repoNamesStr, function(err) {
    //     if (err) {
    //       throw err;
    //     }

    //   
    // });
    });
});
