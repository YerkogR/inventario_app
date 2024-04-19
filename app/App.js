import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./screens/Screen_1";
import Screen2 from "./screens/Screen_2";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Inicio", headerShown: false }}
        />
        <Stack.Screen
          name="Screen_1"
          component={Screen1}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Screen_2"
          component={Screen2}
          options={{ title: "FlexBox", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}