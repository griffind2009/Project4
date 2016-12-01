var mongoose = require('mongoose')
var db = mongoose.connection
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/smalltalk';
// var url = require('url')




db.on('error', err => {
  console.log(err)
})

db.once('open', () => {
  console.log("connected to mongodb")
})
MongoClient.connect(url, function (err, db) {
if (err) {
  console.log('Unable to connect to the mongoDB server. Error:', err);
} else {
  console.log('Connection established to', url);
}
})


var TopicSchema =  mongoose.Schema({
  name: String,
  question: String,
})

var QuestionSchema = mongoose.Schema({
  question: String,
  topics: [TopicSchema]
})

 mongoose.model('Question', QuestionSchema)
 mongoose.model('Topic', TopicSchema)

 mongoose.Promise = global.Promise

 mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/smalltalk')

module.exports = mongoose
