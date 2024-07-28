import React from 'react'
import { ALGORITHMS } from '../../shared/algos'
import DashItem from './DashItem'
import './DashboardGrid.css' 

const DashCards = () => {
    const algos = ALGORITHMS

    const algoCards = algos.map(algo => {
        return (
            <DashItem algorithm={algo} />
        )
    })

    return (
        <>
            {algoCards}
        </>
    )
}

export default DashCards