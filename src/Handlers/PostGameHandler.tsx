import React, { useState, useEffect, useContext } from "react";
import InputForm from "../PostGame/Components/InputForm";                               //Input form component
import HighscoreList from "../PostGame/Components/HighscoreList";
import { UserContext } from "../BasePatternComponents/UserContext";       // BasePatternUtilities Functions Import
import { Screen } from "../BasePatternComponents/routes";       
import { UserTypes} from "../Supabase/index";


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

            
            // Check if user exists in Database
            // const { data, error } = await Users.CheckUserData(
            //     JSON.parse(localStorage.getItem("userinfo")!),
            //     "regusers"
            // );

            //console.log("Does user exist in DB: " + data);

            // If user exists, Sign them in and insert Score
            // if (data) {
            //     console.log("Local Storage Matches Database entry:" + data)
            //     //console.log(isSignedIn);
            //     userInfo.userInfo = JSON.parse(localStorage.getItem("userinfo")!);
                
            //     // Insert Score
            //     Score.UpdateScore(
            //         userInfo.userInfo,
            //         parseInt(userInfo.score)
            //     );
            //     handleSignUp();
            //     userInfo.userExist = true;
            // } 
            // // User does not exist, then remove user from local storage and add new user info into local storage
            // else {
            //     console.log("Removed " + JSON.parse(localStorage.getItem("userinfo")!) + " from localstorage");
            //     localStorage.removeItem("userinfo");
            //     userInfo.userExist = false;
                
            // }
        
    };  

    const handleSignUp = () => {
        setIsSignedIn(true);

        // Score.GetHighscore().then((highscores) => {
        //     setWeeklyHighscores(highscores);
        // });
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
                    />
                    </>

                )}
            
        </div>
    );
};

export default PostGameHandler;
