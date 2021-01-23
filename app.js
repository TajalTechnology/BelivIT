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

// customize routers
const indexRouter = require('./routes/index')

// end-point roots
app.use('/', indexRouter)

// port
app.listen(process.env.PORT || 3005)