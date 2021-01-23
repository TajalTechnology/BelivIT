// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~project setup~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Project Name:Book
// Developer Name:Md Tajal Islam
// Start Date:23/01/2021
// End Date:

// project configuration
const env = require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(express.json());

// database configurations
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// customize routers
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

// end-point roots
app.use('/', indexRouter)
app.use('/api', authorRouter)

// port
app.listen(process.env.PORT || 3005)