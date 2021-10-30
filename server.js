const express = require( 'express' );
const app = express();

app.get( '/', function ( req, res )
{
    res.send( 'Hello there' );
} );




// start app
const port = process.env.PORT || 3000;
app.listen( port, function ()
{
    console.log( 'App started at', port );
} );