// the starting point for the front end
//

require( 'bootstrap/dist/css/bootstrap.css')
require( 'bootstrap/dist/css/bootstrap-theme.css')
require( '../css/style.css')
require('jquery')
require('backbone')

//models
Sections = require('./models/sections.js')
Questions = require('./models/questions.js')
User = require('./models/user.js')
Crowd = require('./models/crowd.js')

//views
questionView = require('./views/question.js')


var questions = new Questions()
questions.url = '/questions/'    

//var sections = new Sections([{title: 'Technical', 'questions': questions}])
var sections = new Sections(questions)


question = null

questions.fetch({
    success: function(){
         q = questions.at(0)
         console.log(q)
         q = q.getRelative(1)
         console.log(q)    
         qView = new questionView({model: q});
         console.log(qView.el)
             q = q.getRelative(1)
    }
})

// needs to happen once when the app starts
var user = new User();

user.listenTo(questionView, "click:answer", user.answer)

console.log(sections)
