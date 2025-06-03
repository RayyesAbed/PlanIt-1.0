import { useCallback, useEffect, useState } from "react";
import { UserDataContext } from "../contexts/UserDataContext";
import { fetchUserData } from "../api/user/fetchUserData";
import { getAvatar } from "../api/user/getAvatar";

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({ data: null, image: null });

  const loadUserData = useCallback(async () => {
    const data = await fetchUserData();
    const image = await getAvatar();
    setUserData({ data, image });
  }, []);

  // load once on mount
  useEffect(() => {
    loadUserData();
  }, [loadUserData]);

  return (
    <UserDataContext.Provider value={{ userData, setUserData, loadUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
