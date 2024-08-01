import React from 'react'
import Information from '../components/information/InformationContent'
import HomeButton from '../components/home-button/HomeButton'


const Info = ({ buttonStyles, homeIconStyle }) => {
    return (
        <div className="information">
            <HomeButton buttonStyles="info-home" homeIconStyle="info-home-icon"/>
            <Information />
        </div>
    )
}

export default Info