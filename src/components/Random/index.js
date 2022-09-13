
import RandomBtn from '../RandomBtn'
import ApodRandom from '../ApodRandom';
import {useState} from 'react'

function Random () {
    
    const [randomButton, setRandomButton] = useState('')

    const setRandomButtoneAndLink = (randomInput) => {
      setRandomButton(randomInput)
    }
   
    return (
        <div className='random'>
            <div><RandomBtn setRandom={setRandomButtoneAndLink}/></div>
            <div><ApodRandom randomButton={randomButton}/></div>
        </div>
    )
}

export default Random;