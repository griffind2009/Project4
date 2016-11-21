var mongoose = require('./connection')


var Question = mongoose.model("Question")
var Topic = mongoose.model("Topic")

Question.remove({}, err => {
  if (err){
    console.log(err)
  }
})

Topic.remove({}, err => {
  if (err) {
    console.log(err)
  }
})

Question.create({question: "Are you reading any good books right now? I’d love some recommendations. How about shows?"})
Question.create({question: "What’s the weirdest thing you’ve ever eaten?"})
Question.create({question: "What are the best cheap eats around here?"})

Topic.create({name: "Travel", question: "What’s the best “hidden gem” around here?"})
Topic.create({name: "Life", question: "What’s the best piece of advice you’ve ever received?"})
Topic.create({name: "Work", question: "Would you rather work four 10-hour days or five eight-hour days?"})
// process.exit()

// var questions = [q1, q2, q3]
// var topics = [topic1, topic2, topic3]
