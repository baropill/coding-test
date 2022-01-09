// launch modules
const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 8060

app.set('view engine', 'ejs')
app.use(express.static('public'))

// directory settings
app.get('/', (req, res) => { res.render('index') })

// run server
app.listen(port, () => { console.log(`Server is running at http://localhost:${port}...`) })