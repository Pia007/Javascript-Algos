import React from 'react';
import DashCards from './DashCards';
// import './DashboardGrid.css';

const DashboardGrid = () => {
    return (
        // <div className="dash-holder">
            <div className="dash-grid-holder">
                <div className="dashboard">
                    <DashCards />
                </div>
            </div>
        // </div>
    )
}

export default DashboardGrid;
