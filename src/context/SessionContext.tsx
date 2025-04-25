import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Session } from '@supabase/supabase-js';

interface SessionContextType {
  session: Session | null | undefined;
  setSession: React.Dispatch<React.SetStateAction<Session | null | undefined>>;
}

export const SessionContext = createContext<SessionContextType | null>(null);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>();
  return (
    <SessionContext.Provider value={{ session, setSession }}>{children}</SessionContext.Provider>
  );
};

export const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSessionContext must be used as useSessionContext');
  }
  return context;
};
