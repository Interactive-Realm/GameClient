import { useState, useContext, useEffect } from "react";                                    // React Functions Import
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';                  // React 

import GameHandler from "./Handlers/GameHandler";                                           // Game Handler
import PreGameHandler from "./Handlers/PreGameHandler";                                     // Pre Game Handler
import PostGameHandler from "./Handlers/PostGameHandler";                                   // Post Game Handler

import CampaignEnd from "./BasePatternComponents/CampaignEndComponent";                     // Import Campaign has ended page
import CampaignStart from "./BasePatternComponents/CampaignStartComponent";                 // Import Campaign hasn't started yet page

import { Screen, checkDate, UserContext } from "@interactive-realm/basepatternutilities";   // BasePatternUtilities Functions Import

import CMSLoginPage from "./CMS/LoginPage";                                                 // CMS Login Page
import Dashboard from "./CMS/Dashboard";                                                    // CMS Dashboard

import 'bootstrap/dist/css/bootstrap.min.css';                                              // Bootstrap CSS
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
            component = <PostGameHandler setApplicationState={setScreen}/>;
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
        checkDate(new Date("2024-07-06"), new Date("2024-08-10"), setScreen);
    },[]);
            

    // ------------------- LOCAL STORAGE DEBUG ------------------- //
    // Keep this for now! Currently there are two options for local storage: LocalStorage and UserContext, LocalStorage data persists on page reload and UserContext does not.
    //console.log("Localstorage: " + JSON.parse(localStorage.getItem('userinfo')!)); 

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

            {/* Reroute all paths to the main campaign route */}
            <Route path="/CMS" element={<CMSLoginPage/>} />
        </Routes>      
    </BrowserRouter>        
    );
}

export default App;
