import React from 'react'

export const getCurrentPosition = async () => {
   
    try {
        const data = await  navigator.geolocation.getCurrentPosition()
            
        console.log(data)
 
    } catch (error) {
       console.log('error', error);
    }
 }