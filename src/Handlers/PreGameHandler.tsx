import React from 'react';
import { Screen } from "../BasePatternComponents/routes";

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>; // Used to switch state of the application (Pregame, Game, Postgame etc..)
}

const PreGameHandler: React.FC<Props> = ({ setScreen }) => {

    return (

            <div id="PreGameHandler" className="containerScreenCenter">
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
