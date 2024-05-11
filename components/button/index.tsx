import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface CardPropsI {
  item: [{
    title: string
  }];
}

const ButtonComponent = ({ item }: CardPropsI) => {
  return (
      item.map((element,index)=> (
        <View key={index} className="w-4/12 p-1">
        <TouchableOpacity className="rounded-lg bg-[#232323] items-center p-4">
          <Text className="text-white">{element.title}</Text>
        </TouchableOpacity>
      </View>
      ))
  );
};

export default ButtonComponent;
