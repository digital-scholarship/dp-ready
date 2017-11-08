const express = require('express' );
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

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

app.get('/stats', function (rq, res){
    // route to fetch and return stats - global average for each qn and country averages
    res.send('stats')
})

app.post('/submit', function (rq, res){
    res.send('hello workd')
        console.log('received : ' + rq.params)

        // we will call the geoip service and store country
        // a result will have an id, a base58 for short url, country, and answers
})

// handle 404 etc
app.get('*', function(req, res){
      res.send('what???', 404);
});

// Start the server
app.listen(8080, function (){
    console.log('listening on port 8080')
})
