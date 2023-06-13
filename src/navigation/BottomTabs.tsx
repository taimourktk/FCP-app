import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Grounds from "../screens/Grounds/Grounds";
import Home from "../screens/Home/Home";
import Matches from "../screens/Matches/Matches";
import Profile from "../screens/Profile/Profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{
        //   tabBarIcon: ({ color, size }) => (
        //     <MaterialCommunityIcons name="mdiHome" color={color} size={size} />
        //   ),
        // }}
      />
      <Tab.Screen name="Matches" component={Matches} />
      <Tab.Screen name="Grounds" component={Grounds} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
