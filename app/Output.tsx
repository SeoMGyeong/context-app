import UserContext from "@/contexts/UserContext";
import { useContext } from "react";
import { Text, View } from "react-native";

const Output = () => {
  const { user, state } = useContext(UserContext);

  return (
    <View>
      <Text>{user.id}님 hi.</Text>
      <Text>{state}</Text>
    </View>
  );
};

export default Output;
