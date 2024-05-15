import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import StartGame from './main';
import { EventBus } from './EventBus';
import GameOver from './Scenes/GameOver';
import { Screen } from '../App';

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}

const PhaserGame: React.FC<Props> = ({ setScreen }) => 
{
    const game = useRef<Phaser.Game | null>(null!);
    const [gameEnd, setGameEnd] = useState(false)

    useLayoutEffect(() =>
    {
        if (game.current === null)
        {

            game.current = StartGame("game-container"); // Starts the Phaser Game

        }

        return () =>
        {
            if (game.current)
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

    // gameHasEnded Event emitted from Phaser Game Scene 
    useEffect(() =>{
        EventBus.on("gameHasEnded", (data: boolean) => {
            setGameEnd(data);
        });
    })

    return (
        <>
        {gameEnd? (
            <GameOver onGameOver={() => setScreen("postgame")}/> // If phaser game is over, show Game Over screen
        ):(
            <div id="game-container"></div> // Else show div container for phaser game
        )}
        
        </>
    );

};

export default PhaserGame;
