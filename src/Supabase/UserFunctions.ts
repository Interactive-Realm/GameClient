import {supabase} from "./SupabaseClient"

// Insert user into database
export const InsertUser = async (first_name: string, phonenumber: string, score: number): Promise<void> => {
    let { data, error } = await supabase
    .rpc('insert_user', {
      user_name: first_name, 
      user_number: phonenumber, 
      user_score: score
    })
  if (error) console.error(error)
  return data;
}

// Update existing users info 
// FUNCTIONS NEEDS TO BE GENERAL, CURRENTLY USES PHONE NUMBER AS IDENTIFICATION OF END USER
export const CheckUserData = async (number: string, table: string): Promise<any> => {
    const { data, error } = await supabase.rpc("check_phonenumber", {
        number_to_check: number,
        table_to_check: table,
    });
    // console.log(data);
    if (error) {
        console.error(error);
    }

    return data;
}