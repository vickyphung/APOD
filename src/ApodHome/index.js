import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../style.css'

function ApodHome(props) {

  //useState hook adds state to the function component
  //apod is the state variable
  //setApod is the function that changes that variable
  const [apod, setApod] = useState({});

  //Variable for function to show and hide APOD details
  // const [readMore, setReadMore]=useState(false);

  //useEffect hook fetches data after render
  //similar to react class lifecycle methods

  //async, await. TRY, CATCH.
  //.get api endpoint
  // include process.env in our api key in endpoint so it is able to read the .env file
  //setApod to response from the  api fetch, or...
  // ...fetching the data from our API and setting it as the new value to our data variable

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=$3BKr5C5pPpUpjvBxyMy6VaF0SKS6S2BC8m8CTol1`
      );
      setApod(response.data);
      console.log(response.data)
    };
    fetchData();
  }, [])


  return (      
      <div className='apodContent'>
    
        <div className='apodTitle'>
          <h1>{apod.title}</h1>
          <span className='apodDate'><h2>{apod.date}</h2></span>
        </div>

        <div className='apodImage'>
          <a href={apod.hdurl}>
            <img src={apod.url} 
            alt="NASA Astronomy Pic of the Day"
            className='apodImg'
            width="auto" 
            title="Click to see HD image"
            />
          </a>
        </div>

        <div className='apodDetails'>
            <p className='apodExplanation'>{apod.explanation} </p>
        </div>

  </div>  
  )
};

export default ApodHome;