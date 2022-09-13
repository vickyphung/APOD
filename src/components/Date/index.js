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
          <DateInput setApodDate={setTestDateAndLink} />
          <ApodDate testDate={testDate}/>
        </div>
    )
}

export default Test;