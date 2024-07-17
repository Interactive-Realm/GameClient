import { useState, useContext, useEffect } from "react";
//import PhaserGame from "./Game/PhaserGame";                     // Game Module
import IntroPage from "./PreGame/IntroPage";                    // Pre Game Module
import PostGame from "./PostGame/PostGame";                     // Post Game Module
// import Highscore from "./PostGame/HighscoreStandAlone";              
// import HighscoreDesktop from "./PostGame/HighscoreStandAloneDesktop";
import CampaignEnd from "./CampaignEndComponent";
import CampaignStart from "./CampaignStartComponent";
import { UserContext } from "./UserContext";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
//import { Screen, checkDate } from "basepatterncorecomponents";
import {Client} from "databaseutilities";
import CMSLoginPage from "./CMS/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export type Screen = "pregame" | "game" | "postgame" | "CampaignStart" | "CampaignEnd";

function App() {
    const [screen, setScreen] = useState<Screen>("pregame");
    let component;
    switch (screen) {
        case "pregame":
            component = <IntroPage setScreen={setScreen} />;
            break;

        case "game":
            //component = <PhaserGame setScreen={setScreen} />;
            break;

        case "postgame":
            component = <PostGame setScreen={setScreen}/>;
            break;

        case "CampaignStart":
            component = <CampaignStart/>;
            break;

        case "CampaignEnd":
            component = <CampaignEnd />;
            break;
    }

    const userInfo = useContext(UserContext);

    function checkDate(startdate:Date,enddate:Date){
    
        const CampaignStartDate = startdate;
        const CampaignEndDate = new Date(enddate.getFullYear(), enddate.getMonth(), enddate.getDate(), 23, 59);
        const Today = new Date();
    
        console.log(CampaignStartDate)
        console.log(Today);
        if(Today > CampaignStartDate && Today < CampaignEndDate)
            {
                console.log("Campaign Running");
                setScreen("pregame");
            }
            
        else if(Today < CampaignStartDate)
            {
                console.log("Campaign Not Started Yet");
                setScreen("CampaignStart");
            }
        
        else if(Today > CampaignEndDate)
            {
                console.log("Campaign Ended");
                setScreen("CampaignEnd");
    
            }
    
    }

    useEffect(()=>{
        checkDate(new Date("2024-07-06"), new Date("2024-07-17"));
    },[])
    
    console.log("Score Test: " + Client.supabase);
       
        

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
        <Route path="/*" element={<Navigate to='/CMS' />} />
        {<Route path="/CMS" element={<CMSLoginPage/>} />}

      </Routes>
      
    </BrowserRouter>
        
    );
}

export default App;
