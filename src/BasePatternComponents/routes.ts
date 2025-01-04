import {useState} from "react";

// Screen types with every application state included
export type Screen = "pregame" | "game" | "postgame" | "CampaignStart" | "CampaignEnd";

// Set screen state (honestly i just tried to export the usestate but that was not allowed so this is the best solution so far)
export const useScreen = () => {
    const [screen, setScreen] = useState<Screen>('pregame');
    return { screen, setScreen };
};