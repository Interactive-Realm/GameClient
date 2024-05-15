import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

interface FrontPageProps {
    onButtonClick: (isClicked: boolean) => void; // Callback function type
}
// Creating the frontpage demanding a boolean parameter of a button click 
const FrontPage: React.FC<FrontPageProps> = ({ onButtonClick }) => {
    

    // Function to handle button click
    const handleButtonClick = () => {
        
        // The parameter of this component is set
        onButtonClick(true);
    };

    return (
        <div id="app">
            <img src="/assets/is-logo.png" alt="IS Logo" className='islogo'></img>
            
             <div className="headline">
                Institutdysten
            </div>
            <div className='underheadline'>by SDS</div>

            <div className='infotext'>Drive your soapbox car, earn distance points, and secure your place on the Leaderboard.</div>
         
                <img src="assets/CarLogo.png" className='fp-car-picture'></img>
               
            
            <div className='gamename-text'>SOAPBOX SHOWDOWN</div>
            
           
            <div className='d-grid text-center container'>
                <Button className="subfont" variant="test" size="lg" onClick={handleButtonClick}>Ready</Button>              
                
            </div>
        </div>
    );
}

export default FrontPage;
