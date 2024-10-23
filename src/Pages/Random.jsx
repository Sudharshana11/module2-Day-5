import React, { useState } from "react";
import axios from 'axios'

function Random() {
    const [user,setUserDate] = useState(null)

    const URL = "https://randomuser.me/api/?results=1"
    function fetchAPI(){
        axios.get(URL)
        .then(response => setUserDate(response.data.results[0]))
        .catch(error => console.log("error in fetching the data",error) )
    }
console.log(user);

return(
    <div>
        <h1>Random user details : </h1>
        <h2></h2>
        <button onClick={fetchAPI}>Click here to load results</button>
    </div>
)

}
