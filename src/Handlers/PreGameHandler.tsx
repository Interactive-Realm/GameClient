import React from 'react';
import { Screen } from '@interactive-realm/basepatternutilities';

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}
// Creating the frontpage demanding a boolean parameter of a button click 
const FrontPage: React.FC<Props> = ({ setScreen }) => {

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

export default FrontPage;
