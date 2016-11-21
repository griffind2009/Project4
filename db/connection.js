var mongoose = require('mongoose')
var db = mongoose.connection

db.on('error', err => {
  console.log(err)
})

db.once('open', () => {
  console.log("connected to mongodb")
})


var TopicSchema =  mongoose.Schema({
  Name: String,
  Question: String,
})

var QuestionSchema = mongoose.Schema({
  Question: String,
  topics: [TopicSchema]
})

 mongoose.model('Question', QuestionSchema)
 mongoose.model('Topic', TopicSchema)

 mongoose.Promise = global.Promise

 mongoose.connect('mongodb://localhost/smalltalk')

module.exports = mongoose
