import React, { useEffect, useState } from 'react';
import './css/style.css';

const Weatherapp = () =>{
    const [city ,setCity] = useState("");
    const [search,setSearch] = useState("Gurgaon");

    

    useEffect(() =>{
        const fetchApi = async() =>{
            const  url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&lang=ar&appid=a5cff0d2cfb11b701dd87952ac2519bb`
            const response = await fetch(url);
            // console.log(response);
            const resJson =  await response.json();
            console.log(resJson);
            setCity(resJson.main)
        }
        fetchApi();
    },[search]);

    return(
        <div className ='box'>      
            <div className='inputData'>           
                <input 
                type='search' 
                className ='inputFiled'  
                onChange = { (e) => {setSearch(e.target.value)
                }}            
                /> 
                <div id="wethericon"><i className="fas fa-cloud-sun"></i></div> 
            </div>
            {
                !city ? (
                    <h1 id='z'>CHECK WEATHER.....</h1>
                ):(
                <div>
                    <div className='info'>
                    <h2 className="location">
                    <i className="fas fa-street-view"></i>{search}
                    </h2> 
                    <h1 className = 'temp'>
                    {city.temp}°
                    </h1> 
                    <h3 className="tempmin_max"> 
                    Min: {city.temp_min}°  |  Max : {city.temp_max}°
                    </h3> 
                    </div>
                </div>
                )}
    </div>
);
}
export default Weatherapp;