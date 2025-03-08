import React from "react";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const DetailsMovies = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-xl font-bold text-blue-600">
        Movies details: {id}
      </Text>
    </View>
  );
};

export default DetailsMovies;
