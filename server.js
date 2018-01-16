const express = require('express' );
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

var db = require('./queries');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// ************************************
// ROUTES
// ***********************************//

app.get('/', function(rq, res){
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/answers/:id', function (rq, res){
    // send answers for an id 
    res.send('report' + rq.params.id)
})

app.get('/questions', function(rq, res){
    res.sendFile(__dirname + '/dist/data/cessda.json');
})

app.get('/api/responses', db.getAllResponses);
app.get('/api/responses/:id', db.getSingleResponse);
app.post('/api/responses', db.createResponse);
app.put('/api/responses', db.updateResponse);
app.get('/api/responses/by/:q', db.getResponsesBy);

// handle 404 etc
app.get('*', function(req, res){
      res.send('what???', 404);
});

// Start the server
app.listen(8080, function (){
    console.log('listening on port 8080')
});
