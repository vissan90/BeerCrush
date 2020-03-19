import React from 'react';

import classes from './Beer.module.css';

const beer = (props) => {

    let beerType = "";
    let beerImage = "";

    switch(props.type){
        case(1):
            beerType = "Heiniken";
            beerImage = "https://static.systembolaget.se/imagelibrary/publishedmedia/zm43kk01575uhny3aljl/1132.jpg";
            break;
        case(2):
            beerType = "Mariestad";
            beerImage = "https://static.systembolaget.se/imagelibrary/publishedmedia/xptnj6vyotc27o0ssksp/186120.jpg";
            break;
        case(3):
            beerType = "Stella";
            beerImage="https://static.systembolaget.se/imagelibrary/publishedmedia/bstknov2iw2fhzrjdky5/17905.jpg";
            break;
        case(4):
            beerType = "Falcon";
            beerImage = "https://static.systembolaget.se/imagelibrary/publishedmedia/bvooosboj5sfkka8y63b/980.jpg";
            break;
        default:
            beerType = "Mellerud";
            beerImage="https://static.systembolaget.se/imagelibrary/publishedmedia/y5wh373k6to2ibjoc5lp/24388960.jpg";
    }

    return(
        <div className={classes.Beer}>
            {/* <p>{beerType}</p> */}
            {/* <img alt="notfound" src={beerImage} /> */}
        </div>
    );
}

export default beer;