const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let cart = []
let cartTotal = 0

// serve CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// endpoints
app.get('/', (req, res) => {
  res.send({ cart, cartTotal} )
})

app.post('/', (req, res) => {
  cart = req.body.cart
  cartTotal = req.body.cartTotal

  res.json({ success: true })
})


// port listening
app.listen(port, function () {
  console.log(`listening on ${port}`)
  console.log('Press CTRL + C to stop server')
})