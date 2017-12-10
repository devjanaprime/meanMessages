let express = require( 'express' );
let router = express.Router();
let mongoose = require( 'mongoose' );
let Messages = require( '../models/messages' );

mongoose.connect( 'localhost:/27017/canopusMessages' );

router.get( '/', ( req, res ) => {
    console.log( 'in messagesGet' );
    res.send( 'beep' );
}); // end messages get

router.post( '/', ( req, res ) => {
    console.log( 'in messages post:', req.body );
    res.send( 'boop' );
}); //end messages post

module.exports = router;