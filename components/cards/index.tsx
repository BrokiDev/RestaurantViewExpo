import React from "react";
import { Image, ImageProps, Text, TouchableOpacity } from "react-native";

interface CardPropsI {
  item: [{
    title: string, image: ImageProps, paragrah: string
  }];
}

const CardComponent = ({ item }: CardPropsI) => {
  return (
      item.map((element,index)=> (
        <TouchableOpacity key={index}>
          <Image source={element.image} />
          <Text>{element.title}</Text>
          <Text className="text-[#828282]">{element.paragrah}</Text>
        </TouchableOpacity>
      ))
  );
};

export default CardComponent;
