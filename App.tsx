import {
  ArrowLeft2,
  Clock,
  Eye,
  Heart,
  SearchNormal,
  ShoppingBag,
  Star1,
  UserSquare,
} from "iconsax-react-native";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [isFollow, setIsFollow] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="light"/>
        <ScrollView className="flex-1 bg-white">
          <View className="h-[300px]  relative">
            <ImageBackground
              className=" mt-0 h-full w-full absolute"
              resizeMode="cover"
              source={require("./assets/imgBackground.png")}
            />

            <TouchableOpacity className="absolute justify-center items-center bg-slate-50 p-2 top-16 left-4 rounded-3xl">
              <Text>
                <ArrowLeft2
                  className="justify-center"
                  size="32"
                  color="black"
                />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="absolute p-3 border right-6 top-28 bg-[#232323] rounded-lg"
            >
              <Text className="text-white text-base text-center">
                Reservar Mesa
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 items-center -mt-[110px] bg-white rounded-xl ml-[2px]">
            <View className="h-[100px] w-full relative shadow-2x">
              <Image
                className="w-16 h-16 rounded-full object-cover absolute bottom-[76px] left-6"
                source={require("./assets/imageProfile.png")}
              />
            </View>
            <View className="flex-row items-center justify-between w-full px-4">
              <View className="flex-[1/3] -mt-20">
                <Text className="text-2xl font-normal">
                  Barra Junior Payan - Romulo Betancourt
                </Text>
                <View className="flex-row items-center justify-end w-full p-1  bottom-14">
                  <TouchableOpacity
                    onPress={() => setIsFollow(!isFollow)}
                    className="flex-row p-1 px-3 border  border-[#F8F8F8] bg-gray-100 items-center rounded-xl justify-end"
                  >
                    {isFollow ? (
                      <Heart size="24" color="red" />
                    ) : (
                      <Heart size="24" color="#232323" />
                    )}
                    <Text className="text-[#232323] p-1">
                      {isFollow ? "Siguiendo" : "Seguir"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View className=" flex-row items-center justify-center -mt-11 pr-10">
              <View className="flex-1 flex-row items-center gap-3 justify-center">
                <View className="flex-row gap-1 items-center justify-center">
                  <Star1 size="12" color="black" />
                  <Text className="text-[#424242]">4.3</Text>
                </View>
                <View className="flex-row gap-1 items-center justify-center">
                  <Text className="text-center items-center">.</Text>
                  <Text className="text-[#424242]">
                    Abiertos Hasta las 8:30 PM
                  </Text>
                </View>
                <View className="flex-row gap-1 items-center justify-center">
                  <UserSquare size="16" color="black" />
                  <Text className="text-[#424242]">Seguidores 450</Text>
                </View>
              </View>
            </View>

            <View className="flex-[1/3] flex-row items-center justify-between w-11/12 mt-4  overflow-hidden px-3 border-transparent rounded-3xl bg-gray-200">
              <TouchableOpacity className="p-2 items-center justify-center border-transparent rounded-3xl">
                <Feather name="shopping-bag" size={28} color="black" />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row gap-1 items-center bg-[#232323] rounded-full mt-[1px] py-2  px-5">
                <MaterialIcons name="delivery-dining" size={30} color="white" />
                <Text className="text-white">Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity className="justify-center items-center">
                <MaterialIcons name="local-dining" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <View className="flex-row w-full justify-around mt-3 p-2 bg-gray-100 ">
              <View className="items-center justify-between px-4">
                <View className="flex-row gap-1 items-center justify-center">
                  <Clock size="20" color="black" />

                  <Text className="text-base text-[#232323] font-semibold">
                    10-25 Min
                  </Text>
                </View>
                <Text className="text-gray-500">Tiempo de envio</Text>
              </View>
              <View className="items-center justify-between px-4">
                <Text className="text-lg font-medium text-gray-300">|</Text>
              </View>
              <View className="items-center justify-between  px-4">
                <View className="flex-row gap-1 items-center justify-center">
                  <Clock size="20" color="black" />

                  <Text className="text-base text-[#232323] font-semibold">
                    DOP $60.00
                  </Text>
                </View>
                <Text className="text-gray-500">Costo de entrega</Text>
              </View>
            </View>
            <View className="flex-row items-center bg-[#F8F8F8] rounded-3xl gap-2 w-11/12 mt-4 px-3 py-2">
              <SearchNormal size="26" color="black" />
              <TextInput
                placeholder="Busca Por producto"
                className="text-black"
              />
            </View>

            <View className="flex-row items-center justify-between w-full mt-4 p-2">
              <TouchableOpacity className="items-center  border rounded-lg  bg-[#232323] w-[28%]  p-2  justify-center">
                <Text className="text-2xl font-normal text-white">Promos</Text>
              </TouchableOpacity>

              <TouchableOpacity className="items-center w-4/12  bg-[#F8F8F8] p-2   justify-center">
                <Text className="text-2xl font-normal text-black">Combos</Text>
              </TouchableOpacity>

              <TouchableOpacity className="items-center bg-[#F8F8F8] w-4/12 p-2   justify-center">
                <Text className="text-2xl font-normal text-black">Pierna</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-evenly w-full mt-4 p-2">
              <TouchableOpacity className="items-start w-[200px]  rounded-lg   p-2  justify-center">
                <Image
                  className="w-[178px] h-[148px]   rounded-sm "
                  source={require("./assets/imageCard1.png")}
                />
                <Text className="text-lg font-semibold mt-3 text-[#010F07]">
                  Sandwich de salami y huevo
                </Text>
                <Text className="text-sm font-normal text-gray-600 mr-28">
                  DOP $175
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="items-start w-[200px] -mt-6 rounded-lg  p-2  justify-center">
                <Image
                  className="w-[180px] h-[148px]   rounded-sm"
                  source={require("./assets/imageCard2.png")}
                />
                <Text className="text-lg font-semibold mt-3 text-[#010F07]">
                  Salami y queso
                </Text>
                <Text className="text-sm font-normal text-gray-600 mr-28">
                  DOP $440
                </Text>
              </TouchableOpacity>
            </View>

            <View className="w-full -mt-0  border border-[#F8F8F8]">
              <Text className="pl-3 text-xl font-semibold text-black">
                Entradas
              </Text>
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default App;
