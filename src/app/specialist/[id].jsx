import { View, Text, ScrollView, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";

import { StateView } from "@/components/StateView";
import { useFetch } from "@/hooks/useFetch";
import { getExpertById } from "@/api/experts";
import { getInitials, getAvatarColor } from "@/utils/avatarColor";

export default function SpecialistScreen() {
  const { id } = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const { data: expert, loading, error, reload } = useFetch(() => getExpertById(id), [id]);

  if (loading || error) {
    return (
      <View className="flex-1 bg-[#F5F8FC]">
        <StateView loading={loading} error={error} onRetry={reload} />
      </View>
    );
  }

  if (!expert) {
    return (
      <View className="flex-1 items-center justify-center bg-[#F5F8FC]">
        <Text className="text-[#64748B]">Специалист не найден.</Text>
      </View>
    );
  }

  const color = getAvatarColor(expert.id);

  return (
    <View className="flex-1 bg-[#F5F8FC]">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20, paddingBottom: insets.bottom + 24 }}>
        <View className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          {/* цветная шапка в тон аватара */}
          <View style={{ backgroundColor: color }} className="h-24" />

          <View className="px-5 pb-8">
            <View className="-mt-12 flex-row items-end gap-4">
              <View className="h-24 w-24 rounded-full bg-white p-1.5" style={{ elevation: 4 }}>
                <View style={{ backgroundColor: color }} className="h-full w-full items-center justify-center rounded-full">
                  <Text className="text-[28px] font-bold text-white">{getInitials(expert.name)}</Text>
                </View>
                <View className="absolute bottom-1.5 right-1.5 h-4 w-4 rounded-full border-2 border-white bg-emerald-400" />
              </View>
              <View className="flex-1 pb-1">
                <Text className="text-[22px] font-bold text-[#0D233B]">{expert.name}</Text>
                <Text className="mt-1 text-[14px] text-[#64748B]">{expert.specialty}</Text>
              </View>
            </View>

            {/* рейтинг · город · тема */}
            <View className="mt-6 flex-row flex-wrap items-center gap-x-5 gap-y-2">
              <View className="flex-row items-center gap-1.5">
                <Ionicons name="star" size={14} color="#F59E0B" />
                <Text className="text-[14px] font-semibold text-[#0D233B]">{expert.rating}</Text>
                <Text className="text-[14px] text-[#64748B]">· {expert.reviews} отзывов</Text>
              </View>
              <View className="flex-row items-center gap-1.5">
                <Feather name="map-pin" size={14} color="#64748B" />
                <Text className="text-[14px] text-[#64748B]">{expert.city}</Text>
              </View>
              <View className="rounded-full bg-[#E8F0FE] px-3 py-1">
                <Text className="text-[12px] font-medium text-[#2563EB]">{expert.topic}</Text>
              </View>
            </View>

            {/* о специалисте */}
            <View className="mt-8 border-t border-slate-100 pt-8">
              <Text className="text-[12px] font-semibold tracking-[1px] text-[#64748B]">О СПЕЦИАЛИСТЕ</Text>
              <Text className="mt-3 text-[15px] leading-[23px] text-[#0D233B]">{expert.description}</Text>
            </View>

            {/* формат · стоимость */}
            <View className="mt-8 flex-row gap-3">
              <View className="flex-1 rounded-2xl bg-slate-50 p-4">
                <Text className="text-[12px] text-[#64748B]">Формат</Text>
                <Text className="mt-1 text-[15px] font-semibold text-[#0D233B]">{expert.format}</Text>
              </View>
              <View className="flex-1 rounded-2xl bg-slate-50 p-4">
                <Text className="text-[12px] text-[#64748B]">Стоимость</Text>
                <Text className="mt-1 text-[15px] font-semibold text-[#2563EB]">{expert.price} ₽</Text>
              </View>
            </View>

            {/* CTA */}
            <View className="mt-8 border-t border-slate-100 pt-8">
              <Pressable className="items-center rounded-full bg-[#2563EB] py-[15px] active:opacity-90">
                <Text className="text-[15px] font-semibold text-white">Записаться на консультацию</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
