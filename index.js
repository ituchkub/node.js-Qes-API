const express = require('express')
const app = express()
const PORT = 4000
const BP = require('body-parser')
app.use(BP.json())
app.use(BP.urlencoded({ extended: true }))

const routes = require('./routes/route');
app.use('/', routes);


app.listen(PORT, () => {
    console.log(`API Listening on PORT ${PORT}`)
})


module.exports = app