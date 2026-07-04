import { View, Text, Pressable } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export function ExpertCard({ expert, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{ elevation: 2 }}
      className="mb-[16px] rounded-[18px] border border-gray-100 bg-white p-[18px] active:opacity-90 dark:border-[#3a444a] dark:bg-[#2c353a]"
    >
      <View className="flex-row items-start gap-3">
        <View className="relative">
          <View style={{ backgroundColor: expert.color }} className="h-[52px] w-[52px] items-center justify-center rounded-full">
            <Text className="text-[18px] font-bold text-white">{expert.initials}</Text>
          </View>
          <View className="absolute -bottom-[1px] -right-[1px] h-[15px] w-[15px] rounded-full border-2 border-white bg-[#2563EB] dark:border-[#2c353a]" />
        </View>
        <View className="flex-1">
          <Text className="text-[16px] font-bold text-[#0D233B] dark:text-white">{expert.name}</Text>
          <Text className="mt-[2px] text-[13px] text-[#64748B] dark:text-gray-400">{expert.role}</Text>
          <View className="mt-[6px] flex-row items-center gap-[4px]">
            <Ionicons name="star" size={13} color="#F59E0B" />
            <Text className="text-[13px] font-semibold text-[#0D233B] dark:text-white">{expert.rating}</Text>
            <Text className="text-[13px] text-[#64748B] dark:text-gray-400">· {expert.reviews} отзывов</Text>
          </View>
        </View>
      </View>

      <View className="my-[14px] h-[1px] bg-gray-100 dark:bg-[#3a444a]" />

      <View className="mb-[12px] flex-row flex-wrap gap-[7px]">
        {expert.tags.map((t) => (
          <View key={t} className="rounded-full bg-[#E8F0FE] px-[11px] py-[5px] dark:bg-[#0D233B]">
            <Text className="text-[12px] font-medium text-[#1D4ED8] dark:text-[#93B4FF]">{t}</Text>
          </View>
        ))}
      </View>

      <Text className="mb-[14px] text-[14px] leading-[20px] text-[#64748B] dark:text-gray-400">{expert.short}</Text>

      <View className="flex-row items-center justify-between border-t border-gray-100 pt-[14px] dark:border-[#3a444a]">
        <View className="flex-1 flex-row items-center gap-[6px] pr-2">
          <Feather name="video" size={14} color="#2563EB" />
          <Text className="text-[13px] text-[#64748B] dark:text-gray-400" numberOfLines={1}>{expert.fmtLabel}</Text>
        </View>
        <Text className="text-[16px] font-bold text-[#0D233B] dark:text-white">
          {expert.price} ₽<Text className="text-[12px] font-medium text-[#64748B] dark:text-gray-400"> / {expert.per}</Text>
        </Text>
      </View>
    </Pressable>
  );
}
