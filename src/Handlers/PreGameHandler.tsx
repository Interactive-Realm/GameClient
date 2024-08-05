import React from 'react';
import { Screen } from '@interactive-realm/basepatternutilities';

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>; // Used to switch state of the application (Pregame, Game, Postgame etc..)
}
// Creating the frontpage demanding a boolean parameter of a button click 
const PreGameHandler: React.FC<Props> = ({ setScreen }) => {

    return (

            <div className="containerScreenCenter">
                <div>
                    <div className="alignCenter largePaddingBottom mainFont largeFontSize">
                    Intro Page
                    </div>
                    <button className='darkButton' onClick={() => setScreen("game")}>Ready?</button>
                </div>
           </div>
    );
}

export default PreGameHandler;
