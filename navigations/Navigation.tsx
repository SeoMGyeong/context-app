import Account from "@/app/Account";
import SignIn from "@/app/SignIn";
import UserContext from "@/contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";

const Navigation = () => {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer independent={true}>
      {/* independent={true} 적어줘야됨 
      user값이 있다면 Account페이지로, 없으면 SignIn페이지로 */}
      {user ? <Account /> : <SignIn />}
    </NavigationContainer>
  );
};

export default Navigation;
