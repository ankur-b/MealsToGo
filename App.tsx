import React from "react";
import { Text } from "react-native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurents/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const TAB_ICON = {
  Restaurants: "restaurant" as keyof typeof Ionicons.glyphMap,
  Map: "map" as keyof typeof Ionicons.glyphMap,
  Settings: "settings" as keyof typeof Ionicons.glyphMap,
};
const Tab = createBottomTabNavigator();
const Map = () => {
  return <Text>Map</Text>;
};
const Settings = () => {
  return <Text>Settings</Text>;
};
const createScreenOptions = (props: any) => {
  const iconName = TAB_ICON[props.route.name as keyof TabParamList];
  return {
    headerShown: false,
    tabBarIcon: () => <Ionicons name={iconName} size={24} color="black" />,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
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
    <LocationContextProvider>
    <RestaurantsContextProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </RestaurantsContextProvider>
    </LocationContextProvider>
  );
}
type TabParamList = {
  Restaurants: { name: string };
  Map: { name: string };
  Settings: { name: string };
};
