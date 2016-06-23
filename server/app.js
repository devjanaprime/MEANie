var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
var mongoose = require('mongoose');
mongoose.connect('localhost:/27017/test')
var ourSchema = new  mongoose.Schema({
name: String,
location: String
});
var ourModel = mongoose.model( 'ourModel', ourSchema );
app.get( '/', function( req, res ){
res.sendFile( path.resolve( 'views/index.html' ) );
});
app.get( '/getRecords', function( req, res ){
ourModel.find()
.then( function( data ){
res.send( data );
});
});
app.listen( 8080, 'localhost', function( req, res ){
console.log( 'listening on 8080' );
});
app.post( '/testPost', function( req, res ){
console.log( 'req.body: ' + req.body.name );
var recordToAdd={
name: req.body.name,
location: req.body.location
}
var newRecord=ourModel( recordToAdd );
newRecord.save();
});
app.use( express.static( 'public' ) );
