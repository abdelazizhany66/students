const express = require('express')
const bodyParser = require('body-parser')
const studentsRouter= require('./src/studentsRoute')

const app = express()

app.use(bodyParser.json())
app.use(express.json())
app.use('/api/v1/students',studentsRouter)

module.exports = app