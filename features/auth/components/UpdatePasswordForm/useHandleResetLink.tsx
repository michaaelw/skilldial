import * as ExpoLinking from 'expo-linking';
import { normalizeHashUrl } from '@/utils/normalizeHashUrl';
import { useEffect } from 'react';
import { useAuthPresenter } from '../../AuthPresenter';

export function useHandleResetLink() {
  const url = ExpoLinking.useURL();
  const { updatePassword, updateSession } = useAuthPresenter();

  useEffect(() => {
    if (url) {
      const { validUrl, params } = normalizeHashUrl(url);

      if (params.access_token && params.refresh_token) {
        updateSession({ accessToken: params.access_token, refreshToken: params.refresh_token });
      }
    }
  }, [url]);
}
