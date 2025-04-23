import {supabaseClient} from "../lib/supabaseClient.ts";
import {useSessionContext} from "../context/SessionContext.tsx";
import {useEffect} from "react";
import {syncUserToTable} from "../services/AuthServices.ts";

export const useAuthSubscription = () => {
    const {session, setSession} = useSessionContext()
    useEffect(() => {
        const {data: {subscription}} = supabaseClient.auth.onAuthStateChange((event, session) => {
            console.log("useAuthSubscription", event, session)
            setSession(session);
            const { user } = session ?? {};
            const { id, email} = user ?? {};
            const { user_metadata } = user ?? {};
            const { full_name, avatar_url} = user_metadata ?? {};
            if (event === "SIGNED_IN" && id && email) {
                 syncUserToTable({id, email, full_name, avatar_url});
            }
        });
        return () => {
            subscription.unsubscribe()
        }
    }, [setSession]);
    return session;
}
