import React from 'react'

export const getCurrentPosition = async () => {
   
    try {
        navigator.geolocation.getCurrentPosition(data => {
            return data
        }, (error => console.log(error)))
      
       
 
    } catch (error) {
       console.log('error', error);
    }
 }