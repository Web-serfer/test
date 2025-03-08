import { Link } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";

export default function SignInScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-300">
      <Text className="text-white font-bold text-2xl mb-4">Sign In Screen</Text>

      {/* Кнопка "Назад" */}
      <Link href="/" asChild>
        <TouchableOpacity className="px-4 py-2 bg-red-500 rounded-lg">
          <Text className="text-white font-semibold text-lg">Go Back</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
