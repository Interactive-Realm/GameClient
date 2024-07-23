// src/AuthProvider.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Client } from '@interactive-realm/databaseutilities';

type AuthContextType = {
  user: any;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const session = Client.supabase.auth.session();
    setUser(session?.user ?? null);

    const { data: authListener } = Client.supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
