import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Grounds from "../screens/Grounds/Grounds";
import Home from "../screens/Home/Home";
import Matches from "../screens/Matches/Matches";
import Profile from "../screens/Profile/Profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000"
      inactiveColor="#000"
      barStyle={{ backgroundColor: "#FFF", height: 96 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"#000"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Matches"
        component={Matches}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="users" color={"#000"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Grounds"
        component={Grounds}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"#000"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="man" color={"#000"} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
