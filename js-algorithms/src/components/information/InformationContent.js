import React from 'react'
import './Information.css'

const Information = () => {
    return (
        <>
            <div className="info-content">
                <h2 className="subtitle">
                    What is a Javascript Algorithm?
                </h2>
                    <p className="info-text">
                        JavaScript(JS) is a popular scripting language that is used to create interactive web pages. There is much more to JS,
                        but, for the purpose of this site, I am going to stop right there. An algorithm 
                        is a set of instructions or steps that are executed in a certain order to accomplish a specific task.
                        Thus, a JavaScript algorithm is a set of instructions written in JavaScript. 
                    </p>
                <h2 className="subtitle">
                    Why I made this site?
                </h2>   
                    <p className="info-text">
                        As a Frontend Developer, actually a brand new one, having a solid understanding of JavaScript is crucial.
                        JS is the core programming language. There is no way to avoid it, plain and simple. However,
                        it is not always easy to grasp. In fact, like all programming languages, the learning process is ongoing. And, the more 
                        you practice, the more you learn. The idea for this site was born out of weekly coding challenges hosted by the bootcamp
                        that I was enrolled in. I started accompanying each challenge with a simple dashboard that would help me to learn, improve and visualize 
                        how the algorithm would work. Then, I started brainstorming about the functionality, aesthetics and accessibility of the dashboard. And then it was live! 
                    </p>
                    
                <h2 className="subtitle">
                    How to Use this Site?
                </h2>
                
                <p className="info-text">
                    If you are reading this, you have already found the "info" button.
                </p>
                    <h3 className="info-subtitle">
                        Cards
                    </h3>
                        <p className="info-text">
                            The landing page has a series of cards. Each card represents an algorithm.
                            The level of difficulty is indicated by a battery icon in the lower left corner.
                            A battery that is 3/4 full represents an easy algorithm. While a 1/2 full battery indicates an intermediate/medium difficulty. A 1/4 full and an empty battery represent hard and advanced; respectively. As of now, I have only implemented easy and medium algorithms.
                            Each card has a "play" button in the lower right corner that opens an interactive dashboard.
                            {/* <div className="info-img-holder">
                                <img src="assets/images/sample-cd.png" alt="sample card image" className="sample-image card-img" />
                            </div> */}
                        </p>
                    <h3 className="info-subtitle">
                        Dashboard
                    </h3>
                        <p className="info-text">
                            Each dashboard has a home button, a simple instruction, user input fields,
                            and a button to run the algorithm. The inputs automatically reset 2.5 - 5 seconds after the algorithm runs. On the right side of the dashboard, in the desktop view,
                            a pdf file of the algorithm is displayed. At the bottom of the pdf, there is a button
                            that will download the pdf file. In the mobile view, the pdf file is note displayed.
                        </p>
                        {/* <div className="info-img-holder">
                            <img src="assets/images/sample-dash.png" alt="sample dashboard image" className="sample-image dash-img" />
                        </div> */}
                <h2 className="subtitle">
                    Resources
                </h2>
                <ul className="resources-list">
                    <li className="resources-item">
                        Bootcamp: 
                        <a className="resources-links" href="https://www.reskillamericans.org/" alt="link to Reskill Ammericans Bootcamp">Reskill Americans</a>
                        &
                        <a className="resources-links" href="https://www.freeCodeCamp.org/" alt="link to free code camp Bootcamp">freeCodeCamp</a>  
                    </li>
                    <li className="resources-item">
                        Challenges: 
                        <a className="resources-links" href="https://www.leetcode.com/" alt="link to LeetCode coding challenges">LeetCode</a>
                        &
                        <a className="resources-links" href="https://www.codewars.com/" alt="link to LeetCode coding challenges">CodeWars</a>
                    </li>
                    <li className="resources-item">
                        Tutorials: 
                        <a className="resources-links" href="https://www.w3schools.com/" alt="link to MDN WEB DOCS">w3Schools</a>
                        &
                        <a className="resources-links" href="https://developer.mozilla.org/en-US/" alt="link to W 3 SCHOOLS">MDN Web Docs</a>
                    </li>   
                </ul>
            </div>
        </>
    )
}

export default Information