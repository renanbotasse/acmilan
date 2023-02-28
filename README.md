# AC Milan
<div style="text-align:justify">
This is a Node.js web application that leverages the Express framework and SerpApi library to extract and display information about the next AC Milan match. The application is composed of three main files: index.js, server.js, and template.hbs.

- index.js: This file defines a getGameData() function that uses the SerpApi library to retrieve information about the next AC Milan match from a Google search. The function extracts the relevant information and passes it to a callback function.

- server.js: This sets up an HTTP server using Node.js and Express. Generated HTML page based on the template.hbs file. When a user navigates to the server's root, the server uses the getGameData() function from index.js to retrieve information about the next AC Milan match and passes it to the template.hbs template to generate the HTML content to be sent back to the user's web browser.

- template.hbs: This file defines a Handlebars template that specifies the HTML structure of the web page that the application will serve. The template includes placeholders for dynamic content that will be filled in by the server.

The app displays information about the next AC Milan match, including the teams, date and time, and the tournament. The web page also includes some basic styling to make it look nicer.


In this project, we used the following tools: Node, Express, SerApi, Handlebars, and http-server.
</div>

<img
    src="https://user-images.githubusercontent.com/101360239/221887745-e293fbec-58ca-45e0-9d7d-18d8d3830717.png" 
    alt="">
</img>
