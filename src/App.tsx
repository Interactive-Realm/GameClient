import { useState, useContext, useEffect } from "react";                                    // React Functions Import
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';                  // React 

import GameHandler from "./Handlers/GameHandler";                                           // Game Handler
import PreGameHandler from "./Handlers/PreGameHandler";                                     // Pre Game Handler
import PostGameHandler from "./Handlers/PostGameHandler";                                   // Post Game Handler

import CampaignEnd from "./BasePatternComponents/CampaignEndComponent";                     // Import Campaign has ended page
import CampaignStart from "./BasePatternComponents/CampaignStartComponent";                 // Import Campaign hasn't started yet page
import { getUserLocation } from "./BasePatternComponents/UserLocation";

import { UserContext } from "./BasePatternComponents/UserContext";       // BasePatternUtilities Functions Import
import { Screen } from "./BasePatternComponents/routes"; 
import { checkDate } from "./BasePatternComponents/campaignperiod"; 
import './App.css'                                                                          // Custom CSS 

function App() {
    const [screen, setScreen] = useState<Screen>('pregame'); // Set Initial Screen

    let component; // React Render Component

    switch (screen) {

        // Switch to Pre Game Page
        case "pregame":
            component = <PreGameHandler setScreen={setScreen} />;
            break;

        // Switch to Game Page
        case "game":
            component = <GameHandler setScreen={setScreen} />;
            break;

        // Switch to Post Game Page
        case "postgame":
            component = <PostGameHandler setScreen={setScreen}/>;
            break;
        
        // Switch to Campaign Not Yet Started Page
        case "CampaignStart":
            component = <CampaignStart />;
            break;

        // Switch to Campaign has ended Page
        case "CampaignEnd":
            component = <CampaignEnd />;
            break;
    }

    // Used to save data locally in the browser session (Data will disappear when page is refreshed, EG. by pressing F5)
    const userInfo = useContext(UserContext); 
    

    // Campaign Runtime checker
    useEffect(()=>{
        checkDate(new Date("2025-01-01"), new Date("2025-31-12"), setScreen);
        
        getUserLocation()
      .then((location) => {
        // This will log the location in the console
        if (typeof location !== 'string') {
          console.log('Location:', location);
        }
      })
      .catch((err) => {
        console.error('Error fetching location:', err);
      });
    },[]);
            
    // ----- The following is the components being rendered ----- //
    return (      
    <BrowserRouter>
        <Routes>
            {/* Main route for campaign game */}
            <Route
            path="/Campaign"
            element={
                <UserContext.Provider value={userInfo}>
                    <div id="app">
                        {component}
                    </div>
                </UserContext.Provider>}
            />
            {/* Reroute all paths to the main campaign route */}
            <Route path="/*" element={<Navigate to='/campaign' />} /> 

        </Routes>      
    </BrowserRouter>        
    );
}

export default App;
