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

// unlike app.get, app.use will work for all HTTP verbs, if we do not give a URL (string) for the first argument, it will match for every URL
 app.use((request, response, next) => {
   console.log(`${request.method} - ${request.path} - ${new Date().toString()}`)
   // next(); is a callback function and third argument of the middleware callback, tells express to move on the the next middleware
   next();
 })

// when user visits 'http://localhost:4545/helloWorld (VERB: get)' a call back function is called (request & response are objects)
 app.get('/helloWorld', (request, response) => {

   // this callback (which receives a request & response) is usually named `Middleware`
   // the arguments passed to this callback are in order: request, response, next
   // - request: an object that contains the entire message from the client (usually a browser)
   // - response: an object that contains the message our server will reply with back to the client



   response.send('Yo!');
 });

 const PORT = 4545;
 app.listen(PORT, () => { console.log(`💻 Server listening on http://localhost:${PORT}`)})
