// the starting point for the front end
//

require( 'bootstrap/dist/css/bootstrap.css')
require( 'bootstrap/dist/css/bootstrap-theme.css')
require( '../css/style.css')
require('backbone')

questions = require('./questions_model.js')
questionView = require('./views/question_view.js')

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



