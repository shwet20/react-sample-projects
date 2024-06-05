import React from 'react';
import axios from "axios";

const Apimethods = async(type,url) => {
    if (type==="get"){
        try {
            const response = await axios.get(url);
            return (response.data.data)
          } catch (error) {
            console.log(error);
          }
    }    
};

export  {Apimethods};