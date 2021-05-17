//----------------Generate HTML page with cards
function pageTemplate(peopleHTML) {
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>My Team Profile</title>
  </head>
  <body>
    <header>
      <!------------Header----------->
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"> My Team </a>
          </div>
        </nav>
      </div>
    </header>
    <!------------Employee Cards Container----------->
    ${peopleHTML}

      </div>
    </div>
  </body>
</html>
`;
}

module.exports = pageTemplate;