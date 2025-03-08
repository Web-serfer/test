import "../global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontLoaded, fontError] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
  });

  useEffect(() => {
    if (fontLoaded || fontError) {
      setTimeout(() => {
        setIsLoading(false);
        SplashScreen.hideAsync();
      }, 2000);
    }
  }, [fontLoaded, fontError]);

  if (fontError) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-red-500 text-lg">Ошибка загрузки шрифтов</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#007AFF" />
        <Text className="mt-4 text-gray-600">Загрузка...</Text>
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      {/* Главный экран */}
      <Stack.Screen name="index" />

      {/* 404 страница */}
      <Stack.Screen
        name="+not-found"
        options={{ title: "Страница не найдена" }}
      />
    </Stack>
  );
}
