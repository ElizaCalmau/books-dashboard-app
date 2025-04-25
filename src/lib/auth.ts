import { supabaseClient } from './supabaseClient.ts';

export const auth = supabaseClient.auth.signInWithOAuth({
  provider: 'google',
});
