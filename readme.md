The purpose of this web application is to help socially awkward and shy people successfully interact in a social setting and ease anxiety, by supplying various party starting conversation topics.  This app was made using the MEAN stack (Mongoose, Express, Angular, Node.js). To use the application nothing needs to be installed.  I started off making the backend, by creating hardcoded seed data and defining the routes in express.  I used handlebars for the views.  After the backend was complete I incorporated Angular for front end. The MEAN stack was chosen because no resources or models needed to be nested so a relational database was not needed.  I think the coolest feature is the search option.  The user can use a dropdown box to search and a topic and question will automatically appear! When a new Topic and question is added, it will be ordered by the name of the topic. This was done using the orderBy filter.  

The database is connected to mLab. This was an issue that developed while deploying the app on heroku.  The solution was to host the database with mLab.  An issue that still persists that I would like to work on is the refresh button.  I was able to remove the '#' from the url using html5Mode.  However, this created an issue when with page refreshes for '/questions' and '/topics'.  A user is still able to travel to those pages, but if they do not use the back or home button and refresh they will see 'Cannot Get /'. For the future of this app I would like to think about what other features I can add, such as a news API. The point of that would be to post 'trending' news and topics and automatically update.  I would also like to do a redesign and focus on the CSS.  

User Stories
  As a user I should be able to view all of the questions that are not associated with a topic and view questions by their topics.

  As a user I should be able to create a new topic and question.

  A user should be able to search by topics.

To see screen shots of the web application please follow the following path:
  img/Screen Shot 2016-11-30 at 10.14.02 AM.png
  img/Screen Shot 2016-11-30 at 10.14.11 AM.png
  img/Screen Shot 2016-11-30 at 10.14.19 AM.png

Here is the link to the deployed app on heroku: https://small-talk-for-introverts.herokuapp.com/
