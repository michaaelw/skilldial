import { observable } from "@legendapp/state";
import { useAuth } from "../auth/AuthContext";
import * as userService from "./UserService";
import { authStore$ } from "../auth/AuthStore";
import { Profile } from "@/types";

type UserStore = {
  profile: Profile;
};

const userStore$ = observable<UserStore>({
  profile: async () => {
    const user = authStore$.user.get();

    const { data: profile, error } = await userService.getUserProfile(
      user?.id!,
    );

    return profile;
  },
});

export function useUserStore() {
  return { store$: userStore$ };
}
