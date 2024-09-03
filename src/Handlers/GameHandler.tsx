import { useLayoutEffect, useRef, useState, useContext } from 'react';
import { SoapboxStart, OceanStart, FlappyStart } from '@interactive-realm/phasergamelibrary';
import { EventBus } from '@interactive-realm/phasergamelibrary';
import GameOver from '../BasePatternComponents/GameOver';
import { Screen, UserContext } from '@interactive-realm/basepatternutilities';

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>; // Used to switch state of the application (Pregame, Game, Postgame etc..)
}

const GameHandler: React.FC<Props> = ({ setScreen }) => 
{
    const game = useRef<Phaser.Game | null>(null!);  // Reference to the Phaser Game
    const [gameEnd, setGameEnd] = useState(false); // Used to identify if a game has ended
    const userInfo = useContext(UserContext); // User context is used to save score locally

    useLayoutEffect(() =>
    {
        // Needs the gameEnd boolean or it will create a duplicate game when it reaches the GameOver Screen
        if (game.current === null && gameEnd == false)
        {
            game.current = OceanStart("game-container", false); // Starts the Phaser Game
            console.log("NewGame");
        }

        return () =>
        {
            // If a game exist and the game has ended destroy the game and set current game to null
            if (game.current && gameEnd == true)
            {
                console.log("Game Current return: " + game.current)
                game.current.destroy(true);
                if (game.current !== null)
                {
                    game.current = null;
                    console.log("Game Current destroyed return: " + game.current)
                }
            }
        }
    });

    // Subscribe to gameHasEnded updates
    EventBus.on("gameHasEnded", (data: boolean) => {
        setGameEnd(data);           
    });

    // Subscribe to score updates
    EventBus.on("score", (data: number) => {
        userInfo.score = data.toString();
    });

    return (
        <div id="GameHandler">
            {gameEnd? (
                <GameOver onGameOver={() => setScreen("postgame")}/> // If phaser game is over, show Game Over screen
            ):(
                <div id="game-container"></div> // Else show div container for phaser game
            )}        
        </div>
    );

};

export default GameHandler;
