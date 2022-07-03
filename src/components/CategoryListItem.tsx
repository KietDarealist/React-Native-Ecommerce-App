import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

//types
import { ICategory } from "../types";

interface ICategoryListItemProps {
  category: ICategory;
  onPress: () => void;
}

const CategoryListItem: React.FC<ICategoryListItemProps> = ({
  category,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={CategoryListItemStyles.container}>
        <Text style={CategoryListItemStyles.title} >{category.name}</Text>
        <Image
          source={category.image as any}
          style={CategoryListItemStyles.categoryImage}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryListItem;

const CategoryListItemStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#f0f4f5",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16,
  },
  categoryImage: {
    width: 64,
    height: 64,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "800",
  },
});
