import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";

const CARDS = [
  {
    initials: "МК", color: "#2563EB", name: "Марина Ковалёва",
    role: "Продукт-менеджер · Москва", rating: "4.9", reviews: "87",
    tags: ["Продукт-менеджмент", "Карьерный трек"],
    short: "Помогу перейти в продакт-менеджмент и собрать карьерный трек.",
    fmtLabel: "Видеозвонок · 60 мин", price: "3 500",
  },
  {
    initials: "АС", color: "#0D233B", name: "Артём Соколов",
    role: "Head of HR · Санкт-Петербург", rating: "5.0", reviews: "64",
    tags: ["Подбор персонала", "Собеседования"],
    short: "Разберём вакансию, воронку найма или подготовку к собеседованию.",
    fmtLabel: "Переписка + звонок", price: "2 800",
  },
  {
    initials: "ДВ", color: "#3B82F6", name: "Даниил Верещагин",
    role: "Staff Engineer · удалённо", rating: "4.8", reviews: "52",
    tags: ["Архитектура", "Code review"],
    short: "Пришлите архитектуру или код — вернусь с письменным разбором.",
    fmtLabel: "Разбор материалов", price: "4 000",
  },
];

const TOPICS = ["Все", "Карьера", "Продукт", "Разработка", "Дизайн", "Найм и HR"];
const FORMATS = ["Любой", "Видеозвонок", "Переписка", "Разбор материалов"];

function Chip({ label, active }) {
  return (
    <View
      className={`mr-2 rounded-full border px-[15px] py-[8px] ${
        active ? "border-[#0D233B] bg-[#0D233B]" : "border-gray-200 bg-white"
      }`}
    >
      <Text className={`text-[14px] font-medium ${active ? "text-white" : "text-[#0D233B]"}`}>{label}</Text>
    </View>
  );
}

export default function CatalogScreen() {
  const insets = useSafeAreaInsets();
  const [topic, setTopic] = useState("Все");

  return (
    <ScrollView
      className="flex-1 bg-[#F5F8FC]"
      contentContainerStyle={{ paddingTop: insets.top + 8, paddingHorizontal: 20, paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="mb-1 flex-row items-center gap-2">
        <View className="h-[14px] w-[14px] rounded-full border-2 border-[#2563EB]" />
        <Text className="text-[13px] font-semibold tracking-[1.5px] text-[#2563EB]">КАТАЛОГ</Text>
      </View>
      <Text className="text-[28px] font-bold text-[#0D233B]">Кто готов помочь сейчас</Text>

      <Text className="mb-2 mt-4 text-[12px] uppercase tracking-[1px] text-[#64748B]">Тема</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-1 px-1">
        {TOPICS.map((t) => <Chip key={t} label={t} active={topic === t} />)}
      </ScrollView>

      <Text className="mb-2 mt-4 text-[12px] uppercase tracking-[1px] text-[#64748B]">Формат</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-1 px-1">
        {FORMATS.map((f) => <Chip key={f} label={f} active={f === "Любой"} />)}
      </ScrollView>

      <Text className="mb-4 mt-5 text-[13px] text-[#64748B]">Найдено: {CARDS.length} специалиста</Text>

      {CARDS.map((e) => (
        <View key={e.name} className="mb-[16px] rounded-[18px] border border-gray-100 bg-white p-[18px]">
          <View className="flex-row items-start gap-3">
            <View style={{ backgroundColor: e.color }} className="h-[52px] w-[52px] items-center justify-center rounded-full">
              <Text className="text-[18px] font-bold text-white">{e.initials}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-[16px] font-bold text-[#0D233B]">{e.name}</Text>
              <Text className="mt-[2px] text-[13px] text-[#64748B]">{e.role}</Text>
              <View className="mt-[6px] flex-row items-center gap-[4px]">
                <Ionicons name="star" size={13} color="#F59E0B" />
                <Text className="text-[13px] font-semibold text-[#0D233B]">{e.rating}</Text>
                <Text className="text-[13px] text-[#64748B]">· {e.reviews} отзывов</Text>
              </View>
            </View>
          </View>

          <View className="my-[14px] h-[1px] bg-gray-100" />

          <View className="mb-[12px] flex-row flex-wrap gap-[7px]">
            {e.tags.map((t) => (
              <View key={t} className="rounded-full bg-[#E8F0FE] px-[11px] py-[5px]">
                <Text className="text-[12px] font-medium text-[#1D4ED8]">{t}</Text>
              </View>
            ))}
          </View>

          <Text className="mb-[14px] text-[14px] leading-[20px] text-[#64748B]">{e.short}</Text>

          <View className="flex-row items-center justify-between border-t border-gray-100 pt-[14px]">
            <View className="flex-1 flex-row items-center gap-[6px] pr-2">
              <Feather name="video" size={14} color="#2563EB" />
              <Text className="text-[13px] text-[#64748B]" numberOfLines={1}>{e.fmtLabel}</Text>
            </View>
            <Text className="text-[16px] font-bold text-[#0D233B]">{e.price} ₽</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
