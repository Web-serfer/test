import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function NotFoundScreen() {
  const params = useLocalSearchParams();
  const attemptedRoute = params?.missing?.[0] || "unknown";

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      <Text className="text-3xl font-bold text-red-600 mb-4">404</Text>
      <Text className="text-lg text-gray-800 mb-2">
        Страница "{attemptedRoute}" не найдена
      </Text>

      <Link href="/" asChild>
        <TouchableOpacity className="bg-blue-500 py-2 px-6 rounded-full mt-4">
          <Text className="text-white text-lg font-medium">
            Вернуться на главную
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
