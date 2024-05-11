import {
  AntDesign,
  Feather,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { ArrowLeft2, Heart, SearchNormal, Star1 } from "iconsax-react-native";
import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CardComponent from "./components/cards";
const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <ScrollView>
        <View className="h-[250px] w-full">
          <ImageBackground
            className="mt-0 w-full h-full relative "
            source={require("./assets/imgBackground.png")}
          />

          <View className="absolute top-12 left-6 p-1 border bg-white rounded-full">
            <Text className="items-center justify-center text-center">
              <ArrowLeft2
                className="items-center justify-center text-center"
                size="30"
                color="black"
              />
            </Text>
          </View>

          <View className="absolute bg-black p-3 rounded-xl border right-2 bottom-12">
            <Text className="text-white">Reservar Mesa</Text>
          </View>
        </View>

        <View className=" -mt-4 rounded-3xl bg-white">
          <View className="relative">
            <Image
              className="absolute h-18 w-18 -top-8 left-9"
              source={require("./assets/imageProfile.png")}
            />
          </View>

          <View className="flex-row p-6  justify-around items-center">
            <View className="w-9/12">
              <Text className="text-xl font-semibold">
                Barra Junior Payan- Romulo Bentacourt
              </Text>
            </View>

            <TouchableOpacity className="flex-row  items-center justify-center py-1 border border-transparent rounded-3xl px-3 bg-[#F8F8F8]">
              <Heart size="22" color="black" />
              <Text className="text-gray-600">Seguir</Text>
            </TouchableOpacity>
          </View>

          <View className=" flex-row justify-around mx-3 -mt-4">
            <View className="flex-row gap-1 items-center">
              <Star1 size="16" color="black" />
              <Text>4.3</Text>
            </View>

            <View className="flex-row">
              <Text>Abierto hasta las 8:30 PM</Text>
            </View>

            <View className="flex-row gap-1 items-center ">
              <SimpleLineIcons name="user-follow" size={16} color="black" />
              <Text>Seguidores 450</Text>
            </View>
          </View>
          <View className=" flex-row justify-between  mx-7 rounded-3xl p-[2px]  mt-6 border border-transparent bg-[#F8F8F8]">
            <View className="p-2 pl-2">
              <Text>
                <Feather name="shopping-bag" size={22} color="black" />
              </Text>
            </View>

            <View className="flex-row items-center justify-center gap-[3px]  w-4/12 bg-[#1E1E1E]   rounded-3xl   -mt-1 -mb-1">
              <MaterialIcons name="delivery-dining" size={24} color="white" />
              <Text className="text-lg text-white">Delivery</Text>
            </View>

            <View className="p-2 pl-2">
              <MaterialIcons name="local-dining" size={22} color="black" />
            </View>
          </View>

          <View className="flex-row justify-around  mt-4 p-1 bg-[#F8F8F8]">
            <View>
              <View className="flex-row items-center justify-center gap-1">
                <AntDesign name="clockcircle" size={18} color="black" />
                <Text>10-25 min</Text>
              </View>
              <Text className="text-[#828282]">Tiempo de envio</Text>
            </View>

            <View>
              <Text>|</Text>
            </View>

            <View>
              <View className="flex-row items-center justify-center gap-1">
                <AntDesign name="clockcircle" size={18} color="black" />

                <Text>DOP $60.00</Text>
              </View>
              <Text className="text-[#828282]">Costo de entrega</Text>
            </View>
          </View>

          <View className=" flex-row relative justify-between  mx-7 rounded-3xl p-[2px]  mt-6 border border-transparent bg-[#F8F8F8]">
            <SearchNormal
              className="absolute items-center justify-center  top-3 left-3"
              size="22"
              color="black"
            />
            <TextInput
              className="p-2 pl-10"
              placeholder="Busca por producto"
            ></TextInput>
          </View>

          <View className="w-full  mt-5  flex-row justify-between items-center">
            <View className="w-4/12 p-1">
              <TouchableOpacity className="rounded-lg bg-[#232323] items-center p-4">
                <Text className="text-white">Promos</Text>
              </TouchableOpacity>
            </View>
            <View className="w-4/12 p-1">
              <TouchableOpacity className=" rounded-lg border-transparent bg-[#F8F8F8]  items-center p-4">
                <Text className="">Combos</Text>
              </TouchableOpacity>
            </View>

            <View className="w-4/12">
              <TouchableOpacity className="rounded-lg border-transparent bg-[#F8F8F8]  items-center p-4">
                <Text className="">Pierna</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-around mt-3 pb-3">
            <CardComponent
              item={[
                {
                  image: require("./assets/imageCard1.png"),
                  title: `Sandwich de salami y ${"\n"} huevo`,
                  paragrah: "DOP $175",
                },
              ]}
            />

            <CardComponent
              item={[
                {
                  image: require("./assets/imageCard2.png"),
                  title: "Salami y queso",
                  paragrah: "DOP $440",
                },
              ]}
            />
          </View>

          <View className="mx-4 bg-[#F8F8F8]">
            <Text className="text-base">Entradas</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
