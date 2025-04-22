import {supabaseClient} from "../lib/supabaseClient.ts";
import {useSessionContext} from "../context/SessionContext.tsx";
import {useEffect} from "react";

export const useAuthSubscription = () => {
    const {session, setSession} = useSessionContext()
    useEffect(() => {
        const {data: {subscription}} = supabaseClient.auth.onAuthStateChange((event, session) => {
            console.log("useAuthSubscription", event, session)
            setSession(session);

        });
        return () => {
            subscription.unsubscribe()
        }
    }, [setSession]);
    return session;
}
