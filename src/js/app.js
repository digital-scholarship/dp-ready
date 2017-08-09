// the starting point for the front end
//

require( 'bootstrap/dist/css/bootstrap.css')
require( 'bootstrap/dist/css/bootstrap-theme.css')
require( '../css/style.css')
require('jquery')
require('backbone')

Questions = require('./models/questions.js')
console.log('hello')
questionView = require('./views/question.js')
console.log('hello')

questions = new Questions()
questions.url = '/questions/'    

    console.log(questions)

question = null

questions.fetch({
    success: function(){
         q = questions.at(1)
         console.log(q)
         q = q.getRelative(1)
         console.log(q)    
         qView = new questionView({model: q});
         console.log(qView.el)
             q = q.getRelative(1)
    }
})


function startApp(questions){

}

console.log(questions)    

question = questions.get('c2')

console.log(question)

//console.log(question.getRelative(1))


Sections = require('./models/sections.js')
sections = new Sections([{title: 'Technical Section', 'questions': questions}])

console.log("section: " + sections.at(0))
