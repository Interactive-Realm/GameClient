import React, { useState } from 'react';
import { Screen } from '../App';

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}
// Creating the frontpage demanding a boolean parameter of a button click 
const FrontPage: React.FC<Props> = ({ setScreen }) => {

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
            
            <div className='container'>
                <button className='buttonblack' onClick={() => setScreen("game")}>Ready?</button>
            </div>
        </div>
    );
}

export default FrontPage;
