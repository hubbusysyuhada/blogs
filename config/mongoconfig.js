const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const url = "mongodb+srv://admin:admin@cluster0.bou4a.mongodb.net/test";
// const url = "mongodb://localhost:27017";

var _db;

module.exports = {

  database: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('blogs');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};