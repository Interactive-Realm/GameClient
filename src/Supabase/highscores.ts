import {supabase} from "./SupabaseClient"
import { UserHighscoreNumber } from "./usertypes"

// Get a list of scores in descending order from highest to lowest score. Limit count defines size of array (Eg. top 10)
export const GetHighscore = async (): Promise<UserHighscoreNumber[]> => {
    let { data, error } = await supabase
    .rpc('get_highscores', {
      limit_count: 10 ,
    })
    if (error) console.error(error)
    //else console.log(data)
    return data;
}

// Update a single users score
export const UpdateScore = async (number: string, score: any): Promise<any> => {
    let { data, error } = await supabase.rpc("update_score", {
        user_number: number,
        user_score: score,
    });
    if (error) console.error(error);
    //else console.log(data);
    return data;
}