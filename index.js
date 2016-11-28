var express = require('express')
var app = express()
var mongoose = require('./db/connection')
var hbs = require('hbs')
var bodyParser = require('body-parser')



var Question = mongoose.model('Question')
var Topic = mongoose.model('Topic')

// var mykey = config.MY_KEY;

app.set("view engine", "hbs")
app.use(bodyParser.json({ extended: true }))
//
// app.use(express.static("public"))
app.use(express.static(__dirname + '/public'))

app.get("/", function(req, res){
  res.render("index");
});

app.get('/api/questions', (req, res) =>{
  Question.find({}).then((questions) => {
    // res.render('show-question', {questions})
      res.json(questions)
  })

})

app.get('/api/topics', (req, res) => {
  Topic.find({}).then((topics) => {
    // res.render('show-topic', {topics})
    res.json(topics)
  })
})

app.post('/api/topics', (req, res) => {
  // res.json(req.body)
  Topic.create(req.body.topic).then((topic) => {
    // res.redirect("/topics")
    // console.log(req.body.topic)
    res.json(topic)
  })
})


app.listen(4000, () => {
  console.log("app listening on port 4000");
});
