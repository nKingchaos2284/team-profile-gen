const generateHtml = function (teamBuild) {

  console.log("Inside generated HTML");
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Builder</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Raleway&display=swap" rel="stylesheet">
  <style>
      body {
          background-image: url('/////');
          background-repeat: no-repeat;
          background-position: center;
      }

      .header {
          text-align: center;
          font-size: 46px;
          font-family: 'Montserrat', sans-serif;
          background-color: rgb(48, 191, 122);
          border: solid black;
      }
      
      .container-body {
          display: flex;
          justify-content: space-evenly;
      }
      
      .card {
          background-color: whitesmoke;
          margin-top: 3%;
          border: solid black;
          font-family: 'Raleway', sans-serif;
          padding-right: 1%;
      }
      
      .card-header {
          margin: 5%
      }

      .h2,
      .h3 {
          font-family: 'Raleway', sans-serif;
      }

      a {
          text-decoration: none;
      }        

      </style>

  </head> 
  
      <body>
      <section class="header">
          <h1>My Team</h1>
      </section>
      <section class="container-body">
      
          ${teamBuild}
          
          </section>
      </body>
      
  </html>`
}

const generateCard = function (employeeObject) {

  let roleInfo;

  if (employeeObject.class === "Manager") {
      roleInfo = `Office Number: ${employeeObject.officeNumber}`
  } else if (employeeObject.class === "Engineer") {
      roleInfo = `GitHub Username: <a href="https://github.com/${employeeObject.gitHub}">${employeeObject.gitHub}</a>`
  } else if (employeeObject.class === "Intern") {
      roleInfo = `School: ${employeeObject.school}`
  }

  return `<section class="card">
  <section class="card-header">
      <h2>${employeeObject.name}</h2>
      <h3>${employeeObject.symbol}  ${employeeObject.class}</h3>
      <hr>
  </section>
  
  <section class="card-body">
      <ul>
          <li>ID: ${employeeObject.id}</li>
          <li>Email: <a href="mailto:${employeeObject.email}">${employeeObject.email}</a></li>
          <li>${roleInfo}</li>
      </ul>
  </section>
          </section>`
}

exports.generateHtml = generateHtml
exports.generateCard = generateCard;