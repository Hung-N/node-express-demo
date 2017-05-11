/*

 step 1: create project 'yarn init'
 step 2: add express package 'yarn add express'
 step 3: create 'app.js'
 step 4: require express in 'app.js'
 step 5: create a get route to server `/helloWorld`
 step 6: have server listen on PORT

 */

 const express = require('express'); //require is a function that is part of nod that is used to load modules.

 const app = express();


// when user visits 'http://localhost:4545/helloWorld VERB: Get' a call back function is called (request & response are objects)
 app.get('/helloWorld', (request, response) => {
   // this callback (which receives a request & response) is usually named `Middleware`
   // the arguments passed to this callback are in order: request, response, next
   // - request: an object that contains the entire message from the client (usually a browser)
   // - response: an object that contains the message our server will reply with back to the client

   response.send('Hello World!');
 });

 const PORT = 4545;
 app.listen(PORT, () => { console.log(`💻 Server listening on http://localhost:${PORT}`)})
