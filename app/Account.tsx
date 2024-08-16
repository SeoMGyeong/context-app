import UserContext from "@/contexts/UserContext";
import { useContext } from "react";
import { Text, View } from "react-native";
import Output from "./Output";

const Account = () => {
  //   const { user } = useContext(UserContext);

  return (
    <View>
      <Output />
      {/* <Text>{user.id}님 안녕하세요</Text> */}
    </View>
  );
};

export default Account;
