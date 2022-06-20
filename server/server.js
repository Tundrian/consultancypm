// Import Packages
const express = require('express')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const colors = require('colors')
// Import local files
const schema = require('./schema/schema')
const connectDB = require('./config/db')
// Variable Declarations
const app = express()
connectDB()
const PORT = process.env.PORT  || 5000

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.underline.bold))
