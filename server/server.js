const express = require('express');
const morgan = require('morgan');

// to access Env variables
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');

// Option object to specify the path to our config file
// this will set env variables in Node process module
dotenv.config({ path: './config.env' });

// this must come after above env file to access files globally
const app = express();

// note - by default, env variable is set to development in express
// console.log(app.get("env")); // development

// note - node js also sets env variable by default
// console.log(process.env);
// console.log(process.env.NODE_ENV); our custom defined env variable

if (process.env.NODE_ENV === 'development') {
  // to debug, 'arg' is how we want the logging to look like in console - dev mode
  app.use(morgan('dev'));
}

// middleware

// Express does not put Body data/object in the request by default
// We have to use Middleware to have Request Body Object available
app.use(express.json());

// endpoint/resource name - as noun, convention is to use plural
// http method - 'registerUser' as verb, action
// app.get('/api/v1/users/registerUser', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     data: 'you hit the register endpoint',
//   });
// });

app.use('/api/v1/', authRoutes);

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});
