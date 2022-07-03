import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "react-native";

export interface ICategory {
  id: number;
  name: string;
  image: typeof Image;
}

export type IRootStackParamsList = {
  Categories: undefined;
  Category: { name: string };
};
