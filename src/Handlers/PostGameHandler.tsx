import React, { useState, useEffect, useContext } from "react";

import InputForm from "../PostGame/Components/InputForm";   
import InputFormNew from "../PostGame/Components/InputFormNew";                               //Input form component
import { LoginForm } from "@/components/login-form";

import { UserContext } from "../BasePatternComponents/UserContext";       // BasePatternUtilities Functions Import
import { Screen } from "../BasePatternComponents/routes";       

//Reward Pages
import { RewardRoutes } from "../BasePatternComponents/routes"; 
import LeaderboardPage from "../PostGame/RewardScreens/LeaderboardPage";
import RafflePage from "../PostGame/RewardScreens/RafflePage";
import RewardPoolPage from "../PostGame/RewardScreens/RewardPoolPage";

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>; // Used to switch state of the application (Pregame, Game, Postgame etc..)
}

const PostGameHandler: React.FC<Props> = ({ setScreen: setScreen }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    
    const userInfo = useContext(UserContext);    

    const [RewardRoutes, setRewardRoute] = useState<RewardRoutes>('leaderboard'); // Set Initial Screen

    let component; // React Render Component

    
    switch (RewardRoutes) {

        // Switch to Leaderboard Page
        case "leaderboard":
            component = <LeaderboardPage setScreen={setScreen} />;
            break;

        // Switch to Raffle Page
        case "raffle":
            component = <RafflePage setScreen={setScreen} />;
            break;

        // Switch to Reward Pool Page
        case "rewardpool":
            component = <RewardPoolPage setScreen={setScreen}/>;
            break;

    }

    const handleSignUp = () => {
        setIsSignedIn(true);

        // Score.GetHighscore().then((highscores) => {
        //     setWeeklyHighscores(highscores);
        // });
    };

    return (
        <div>
            <LoginForm></LoginForm>
                {isSignedIn ? (
                    <>
                    {component}
                    </>
                ) : (
                    <>
                    
                    {/* <InputFormNew></InputFormNew> */}
                    {/* <InputForm
                        onSignUp={handleSignUp}
                    /> */}
                    </>

                )}
            
        </div>
    );
};

export default PostGameHandler;
