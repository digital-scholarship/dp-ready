var pgp = require('pg-promise')();
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

// add query functions

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
  db.one('select * from response where id = $1', resID)
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
    // stub
   }

function updateResponse(req, res, next) {
    // stub
   }

function getResponsesBy(req, res, next) {
    // stub
   }
module.exports = {
  getAllResponses: getAllResponses,
  getSingleResponse: getSingleResponse,
  createResponse: createResponse,
  updateResponse: updateResponse,
  getResponsesBy: getResponsesBy
};
