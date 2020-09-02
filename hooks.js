import { useState, useEffect } from "react";
import { generate } from "shortid";
import { AsyncStorage } from "react-native";

export const useColors = () => {
  const [colors, setColors] = useState([]);

  const loadColors = async () => {
    const colorData = await AsyncStorage.getItem(
      "@ColorListStore:Colors"
    );
    if (colorData) {
      const colors = JSON.parse(colorData);
      setColors(colors);
    }
  };

  useEffect(() => {
    if (colors.length) return;
    loadColors();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(
      "@ColorListStore:Colors",
      JSON.stringify(colors)
    );
  }, [colors]);

  const addColor = color => {
    const newColor = { id: generate(), color };
    setColors([newColor, ...colors]);
  };
  return { colors, addColor };
};
