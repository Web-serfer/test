import React from "react";
import { Link, useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import CustomButton from "./components/CustomButton";

export default function HomeScreen() {
  const router = useRouter();

  const handleTestError = () => {
    router.push("/+not-found");
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      {/* Заголовок с кастомным шрифтом */}
      <Text
        className="text-xl mb-8 text-gray-800"
        style={{ fontFamily: "Rubik-Bold" }}
      >
        Welcome React Native !!!
      </Text>

      {/* Контейнер для кнопок */}
      <View className="w-full max-w-xs gap-5">
        {/* Кнопка для Onboarding */}
        <CustomButton
          href="/onboarding"
          text="Go to Onboarding"
          bgColor="bg-green-500"
          textStyle={{ fontFamily: "Rubik-SemiBold" }}
        />

        {/* Кнопка для Avengers movie */}
        <Link href="/movies/avengers" asChild>
          <TouchableOpacity
            className="bg-blue-500 py-4 rounded-xl items-center"
            style={{ elevation: 3 }}
            accessibilityRole="button"
            accessibilityLabel="Avengers Movie Details"
          >
            <Text
              className="text-white text-lg"
              style={{ fontFamily: "Rubik-Medium" }}
            >
              Avengers Movie Details
            </Text>
          </TouchableOpacity>
        </Link>

        {/* Тестовая кнопка для 404 */}
        <TouchableOpacity
          className="bg-red-500 py-4 rounded-xl items-center"
          onPress={handleTestError}
          accessibilityRole="button"
          accessibilityLabel="Test 404 Page"
        >
          <Text
            className="text-white text-lg"
            style={{ fontFamily: "Rubik-Medium" }}
          >
            Test 404 Page
          </Text>
        </TouchableOpacity>
      </View>

      {/* Вспомогательный текст */}
      <Text
        className="text-gray-500 mt-8 px-4 text-center"
        style={{ fontFamily: "Rubik-SemiBold" }}
      >
        Explore our amazing features and movie collection
      </Text>
    </View>
  );
}
