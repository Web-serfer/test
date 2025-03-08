import React from "react";
import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const Explore = () => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      {/* Заголовок */}
      <Text className="text-2xl font-bold text-blue-600 mb-12">
        Explore Screen
      </Text>

      {/* Кнопка для перехода на главный экран */}
      <Link href="/" asChild>
        <TouchableOpacity
          className="bg-green-500 py-4 px-8 rounded-full active:bg-blue-600"
          activeOpacity={0.7}
        >
          <Text className="text-white text-lg font-medium text-center">
            На главную
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Explore;
