var express = require( 'express' );
var router = express.Router();
var mongoose = require( 'mongoose' );
var Messages = require( '../models/messages' );

mongoose.connect( 'localhost:/27017/canopusMessages' );

router.get( '/', function( req, res ){
    console.log( 'in messagesGet' );
    Messages.find({}, function( err, response ){
        if( err ){
            console.log( 'find not happening' );
            res.sendStatus( 500 )
        }
        else{
            res.send( response );
        }
    });
}); // end messages get

router.post( '/', function( req, res ){
    console.log( 'in messages post:', req.body );
    // write this new message to DB
    var newBoop = new Messages( { from: req.body.from, message: req.body.message } ); 
    newBoop.save( function( err ){
        if( err ){
            console.log( 'no worky' );
            res.sendStatus( 500 );
        }
        else{
            res.sendStatus( 200 );
        }
    });
}); //end messages post

module.exports = router;