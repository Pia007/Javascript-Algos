import React, { useState } from 'react'
import HomeButton from '../components/HomeButton'


const Info = () => {
    // const setStyles = () => {
    //     console.log('setStyles')
    // }
    const [styles, setStyles] = useState({
    color: '#4475e9',
    borderColor: '#4475e9',
    backgroundColor: '#4475e9',
});

    return (
        <div className='container' style={{ backgroundColor: styles.backgroundColor }}>
            Info
            <HomeButton styles={{ color: 'red', borderColor: 'red', backgroundColor: 'lightgray' }} setStyles={setStyles}/>
        </div>
    )
}

export default Info