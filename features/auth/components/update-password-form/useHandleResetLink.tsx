import { useEffect } from "react";
import { useAuthPresenter } from "../../auth.presenter";
import { useLocalSearchParams } from "expo-router";
import { EmailOtpType } from "@supabase/supabase-js";

export function useHandleResetLink() {
  const params = useLocalSearchParams<{
    token: string;
    type: EmailOtpType;
    email: string;
  }>();

  //const url = ExpoLinking.useURL();
  const { verifyOtp } = useAuthPresenter();

  /*
  useEffect(() => {
    if (url) {
      const { validUrl, params } = normalizeHashUrl(url);

      if (params.access_token && params.refresh_token) {
        updateSession({ accessToken: params.access_token, refreshToken: params.refresh_token });
      }
    }
  }, [url]); */

  useEffect(() => {
    if (params.email && params.type && params.token) {
      verifyOtp({
        token: params.token,
        type: params.type,
        email: params.email,
      });
    }
  }, [params]);
}
