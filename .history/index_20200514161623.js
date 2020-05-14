const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.static('public', {'extensions': ['jsx']} ));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))