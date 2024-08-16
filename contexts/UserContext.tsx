import { createContext, ReactNode, useState } from "react";
import { Text, View } from "react-native";

const UserContext = createContext();

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({ id: "hong" }); // 정보값을 넣게 되면 user에 저장이 되고 정보값 갱신할때는 setUSer를 통해 갱신
  const [state, setState] = useState("true"); // 왜 넣는다고?

  return (
    // Provider : 정보배포 / 사용할 곳 최상위에 한번만 적음 / user랑 setUser배포할거임
    <UserContext.Provider value={{ user, setUser, state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
// UserContext가 정보값을 가지게 됨
