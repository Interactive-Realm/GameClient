import React from 'react';
import { UserContext } from "../../BasePatternComponents/UserContext";
import { Screen } from "../../BasePatternComponents/routes";
import Page from "@/PostGame/Components/RegistrationForm";
import UserForm from '@/components/UserForm';

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>; // Used to switch state of the application (Pregame, Game, Postgame etc..)
}

const RafflePage: React.FC<Props> = ({ setScreen }) => {

const userInfo = React.useContext(UserContext);
const [passed, setIsPassed] = React.useState(false);

    React.useEffect(()=>{
        if(parseInt(userInfo.score) > 10)  setIsPassed(true);
    },[]);

    return (

            <div id="RafflePage" className="flex h-screen m-auto">
                <div className="flex-col justify-items-center text-center m-auto text-lg w-full max-w-sm">
                    {passed? 
                    <> 
                    You Won
                    <UserForm />
                    
                    </> : 
                    <>
                    You Lost
                    <br></br>
                    <button className="rounded-full bg-blue-500 p-2 px-4" onClick={() => setScreen("game")}>Try Again!</button>
                    </>}                    
                </div>
                
           </div>
    );
}

export default RafflePage;
