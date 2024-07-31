import React from 'react'
import DashboardGrid from '../components/grid-items/DashboardGrid'
import Footer from '../components/footer/Footer'
import '../components/grid-items/DashboardGrid.css'

const Home = ({ color }) => {
    return (
        <div className="dash-holder">
            <DashboardGrid />
            <Footer color={color}/>
        </div>
    )
}

export default Home