// the starting point for the front end
//

require( 'bootstrap/dist/css/bootstrap.css')
require( '../css/style.css')
require('backbone')

questions = require('./question.js')

console.log('hello')
console.log(questions)

questions.fetch()

console.log(questions)    

