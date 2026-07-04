import { Pressable, Text } from "react-native";

export function Chip({ label, active, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className={`mr-2 rounded-full border px-[15px] py-[8px] ${
        active ? "border-[#0D233B] bg-[#0D233B]" : "border-gray-200 bg-white"
      }`}
    >
      <Text className={`text-[14px] font-medium ${active ? "text-white" : "text-[#0D233B]"}`}>{label}</Text>
    </Pressable>
  );
}
