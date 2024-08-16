import UserContext, { UserProvider } from "@/contexts/UserContext";
import { useContext } from "react";
import { Text, View } from "react-native";
import Account from "./Account";
import Navigation from "@/navigations/Navigation";

export default function Index() {
  // const { user } = useContext(UserContext);
  // user받아옴. 객체라서 {}처리
  return (
    <UserProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navigation />
      </View>
    </UserProvider>
  );
}
