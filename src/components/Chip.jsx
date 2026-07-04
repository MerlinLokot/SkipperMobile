import { Pressable, Text } from "react-native";

export function Chip({ label, active, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className={`mr-2 rounded-full border px-[15px] py-[8px] ${
        active
          ? "border-[#0D233B] bg-[#0D233B] dark:border-white dark:bg-white"
          : "border-gray-200 bg-white dark:border-[#3a444a] dark:bg-[#2c353a]"
      }`}
    >
      <Text
        className={`text-[14px] font-medium ${
          active ? "text-white dark:text-[#0D233B]" : "text-[#0D233B] dark:text-gray-200"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}
