import DateInput from '../DateInput'
import ApodDate from '../ApodDate';
import {useState} from 'react'

function Test () {
    
  const [testDate, setTestDate] = useState('')
    const setTestDateAndLink = (formData) => {
      setTestDate(formData)
    }
    return (
        <div>
          <div><DateInput setApodDate={setTestDateAndLink} /></div>
          <div><ApodDate testDate={testDate}/></div>
        </div>
    )
}

export default Test;