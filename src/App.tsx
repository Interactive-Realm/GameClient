import { useState, useEffect, useContext } from "react";
import { PhaserGame } from "./game/PhaserGame";
import { EventBus } from "./game/EventBus";
import IntroPage from "./PreGame/IntroPage";
import PostGame from "./PostGame/PostGame";
import Highscore from "./PostGame/HighscoreStandAlone";
import HighscoreDesktop from "./PostGame/HighscoreStandAloneDesktop";
import { UserContext } from "./UserContext";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {

    
    
    // State to track whether the registration scene button is clicked
    const [gameEnd, setGameEnd] = useState(false);

    // State to track whether the game button is clicked
    const [gameStarted, setGameStarted] = useState(false);

    const userInfo = useContext(UserContext);

    //console.log("Localstorage: " + JSON.parse(localStorage.getItem('userinfo')!)); // LOCAL STORAGE DEBUG
    


    useEffect(() => {
        // Function to handle event emitted from Phaser
        const handlePhaserEvent = (value: boolean) => {
            setGameEnd(value);
        };

        // Listen for the event emitted from Phaser
        EventBus.on("gameHasEnded", handlePhaserEvent);

        // Clean up the event listener when component unmounts
        return () => {
            EventBus.off("booleanValue", handlePhaserEvent);
        };
    }, []); // Empty dependency array means this effect will run once after the initial render

    // Function to handle game button click
    const handleGameButtonClick = (isClicked: boolean) => {
        setGameStarted(isClicked);
    };

    const handlePlayAgain = (state: boolean) => {
        setGameStarted(state);
        setGameEnd(!state);
    };


    // ----- The following is the components being rendered ----- //
    return (
       
    <BrowserRouter>
      <Routes>
        <Route
          path="/institutdysten2024"
          element={
            <UserContext.Provider value={userInfo}>
                <div id="app">
                    {gameEnd ? (
                        <PostGame playAgain={handlePlayAgain} />
                        ) : (
                        <div>
                            {!gameStarted ? (
                            <IntroPage onButtonClick={handleGameButtonClick} />
                            ) : (
                            <PhaserGame/>
                            )}
                        </div>
                    )}
                </div>
            </UserContext.Provider>}
        />
        <Route path="/*" element={<Navigate to='/institutdysten2024' />} />
        {/* <Route path="/leaderboardmobile" element={<Highscore/>} />
        <Route path="/leaderboard" element={<HighscoreDesktop/>} />         */}
      </Routes>
      
    </BrowserRouter>
        
    );
}

export default App;
