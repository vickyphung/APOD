import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios'

 function ApodRandom(props) {
  const [movies, setMovies] = useState([]);

  console.log("i'm here")

  useEffect(()=>{
    const fetchData = async () => {
        if (props.randomButton) {
            console.log ("TEST DATE FROM FORM SUCCESSFULLY PASSED")
            console.log (props.randomButton)
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&count=${props.randomButton}`)
            setMovies(response.data)
        } 
    }
    fetchData();
}, [props.randomButton])



console.log(movies)

  return (
    <div id="ran" className="randomContainer">

      <ul className="randomUL">
        {movies.map((movie, date) => (
          <div key={date} className="randomItem">
              <h2><span className="dateTitle">{movie.title}</span> </h2>
              <p className="ranDate">{movie.date}</p>
    
          <div>
            <a href={movie.hdurl}>
              <img src={movie.url} 
                alt="NASA Astronomy Pic of the Day"
                className='randomImg'
                width="auto" 
                title="Click to see HD image"
              />
            </a>
          </div>
        </div>
        )
        )}
      </ul>
   

    </div>
  );
}


export default ApodRandom