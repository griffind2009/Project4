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
//
// app.use(express.static("public"))
app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
  res.render("index")
})

app.get('/questions', (req, res) =>{
  Question.find({}).then((questions) => {
    res.render('show-question', {questions})
  })
})

app.get('/topics', (req, res) => {
  Topic.find({}).then((topics) => {
    res.render('show-topic', {topics})
  })
})

app.post('/topics', (req, res) => {
  // res.json(req.body)
  Topic.create(req.body.topic).then((topic) => {
  res.redirect("/topics")
  console.log(req.body.topic)
})
})

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
