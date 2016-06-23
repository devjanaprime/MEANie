var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
/// why do we need this????
app.use( bodyParser.json() );
var mongoose = require('mongoose');
// 27017 is default mongo port
mongoose.connect('localhost:/27017/test')
var ourSchema = new  mongoose.Schema({
  name: String,
  location: String
});
var ourModel = mongoose.model( 'ourModel', ourSchema );

// base url
app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'views/index.html' ) );
});

// get call
app.get( '/getRecords', function( req, res ){
  ourModel.find()
  .then( function( data ){
    res.send( data );
  });
});

// spin up server
app.listen( 8080, 'localhost', function( req, res ){
  console.log( 'listening on 8080' );
});

// post call
app.post( '/testPost', function( req, res ){
  console.log( 'req.body: ' + req.body.name );
  // retrieved the req.body
  // putting it into an object to be saved in the db
  var recordToAdd={
    name: req.body.name,
    location: req.body.location
  }
  // MAGIIIIIIIIIIC
  var newRecord=ourModel( recordToAdd );
  newRecord.save();
});

// static folder
app.use( express.static( 'public' ) );
