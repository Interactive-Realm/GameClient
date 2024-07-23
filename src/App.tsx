import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import PhaserGame from "./Handlers/GameHandler";                     // Game Module
import IntroPage from "./Handlers/PreGameHandler";                   // Pre Game Module
import PostGame from "./Handlers/PostGameHandler";                   // Post Game Module

import CampaignEnd from "./BasePatternComponents/CampaignEndComponent";
import CampaignStart from "./BasePatternComponents/CampaignStartComponent";

import { Screen, checkDate, UserContext } from "@interactive-realm/basepatternutilities";

import CMSLoginPage from "./CMS/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
    const [screen, setScreen] = useState<Screen>('pregame');
    let component;
    switch (screen) {
        case "pregame":
            component = <IntroPage setScreen={setScreen} />;
            break;

        case "game":
            component = <PhaserGame setScreen={setScreen} />;
            break;

        case "postgame":
            component = <PostGame setApplicationState={setScreen}/>;
            break;

        case "CampaignStart":
            component = <CampaignStart/>;
            break;

        case "CampaignEnd":
            component = <CampaignEnd />;
            break;
    }

    const userInfo = useContext(UserContext);

    useEffect(()=>{
        checkDate(new Date("2024-07-06"), new Date("2024-07-17"), setScreen);
    },[])
            

    // ------------------- LOCAL STORAGE DEBUG ------------------- //
    //console.log("Localstorage: " + JSON.parse(localStorage.getItem('userinfo')!)); 

    // ----- The following is the components being rendered ----- //
    return (
       
    <BrowserRouter>
      <Routes>
        <Route
          path="/Campaign"
          element={
            <UserContext.Provider value={userInfo}>
                <div id="app">
                    {component}
                </div>
            </UserContext.Provider>}
        />
        <Route path="/*" element={<Navigate to='/Campaign' />} />
        {/* <Route path="/leaderboardmobile" element={<Highscore/>} />
        <Route path="/leaderboard" element={<HighscoreDesktop/>} />         */}
      </Routes>
      
    </BrowserRouter>
        
    );
}

export default App;
