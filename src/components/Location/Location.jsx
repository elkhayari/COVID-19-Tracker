
import React, { useState, useEffect} from 'react';

const Location = ({handleCurrentLocation}) => {


    return(
        <div>
            <h3>Current location </h3>
            <span onClick={handleCurrentLocation()}>
               
            </span>
        </div>
    )
}

export default Location
