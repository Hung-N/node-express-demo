/*

 step 1: create project 'yarn init'
 step 2: add express package 'yarn add express'
 step 3: create 'app.js'
 step 4: require express in 'app.js'
 step 5: create a get route to server `/helloWorld`
 step 6: have server listen on PORT

 */

const express = require('express'); // require is a function that is part of nod that is used to load modules.
const logger = require('morgan'); // http logger package
const home = require('./routes/home'); // importing home.js
const posts = require('./routes/posts');
const bodyParser = require('body-parser'); // middleware used to transform data into usable objects
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

/*
// unlike app.get, app.use will work for all HTTP verbs, if we do not give a URL (string) for the first argument, it will match for every URL
 app.use((request, response, next) => {
   console.log(`${request.method} - ${request.path} - ${new Date().toString()}`)
   // next(); is a callback function and third argument of the middleware callback, tells express to move on the the next middleware
   next();
 })
 */

 // configure express app to use the ejs templating engine for our app's views
app.set('view engine', 'ejs');


app.use(logger('dev')); //using morgan middleware to log
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false})); // will return middleware that will transform the raw data of the request into a javascript object that will be assigned to 'req.body'
app.use(cookieParser());
app.use((req, res, next) => {
  const {cookies} = req;
  // ☝️ const cookies = req.cookies;
  console.log('🍪🍪🍪🍪', cookies);
  next();
})

app.use('/posts', posts);
app.use('/', home);

// when user visits 'http://localhost:4545/helloWorld (VERB: get)' a call back function is called (request & response are objects)
app.get('/helloWorld', (request, response) => {

   // this callback (which receives a request & response) is usually named `Middleware`
   // the arguments passed to this callback are in order: request, response, next
   // - request: an object that contains the entire message from the client (usually a browser)
   // - response: an object that contains the message our server will reply with back to the client





// hi hung :)







  response.send('Yo!');
});

/*
app.get('/', (request, response) => {
   // use '.render' instead of '.send' when you want to show a view from your views folder in the browser
  response.render('index');
})
*/

const PORT = 4545;
app.listen(PORT, () => { console.log(`💻 Server listening on http://localhost:${PORT}`)})
