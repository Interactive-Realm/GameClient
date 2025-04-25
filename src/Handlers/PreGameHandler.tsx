import React from 'react';
import { Screen } from "../BasePatternComponents/routes";

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>; // Used to switch state of the application (Pregame, Game, Postgame etc..)
}

const PreGameHandler: React.FC<Props> = ({ setScreen }) => {

    return (

            <div id="PreGameHandler" className="flex h-screen">
                <div className="flex-column justify-items-center m-auto text-lg">
                    <div>
                    Intro Page
                    </div>
                    <button className="rounded-full bg-blue-500 p-2 px-4" onClick={() => setScreen("game")}>Ready?</button>
                </div>
           </div>
    );
}

export default PreGameHandler;
