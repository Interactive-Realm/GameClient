import React from 'react';
import { useContext } from 'react';
import { UserContext } from "../BasePatternComponents/UserContext";


interface FrontPageProps {
    onGameOver: (isClicked: boolean) => void; // Callback function type
}

const GameOver: React.FC<FrontPageProps> = ({ onGameOver }) => {
    
    const userInfo = useContext(UserContext);

    const handleButtonClick = () => {

        onGameOver(false)

    };


    return (
        <div className="flex h-screen">
            <div id="gameover" className="flex-column justify-items-center m-auto text-lg">
                <h2 id="subtitle3">GAME OVER</h2>
                    <div className="">
                        <p id="highscore_element" className="scoreTitle">Your Score:</p>
                        <p className="scoreText">{userInfo.score}</p>
                    </div>
                    <div className=''>
                        <button className='rounded-full bg-blue-500 p-2 px-4' onClick={handleButtonClick}>{userInfo.userExist ? (<>Leaderboard</>):(<>Sign-Up</>)}</button>
                    </div>
            </div>                    
        </div>
    );
}

export default GameOver;
