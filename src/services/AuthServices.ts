import {supabaseClient} from "../lib/supabaseClient.ts";
import {UserData} from "../lib/constants.ts";

export const syncUserToTable = async ({id, email, full_name, avatar_url}: UserData) => {
    const { data, error } = await supabaseClient.from("users")
        .upsert([{id, email, full_name, avatar_url}], { onConflict: 'id' } )//if record already exists it will be updated rather than inserted
        .select();
    console.log('syncUsers', data);
    if (error) console.error("Failed to sync user", error);
    //TODO: create a context for user data, maybe session data context is useless?
}