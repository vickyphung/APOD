
import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";

const ApodDate = (props) => {
    const [apodData, setApodData] = useState({});

    useEffect(()=>{
        const fetchData = async () => {
            if (props.testDate) {
                console.log ("TEST DATE FROM FORM SUCCESSFULLY PASSED")
                console.log (props.testDate)
                const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&date=${props.testDate}`)
                setApodData(response.data)
            } 
        }
        fetchData();
    }, [props.testDate])
            
    console.log(apodData)

    return (
        <div className="pickDateContainer">
            <div className='apodTitle'><h1>{apodData.title}</h1>
                <span className='apodDate'><h2>{apodData.date}</h2></span>
            </div>
            <div className='apodImg'>
                <a href={apodData.hdurl}>
                    <img src={apodData.url} 
                        className='apodImg'
                        width="auto"
                        alt=""
                    />
                </a>
            </div>
        <div className='apodDetails'>
            <p className='apodExplanation'>
                {apodData.explanation} 
            </p>
        </div>
        </div>
    )
}
export default ApodDate; 