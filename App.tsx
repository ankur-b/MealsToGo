import React from "react";
import { Text } from "react-native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};
const Tab = createBottomTabNavigator();
const Map = () => {
  return <Text>Map</Text>;
};
const Settings = () => {
  return <Text>Settings</Text>;
};
const createScreenOptions = ({ route }:{route:{name:string}}) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown:false,
    tabBarIcon: () => (
      <Ionicons name={iconName} size={24} color="black" />
    ),
  };
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  let [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [LatoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!OswaldLoaded) {
    console.log("not loaded");
    return null;
  }
  if (!LatoLoaded) {
    console.log("not loaded");
    return null;
  }

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
