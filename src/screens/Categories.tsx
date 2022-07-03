import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

//list static images (just for test)
import EyeCreamImage from "../assets/eye-cream.png";
import MedicineImage from "../assets/medicine.png";
import ShampooImage from "../assets/shampoo.png";
import ShowerGelImage from "../assets/shower-gel.png";
import ToothBrushImage from "../assets/toothbrush.png";

//components
import CategoryListItem from "../components/CategoryListItem";

//types
type Props = NativeStackScreenProps<IRootStackParamsList, "Categories">;

import { ICategory, IRootStackParamsList } from "../types";

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  const [categories] = useState<ICategory[]>([
    { id: 1, name: "Sữa tắm", image: ShampooImage },
    { id: 2, name: "Dầu gội đầu", image: ShowerGelImage },
    { id: 3, name: "Kem mắt", image: EyeCreamImage },
    { id: 4, name: "Kem đánh răng", image: ToothBrushImage },
    { id: 5, name: "Thực phẩm chức năng", image: MedicineImage },
  ]);

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryListItem
            category={item}
            onPress={() => navigation.navigate("Category", { name: item.name })}
          />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
