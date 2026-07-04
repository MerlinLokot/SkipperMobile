import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getInitials, getAvatarColor } from "@/utils/avatarColor";

export function ExpertCard({ expert, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{ elevation: 2 }}
      className="mb-4 rounded-2xl border border-slate-200 bg-white p-5 active:opacity-90"
    >
      <View className="h-12 w-12">
        <View
          style={{ backgroundColor: getAvatarColor(expert.id) }}
          className="h-12 w-12 items-center justify-center rounded-full"
        >
          <Text className="text-[13px] font-semibold text-white">
            {getInitials(expert.name)}
          </Text>
        </View>
        <View className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
      </View>

      <Text className="mt-4 text-[16px] font-semibold text-[#0D233B]">
        {expert.name}
      </Text>
      <Text className="mt-1 text-[13px] text-[#64748B]">
        {expert.specialty} · {expert.city}
      </Text>

      <View className="mt-3 flex-row items-center gap-1.5">
        <Ionicons name="star" size={14} color="#F59E0B" />
        <Text className="text-[13px] font-medium text-[#0D233B]">
          {expert.rating}
        </Text>
        <Text className="text-[13px] text-[#64748B]">
          · {expert.reviews} отзывов
        </Text>
      </View>

      <Text
        numberOfLines={2}
        className="mt-3 text-[13px] leading-[19px] text-[#64748B]"
      >
        {expert.description}
      </Text>

      <View className="mt-4 flex-row items-center justify-between">
        <View className="rounded-full bg-slate-100 px-3 py-1">
          <Text className="text-[12px] text-[#0D233B]">{expert.format}</Text>
        </View>
        <Text className="text-[14px] font-semibold text-[#2563EB]">
          {expert.price} ₽
        </Text>
      </View>
    </Pressable>
  );
}
