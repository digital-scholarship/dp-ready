var pgp = require('pg-promise')();
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString); // 'postgres://cessda@localhost/dpready'


function getAllResponses(req, res, next) {
  db.any('select * from response')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL responses'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleResponse(req, res, next) {
  var resID = parseInt(req.params.id);
  db.one('select * from response where uid = $1', resID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE response'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createResponse(req, res, next) {

    var insert = pgp.helpers.insert(req.body, null, 'response');

    db.none(insert)
    .then(function(){
        res.status(200)
            .json({
                status: 'success',
                message: 'inserted one response'
            });
    })
    .catch(function(err){
        return next(err);
    });
}

function updateResponse(req, res, next) {
    // stub
   }

function getResponsesBy(req, res, next) {
    // stub
   }


// returns a pretty much unique hash
function getUid(){

}
module.exports = {
  getAllResponses: getAllResponses,
  getSingleResponse: getSingleResponse,
  createResponse: createResponse,
  updateResponse: updateResponse,
  getResponsesBy: getResponsesBy
};
