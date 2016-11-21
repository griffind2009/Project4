var express = require('express')
var app = express()
var mongoose = require('./db/connection')
var hbs = require('hbs')
var bodyParser = require('body-parser')



var Question = mongoose.model('Question')
var Topic = mongoose.model('Topic')

app.set("view engine", "hbs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
  res.render("index")
})

app.get('/', (req, res) =>{
  Question.find({}).then((question) => {
    res.render('index', {question})
  })
})

app.get('/', (req, res) => {
  Topic.find({}).then((topic) => {
    res.render('index', {topic})
  })
})

// app.get('/:question', (req,res) => {
//   res.send(req.params.question)
// })

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
