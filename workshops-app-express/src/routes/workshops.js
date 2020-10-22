const express = require( 'express' );
const path = require( 'path' );
const { sendWorkshops, sendWorkshopById } = require( '../controller/workshops' );

const router = express.Router();

router.get( '/', ( req, res ) => {
    let error, workshops;
    
    try{
        workshops = sendWorkshops();
    } catch( err ) {
        error = err;
    }

    res.render( 'workshops', {
        error,
        workshops
    });
});

router.get( '/:id', ( req, res ) => {
    let error, workshop;
    try{
        workshop = sendWorkshopById( req.params.id );
    } catch( err ) {
        error = err;
    }
    res.render( 'workshopDetails', {
        error,
        workshop
    });

    /*
    const error = new Error( 'Page is under contruction' );
    error.status = 500;

    // passing control to error handling middleware
    next( error );
    */
});

module.exports = router;