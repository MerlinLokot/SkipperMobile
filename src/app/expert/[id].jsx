import { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";

import { getExpert } from "@/data/catalog";

function SectionTitle({ children }) {
  return (
    <View className="mb-3 mt-6 flex-row items-center gap-2">
      <View className="h-[13px] w-[13px] rounded-full border-2 border-[#2563EB]" />
      <Text className="text-[12px] font-semibold uppercase tracking-[1.4px] text-[#2563EB]">{children}</Text>
    </View>
  );
}

export default function ExpertProfileScreen() {
  const { id } = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const expert = getExpert(id);
  const [revealed, setRevealed] = useState(false);

  if (!expert) {
    return (
      <View className="flex-1 items-center justify-center bg-[#F5F8FC]">
        <Text className="text-[#64748B]">Эксперт не найден</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#F5F8FC]">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="bg-[#0D233B] px-5 pb-6 pt-6">
          <View className="flex-row items-center gap-4">
            <View style={{ backgroundColor: expert.color }} className="h-[64px] w-[64px] items-center justify-center rounded-full">
              <Text className="text-[23px] font-bold text-white">{expert.initials}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-[22px] font-extrabold text-white">{expert.name}</Text>
              <Text className="mt-1 text-[14px] text-white/70">{expert.role}</Text>
              <View className="mt-2 flex-row items-center gap-[6px]">
                <Ionicons name="star" size={14} color="#F59E0B" />
                <Text className="text-[13px] text-white">{expert.rating} · {expert.reviews} отзывов</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="px-5">
          <SectionTitle>О специалисте</SectionTitle>
          <Text className="text-[15px] leading-[22px] text-[#0D233B]">{expert.bio}</Text>

          <SectionTitle>Компетенции</SectionTitle>
          <View className="gap-[10px]">
            {expert.comp.map((c) => (
              <View key={c} className="flex-row items-start gap-[10px]">
                <View className="mt-[1px] h-[18px] w-[18px] items-center justify-center rounded-full bg-[#E8F0FE]">
                  <Feather name="check" size={11} color="#2563EB" />
                </View>
                <Text className="flex-1 text-[14px] text-[#0D233B]">{c}</Text>
              </View>
            ))}
          </View>

          <SectionTitle>Темы консультаций</SectionTitle>
          <View className="flex-row flex-wrap gap-[8px]">
            {expert.topicsFull.map((t) => (
              <View key={t} className="rounded-full bg-[#E8F0FE] px-[11px] py-[5px]">
                <Text className="text-[12px] font-medium text-[#1D4ED8]">{t}</Text>
              </View>
            ))}
          </View>

          <SectionTitle>Опыт</SectionTitle>
          {expert.exp.map((x) => (
            <View key={x.rw} className="mb-4 border-l-2 border-[#E8F0FE] pl-4">
              <Text className="text-[11px] tracking-[0.5px] text-[#1D4ED8]">{x.yr}</Text>
              <Text className="mt-[2px] text-[14px] font-bold text-[#0D233B]">{x.rw}</Text>
              <Text className="mt-[2px] text-[13px] text-[#64748B]">{x.ds}</Text>
            </View>
          ))}

          <SectionTitle>Форматы и стоимость</SectionTitle>
          <View className="gap-[10px]">
            {expert.formats.map((f) => (
              <View key={f.fn} className="flex-row items-center justify-between rounded-xl border border-gray-100 bg-white px-[16px] py-[14px]">
                <View className="flex-1 pr-2">
                  <Text className="text-[14px] font-semibold text-[#0D233B]">{f.fn}</Text>
                  <Text className="mt-[2px] text-[12px] text-[#64748B]">{f.fd}</Text>
                </View>
                <Text className="text-[16px] font-bold text-[#0D233B]">{f.fp}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={{ paddingBottom: insets.bottom + 12 }} className="border-t border-gray-100 bg-white px-5 pt-4">
        {!revealed ? (
          <Pressable onPress={() => setRevealed(true)} className="items-center rounded-2xl bg-[#2563EB] py-[15px] active:opacity-90">
            <Text className="text-[15px] font-semibold text-white">Получить контакты специалиста</Text>
          </Pressable>
        ) : (
          <View className="flex-row items-center gap-2 rounded-2xl border border-[#2563EB] bg-[#E8F0FE] px-4 py-[14px]">
            <Feather name="phone" size={16} color="#1D4ED8" />
            <Text className="flex-1 text-[14px] font-semibold text-[#1D4ED8]">{expert.contact}</Text>
          </View>
        )}
        <Text className="mt-[10px] text-center text-[12px] text-[#64748B]">
          Специалист получит уведомление и зафиксирует консультацию
        </Text>
      </View>
    </View>
  );
}
