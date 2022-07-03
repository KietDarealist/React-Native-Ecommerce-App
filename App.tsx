import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//types
import { IRootStackParamsList } from "./src/types";

//screens
import CategoriesScreen from "./src/screens/Categories";
import CategoryScreen from "./src/screens/Category";

export default function App() {
  let Stack = createNativeStackNavigator<IRootStackParamsList>();

  return (
      <View>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Categories"
              component={CategoriesScreen}
              options={{ title: "Home", headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="Category"
              component={CategoryScreen}
              options={({ route }) => ({
                title: route.params.name,
                headerTitleAlign: "center",
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}
