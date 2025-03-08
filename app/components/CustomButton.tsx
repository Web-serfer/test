import React from "react";
import { Link } from "expo-router";
import { TouchableOpacity, Text, StyleProp, TextStyle } from "react-native";

interface CustomButtonProps {
  href: string;
  text: string;
  bgColor?: string;
  textStyle?: StyleProp<TextStyle>;
}

export default function CustomButton({
  href,
  text,
  bgColor = "bg-blue-500",
  textStyle,
}: CustomButtonProps) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity
        className={`${bgColor} py-3 px-6 rounded-full self-center`}
        activeOpacity={0.7}
      >
        <Text className="text-white text-lg text-center" style={textStyle}>
          {text}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}
