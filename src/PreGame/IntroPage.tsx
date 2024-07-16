import React, { useState } from 'react';
import { Screen } from 'basepatterncorecomponents';

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}
// Creating the frontpage demanding a boolean parameter of a button click 
const FrontPage: React.FC<Props> = ({ setScreen }) => {

    return (
        <div id="app">
            
            
             <div className="headline">
                Intro Page
            </div>
            
            <div className='container'>
                <button className='buttonblack' onClick={() => setScreen("game")}>Ready?</button>
            </div>
        </div>
    );
}

export default FrontPage;
