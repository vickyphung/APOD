import {useState} from 'react'
import '../../style.css'

//set the formData as a prop to send to ApodDate component
function RandomBtn(props) {



  //set up a variable for formData
    const [formData, setFormData] = useState('')

  //handleChange function sets formData as whatever you click in the calendar
  //event is when we click on the date in calendar
    const handleChange = (event) => {
      setFormData(event.target.value)

    }

  //sets formData to todays date as a default
  // on handleSubmit, formData is set as the prop
    const handleSubmit = (event) => {
      event.preventDefault()
      props.setRandom(formData)
    }

  return (
    <div className='pickDate'>
    <div className='apodDateHeader'>  
      <p className='apodDateHeadTitle'>RANDOM # OF POSTS</p>
    </div>
    <div className='formInput'>
        <form name="date-input" onSubmit={handleSubmit}>

            <input className="randomInput" type="text" placeholder='#'  onChange={handleChange} />
          <input className="dateSubmit" type="submit" value="Submit" />
        </form>
    </div>
  </div>
  )

  }

 
  export default RandomBtn