import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  user: IUser;
  logout: () => void;
  editUser: (params: IUser) => void;
};

const initUserState: IUser = {
  id: "",
  email: "",
  name: "",
  occupation: "",
  avatar_url: "",
  isActive: false,
};

export const useAuth = create<Store>()(
  persist(
    (set) => ({
      user: initUserState,
      editUser: (params) => set(() => ({ user: { ...params } })),
      logout: () => set(() => ({ user: initUserState })),
    }),
    { name: "react-crm-auth" }
  )
);
