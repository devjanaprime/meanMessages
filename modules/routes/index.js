let express = require( 'express' );
let router = express.Router();
let path = require( 'path' );

router.get( '/', ( req, res ) => {
    res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base url

module.exports = router;