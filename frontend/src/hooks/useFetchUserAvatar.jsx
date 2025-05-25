import { useState } from "react";

const useFetchUserAvatar = () => {
  const [userAvatar, setUserAvatar] = useState(null);

  return userAvatar;
};

export default useFetchUserAvatar;
