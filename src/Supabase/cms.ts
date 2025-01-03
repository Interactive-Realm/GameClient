import {supabase} from "./SupabaseClient"

// Sign into CMS system using E-Mail
export const signInWithEmail = async (userEmail: string, userPassword: string): Promise<any> => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    })
    return data;
}