import React from 'react'
import { Link } from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBatteryHalf, faBatteryThreeQuarters  } from '@fortawesome/free-solid-svg-icons';
import './DashboardGrid.css'

const capitalizeFirstLetter = (string) => {
    if (string.includes(' ')) {
        return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    } else if (string.includes('-')) {
        // split at the replace the hyphen with a space and capitalize the first letter of each word
        return string.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
}

const DashItem = ({ algorithm }) => {
    const cardTitle = capitalizeFirstLetter(algorithm.title).toUpperCase()
    const algoName = algorithm.title.split(' ').join('-').toLowerCase()

    console.log(`algoClassName: ${algoName}`)
    const playButton = `${algoName}-btn-play`
    const algoLink = `/${algoName}`
    const playAlgoIcon = ` ${algoName}-play`
    const algoText = `${algoName}-text`

    const levelIcon = (algoName) => {
        const easy = ['isogram', 'two-sum', 'palindrome', 'spin-words', 'longest-word', 'factorialize', 'palindrome-number']
        if (algoName in easy) {
            return <FontAwesomeIcon icon={faBatteryThreeQuarters} className={algoName}/>
        } else {
            return <FontAwesomeIcon icon={faBatteryHalf} className={algoName}/>
        }
    }


    return (
        <div className={`algo-card ${algoName} `}>
            <div className="algo-info">
                <div className="title">
                    <p className="card-title">{cardTitle}</p>
                </div>
                <div className="algo-text">
                    <p className={`algo-text-info ${algoText}`}>{algorithm.description}</p>
                </div>
            </div>
            <div className="btn-holder">
                <button className="level" >
                    {levelIcon(algoName)}
                </button>
                <button className={`btn-play ${playButton}`} id={algoName} aria-label="play">
                    <Link to={algoLink}>
                        <FontAwesomeIcon icon={faPlay} size="2x" className={playAlgoIcon} />
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default DashItem