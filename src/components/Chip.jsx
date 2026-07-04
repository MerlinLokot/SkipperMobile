import { Pressable, Text } from "react-native";

export function Chip({ label, active, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className={`mb-2 mr-2 rounded-full px-4 py-2 ${active ? "bg-[#0D233B]" : "bg-slate-100"}`}
    >
      <Text
        className={`text-[13px] font-medium ${active ? "text-white" : "text-[#0D233B]"}`}
      >
        {label}
      </Text>
    </Pressable>
  );
}
