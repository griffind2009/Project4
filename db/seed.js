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
Question.create({question: "Are there any apps on your phone that you can’t live without?"})
Question.create({question: "If you could only watch one genre of movies for the rest of your life, what would it be?"})
Question.create({question: "What’s a book you hated that everyone else loved, and vice versa?"})
Question.create({question: "Do you have any podcast suggestions for my commute?"})
Question.create({question: "What is the last movie you went to the theater to see?"})
Question.create({question: "What’s the last movie that made you cry? Or laugh aloud?"})
Question.create({question: "Who is your favorite person to follow on Social Media?"})
Question.create({question: "What’s your favorite thing to do around here on the weekends?"})
Question.create({question: "If you could have any type of animal for a pet, what would it be?"})
Question.create({question: "What would be your ideal superpower?"})
Question.create({question: "Do you prefer day or night? Why?"})

Topic.create({name: "Travel", question: "What’s the best “hidden gem” around here?"})
Topic.create({name: "Travel", question: "If you could fly anywhere for free, where would you go?"})
Topic.create({name: "Travel", question: "What’s the coolest road trip you’ve ever been on?"})
Topic.create({name: "Travel", question:"Where’s the last place you traveled? What did you do there?"})
Topic.create({name: "Travel", question: "Do you prefer action-packed vacations or relaxing on the beach?"})
Topic.create({name: "Travel", question: "What’s the next trip you have planned?"})
Topic.create({name: "Life", question: "What’s the best piece of advice you’ve ever received?"})
Topic.create({name: "Life", question: "What was your favorite extracurricular in elementary school?"})
Topic.create({name: "Life", question: "Do you have any hidden talents or surprising hobbies?"})
Topic.create({name: "Life", question: "Where did you live before this?"})
Topic.create({name: "Life", question: "What did you think you were going to be growing up?"})
Topic.create({name: "Work", question: "Would you rather work four 10-hour days or five eight-hour days?"})
Topic.create({name: "Work", question: "If you weren’t working here, what would you probably be doing right now?"})
Topic.create({name: "Work", question: "How did you become a [job title]?"})
Topic.create({name: "Work", question: "If you were guaranteed to be successful, what job would you want?"})
Topic.create({name: "Work", question: "What was your first job? Did you like it?"})
Topic.create({name: "Food", question: "What is your favorite food"})
Topic.create({name: "Food", question: "Do you have a favorite restaurant"})
Topic.create({name: "Food", question: "What is your favorite meal of the day?"})
