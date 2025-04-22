import {supabaseClient} from "../../lib/supabaseClient.ts";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import {Auth} from "@supabase/auth-ui-react";
import {useAuthSubscription} from "../../hooks/useAuthSubscription.ts";

export const AuthPage = () => {

    const session = useAuthSubscription();
    if (!session) {
        return (<Auth supabaseClient={supabaseClient} appearance={{ theme: ThemeSupa }} />)
    }
    else {
        return (<div>Logged in!</div>)
    }
};
