import React, { useState, useEffect, useContext } from "react";
import InputForm from "../PostGame/Components/InputForm";                               //Input form component
import HighscoreList from "../PostGame/Components/HighscoreList";

import { UserContext } from "../BasePatternComponents/UserContext";       // BasePatternUtilities Functions Import
import { Screen } from "../BasePatternComponents/routes";           
import { Score, Users, UserTypes} from "../Supabase/index";

let isCalled = true;

interface Props {
    setApplicationState: React.Dispatch<React.SetStateAction<Screen>>; // Used to switch state of the application (Pregame, Game, Postgame etc..)
}

const PostGameHandler: React.FC<Props> = ({ setApplicationState: setScreen }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [weeklyHighscores, setWeeklyHighscores] = useState<UserTypes.UserHighscoreNumber[]>([]);
    const userInfo = useContext(UserContext);    

    useEffect(() => {
        console.log("isCalled state: " + isCalled)
        if(isCalled){
            isCalled = false;
            checkUserInfo();           
        }
        
    }, []);

    const checkUserInfo = async () => {
        if (JSON.parse(localStorage.getItem("userinfo")!) != null) {
            console.log("Local Storage exists: " + JSON.parse(localStorage.getItem("userinfo")!))
            
            const { data, error } = await Users.CheckUserData(
                JSON.parse(localStorage.getItem("userinfo")!),
                "regusers"
            );
            console.log("Does user exist in DB: " + data);
            if (data) {
                console.log("Local Storage Matches Database entry:" + data)
                //console.log(isSignedIn);
                userInfo.userInfo = JSON.parse(localStorage.getItem("userinfo")!);
                Score.UpdateScore(
                    userInfo.userInfo,
                    parseInt(userInfo.score)
                );
                handleSignUp();
                userInfo.userExist = true;
            } else {
                console.log("Removed " + JSON.parse(localStorage.getItem("userinfo")!) + " from localstorage");
                localStorage.removeItem("userinfo");
                userInfo.userExist = false;
                
            }
        }
    };  

    const handleSignUp = () => {
        setIsSignedIn(true);
        Score.GetHighscore().then((highscores) => {
            setWeeklyHighscores(highscores);
        });
    };

    return (
        <div id="PostGameHandler">

                {isSignedIn ? (
                    <>
                    <HighscoreList
                        highscores={weeklyHighscores}
                        loaduserscore={true}
                    ></HighscoreList>

                    <div id="buttonctn">
                        <input
                            className="buttonwhitesmall"
                            type="submit"
                            onClick={() => setScreen("game")}
                            value="Play Again"
                        />
                    </div>
                    </>
                ) : (
                    <>
                    <InputForm
                        onSignUp={handleSignUp}
                        score={parseInt(userInfo.score)}
                    />
                    </>

                )}
            
        </div>
    );
};

export default PostGameHandler;
