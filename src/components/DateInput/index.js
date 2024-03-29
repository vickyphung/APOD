import { useState } from "react";
import "../../style.css";
import ApodDate from "../ApodDate";

//set the formData as a prop to send to ApodDate component
function DateInput(props) {
  //set today's date as default in the form type=date input
  const date = new Date();
  const inputDate = date.getDate();
  date.setDate(inputDate);
  const defaultValue = date.toLocaleDateString("en-CA");

  //set up a variable for formData
  const [formData, setFormData] = useState("");

  //handleChange function sets formData as whatever you click in the calendar
  //event is when we click on the date in calendar
  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  //sets formData to todays date as a default
  // on handleSubmit, formData is set as the prop
  const handleSubmit = (event) => {
    setFormData(defaultValue);
    event.preventDefault();
    props.setApodDate(formData);
  };

  return (
    <div className="date">
    
        <h1><span className="apodDateHeader">PICK A DAY</span></h1>

       
        <form name="date-input" onSubmit={handleSubmit}>
          <input
            className="dateInput"
            type="date"
            defaultValue={defaultValue}
            onChange={handleChange}
          />

          <input className="dateSubmit" type="submit" value="Submit" />
        </form>
    
    

 
        <ApodDate />
  
    </div>
  );
}

export default DateInput;
