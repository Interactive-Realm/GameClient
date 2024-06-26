import { useState, useContext } from "react";
import PhaserGame from "./game/PhaserGame";                     // Game Module
import IntroPage from "./PreGame/IntroPage";                    // Pre Game Module
import PostGame from "./PostGame/PostGame";                     // Post Game Module
// import Highscore from "./PostGame/HighscoreStandAlone";              
// import HighscoreDesktop from "./PostGame/HighscoreStandAloneDesktop";
import { UserContext } from "./UserContext";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

export type Screen = "pregame" | "game" | "postgame";

function App() {

    const [screen, setScreen] = useState<Screen>("pregame");

    let component;
    switch (screen) {
        case "pregame":
            component = <IntroPage setScreen={setScreen} />;
            break;

        case "game":
            component = <PhaserGame setScreen={setScreen} />;
            break;

        case "postgame":
            component = <PostGame setScreen={setScreen}/>;
            break;
    }
    
    const userInfo = useContext(UserContext);

    // ------------------- LOCAL STORAGE DEBUG ------------------- //
    //console.log("Localstorage: " + JSON.parse(localStorage.getItem('userinfo')!)); 

    // ----- The following is the components being rendered ----- //
    return (
       
    <BrowserRouter>
      <Routes>
        <Route
          path="/institutdysten2024"
          element={
            <UserContext.Provider value={userInfo}>
                <div id="app">
                    {component}
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
