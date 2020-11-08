require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('./lib/logger/logger')
const dataBase = require('./Database/connection');

const indexRouter = require('./routes/index');


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/', indexRouter);



app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`)
})


