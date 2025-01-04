import { createContext } from "react";

// UserContext is used to save user information locally, it is erased when the page is reloaded.
// IT DEFO NEEDS REWORKS, NEEDS HIGHSCORE AND LATEST SCORE
export const UserContext = createContext({
    userInfo: "",
    score: "",
    userExist: false,
});
