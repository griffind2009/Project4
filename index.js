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

app.use(express.static(__dirname + '/public'))

app.get("/", function(req, res){
  res.render("index");
});

app.get('/api/questions', (req, res) =>{
  Question.find({}).then((questions) => {
      res.json(questions)
  })

})

app.get('/api/topics', (req, res) => {
  Topic.find({}).then((topics) => {
    res.json(topics)
  })
})

app.post('/api/topics', (req, res) => {
  Topic.create(req.body).then((topic) => {
    res.json(topic)
  })
})


app.listen(4000, () => {
  console.log("app listening on port 4000");
});
app.listen(process.env.PORT || 4200)
