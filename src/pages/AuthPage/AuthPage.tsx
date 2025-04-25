import { supabaseClient } from '../../lib/supabaseClient.ts';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';
import { useAuthSubscription } from '../../hooks/useAuthSubscription.ts';
import styles from './AuthPage.module.scss';

export const AuthPage = () => {
  const session = useAuthSubscription();
  if (!session) {
    return (
      <div className={styles.authPageWrapper}>
        <div className={styles.authFormWrapper}>
          <h2>Please log in</h2>
          <Auth
            supabaseClient={supabaseClient}
            appearance={{
              theme: ThemeSupa,
              className: {
                button: styles.customButton,
                input: styles.customInput,
                label: styles.customLabel,
              },
            }}
            providers={['google', 'github']}
          />
        </div>
      </div>
    );
  } else {
    return <div className={styles.authPageWrapper}>Logged in!</div>;
  }
};
