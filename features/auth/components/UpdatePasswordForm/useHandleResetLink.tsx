import * as ExpoLinking from 'expo-linking';
import { normalizeHashUrl } from '@/utils/normalizeHashUrl';
import { useEffect } from 'react';
import { useAuthPresenter } from '../../AuthPresenter';
import { useLocalSearchParams } from 'expo-router';
import { EmailOtpType } from '@supabase/supabase-js';

export function useHandleResetLink() {
  const params = useLocalSearchParams<{ token_hash: string; type: EmailOtpType }>();

  const url = ExpoLinking.useURL();
  const { updatePassword, updateSession, verifyOtp } = useAuthPresenter();

  useEffect(() => {
    if (url) {
      const { validUrl, params } = normalizeHashUrl(url);

      if (params.access_token && params.refresh_token) {
        updateSession({ accessToken: params.access_token, refreshToken: params.refresh_token });
      }
    }
  }, [url]);

  useEffect(() => {
    if (params.token_hash && params.type) {
      verifyOtp({ tokenHash: params.token_hash, type: params.type });
    }
  }, [params]);
}
