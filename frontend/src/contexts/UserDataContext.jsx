import { createContext } from "react";
import { fetchUserData } from "../api/user/fetchUserData";
import { getAvatar } from "../api/user/getAvatar";

export const UserData = {
  fetchUserData: await fetchUserData(),
  getAvatar: await getAvatar(),
};

export const UserDataContext = createContext(UserData);
