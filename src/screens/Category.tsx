import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View, TouchableOpacity } from "react-native";

//types
import { IRootStackParamsList } from "../types";
type Props = NativeStackScreenProps<IRootStackParamsList, "Category">;

const CategoryScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
        Click {route.params.name}
      </TouchableOpacity>
    </View>
  );
};

export default CategoryScreen;

const CategoryScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
