
import {useEffect} from "react";
import {useSessionContext} from "../context/SessionContext.tsx";
import {supabaseClient} from "../lib/supabaseClient.ts";

export const useAuthSession = () => {
    const {session, setSession} = useSessionContext()
    const fetchSession = async () => {
        try {
            const {data: {session}}= await supabaseClient.auth.getSession();
            console.log("useAuthSession: session", session);
            setSession(session);
        } catch (error: any) {
            throw Error(error);
        }
    }

    useEffect(() => {
        if(!session) fetchSession()
    }, [])
    return session;
}