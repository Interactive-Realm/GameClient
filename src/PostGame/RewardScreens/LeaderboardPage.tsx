import React, { useState } from "react";
import { Screen } from "../../BasePatternComponents/routes";
import HighscoreList from "../../PostGame/Components/HighscoreList";
import { UserHighscoreNumber} from "../../BasePatternComponents";

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>; // Used to switch state of the application (Pregame, Game, Postgame etc..)
}

const LeaderboardPage: React.FC<Props> = ({ setScreen }) => {

    const [weeklyHighscores, setWeeklyHighscores] = useState<UserHighscoreNumber[]>([]);

    return (

            <div id="PreGameHandler" className="containerScreenCenter">
                <div className="alignCenter largePaddingBottom mainFont largeFontSize">
                    Leaderboard Page
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
                </div>
           </div>
    );
}

export default LeaderboardPage;
