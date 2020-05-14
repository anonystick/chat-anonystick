const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.static('public', {'extensions': ['jsx']} ));

// app.use(function(req, res, next) {
//      console.log('check proto>>>', req.secure, req.protocol, req.get('x-forwarded-proto'), req.headers['x-forwarded-proto'])
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))