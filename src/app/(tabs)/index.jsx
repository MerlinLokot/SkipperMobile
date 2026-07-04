import { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, Keyboard } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { Wordmark } from "@/components/Logo";

const heroAvatars = [
  { id: 1, initials: "МК", color: "#0D233B" },
  { id: 2, initials: "АС", color: "#111827" },
  { id: 3, initials: "ДВ", color: "#3B82F6" },
  { id: 4, initials: "ОН", color: "#0D233B" },
  { id: 5, initials: "ИЛ", color: "#2563EB" },
  { id: 6, initials: "СТ", color: "#60A5FA" },
  { id: 7, initials: "ТМ", color: "#2563EB" },
  { id: 8, initials: "РК", color: "#0D233B" },
  { id: 9, initials: "ЕВ", color: "#3B82F6" },
];

const quickTags = [
  { label: "Выбор профессии", topic: "Карьера" },
  { label: "Подбор персонала", topic: "HR" },
  { label: "Разбор проекта", topic: "IT" },
];

const stats = [
  ["240+", "специалистов"],
  ["18", "направлений"],
  ["4.9", "средняя оценка"],
];

const categories = [
  { name: "Карьера", count: "42 эксперта", icon: "compass", topic: "Карьера" },
  { name: "Продукт", count: "31 эксперт", icon: "layers", topic: "IT" },
  { name: "Разработка", count: "58 экспертов", icon: "code", topic: "IT" },
  { name: "Дизайн", count: "27 экспертов", icon: "pen-tool", topic: "Дизайн" },
  { name: "Найм и HR", count: "34 эксперта", icon: "users", topic: "HR" },
  { name: "Стартапы", count: "22 эксперта", icon: "trending-up", topic: "Стартапы" },
];

const steps = [
  ["1", "Опишите задачу", "Введите запрос или выберите направление в каталоге."],
  ["2", "Сравните профили", "Специальность, город, рейтинг и формат — всё на виду."],
  ["3", "Выберите формат", "Звонок, переписка, разбор материалов или серия встреч."],
  ["4", "Свяжитесь", "Откройте профиль и запишитесь на консультацию."],
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const goCatalog = (params) => {
    Keyboard.dismiss();
    router.navigate({ pathname: "/catalog", params: params || {} });
  };

  return (
    <ScrollView
      className="flex-1 bg-[#F5F8FC]"
      contentContainerStyle={{ paddingTop: insets.top + 12, paddingBottom: 24 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {/* ==== HERO ==== */}
      <View className="px-5">
        <Wordmark size={20} />

        <View className="mt-6 flex-row items-center gap-2 self-start rounded-full bg-[#E8F0FE] px-4 py-2">
          <View className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          <Text className="text-[13px] font-medium text-[#2563EB]">240+ проверенных экспертов на связи</Text>
        </View>

        <Text className="mt-4 text-[34px] font-extrabold leading-[40px] text-[#0D233B]">
          Найдём <Text className="text-[#2563EB]">специалиста</Text> для любой задачи
        </Text>
        <Text className="mt-3 text-[15px] leading-[22px] text-[#64748B]">
          Опишите свой вопрос — от выбора профессии до разбора кейса на проекте — и мы подберём
          эксперта, который уже решал такое.
        </Text>

        <View
          style={{ elevation: 3 }}
          className="mt-6 flex-row items-center rounded-full bg-white py-1.5 pl-5 pr-1.5"
        >
          <Feather name="search" size={18} color="#94A3B8" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Например: переход в продакт-менеджмент"
            placeholderTextColor="#94A3B8"
            returnKeyType="search"
            onSubmitEditing={() => goCatalog({ q: query })}
            className="ml-2 flex-1 text-[14px] text-[#0D233B]"
          />
          <Pressable onPress={() => goCatalog({ q: query })} className="rounded-full bg-[#2563EB] px-6 py-[10px] active:opacity-90">
            <Text className="text-[14px] font-semibold text-white">Найти</Text>
          </Pressable>
        </View>

        <View className="mt-4 flex-row flex-wrap items-center gap-2">
          <Text className="text-[14px] text-[#64748B]">Часто ищут:</Text>
          {quickTags.map((t) => (
            <Pressable
              key={t.label}
              onPress={() => goCatalog({ topic: t.topic })}
              className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 active:bg-[#2563EB]"
            >
              <Text className="text-[13px] text-[#0D233B]">{t.label}</Text>
            </Pressable>
          ))}
        </View>

        <View className="mt-8 flex-row items-center">
          {stats.map(([n, l], i) => (
            <View key={l} className="flex-row items-center">
              {i > 0 && <View className="mx-5 h-9 w-px bg-slate-200" />}
              <View>
                <Text className="text-[22px] font-bold text-[#0D233B]">{n}</Text>
                <Text className="text-[13px] text-[#64748B]">{l}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Декоративный круг с аватарами */}
        <View className="mt-10 items-center">
          <View className="relative h-[240px] w-[240px] items-center justify-center rounded-full border-[3px] border-[#0D233B]">
            <View className="w-[190px] flex-row flex-wrap justify-center gap-2.5">
              {heroAvatars.map((a) => (
                <View
                  key={a.id}
                  style={{ backgroundColor: a.color }}
                  className="h-12 w-12 items-center justify-center rounded-full"
                >
                  <Text className="text-[13px] font-semibold text-white">{a.initials}</Text>
                </View>
              ))}
            </View>

            <View className="absolute -top-3 left-0 flex-row items-center gap-2 rounded-2xl bg-white px-3 py-2" style={{ elevation: 4 }}>
              <View className="h-[22px] w-[22px] items-center justify-center rounded-full bg-[#2563EB]">
                <Feather name="check" size={12} color="#fff" />
              </View>
              <View>
                <Text className="text-[13px] font-semibold text-[#0D233B]">Найдено 6</Text>
                <Text className="text-[11px] text-[#64748B]">по вашему запросу</Text>
              </View>
            </View>

            <View className="absolute bottom-6 left-0 flex-row items-center gap-2 rounded-2xl bg-white px-3 py-2" style={{ elevation: 4 }}>
              <View className="h-[22px] w-[22px] items-center justify-center rounded-full bg-[#2563EB]">
                <Feather name="check" size={12} color="#fff" />
              </View>
              <View>
                <Text className="text-[13px] font-semibold text-[#0D233B]">На связи сейчас</Text>
                <Text className="text-[11px] text-[#64748B]">отвечает за ~2 часа</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* ==== НАПРАВЛЕНИЯ ==== */}
      <View className="mt-12 px-5">
        <View className="items-center">
          <View className="flex-row items-center gap-2">
            <View className="h-4 w-4 rounded-full border-2 border-[#2563EB]" />
            <Text className="text-[13px] font-semibold tracking-[1.6px] text-[#2563EB]">НАПРАВЛЕНИЯ</Text>
          </View>
          <Text className="mt-3 text-center text-[26px] font-bold text-[#0D233B]">
            Выберите область — найдём в ней лучших
          </Text>
        </View>

        <View className="mt-6 flex-row flex-wrap justify-between">
          {categories.map((c) => (
            <Pressable
              key={c.name}
              onPress={() => goCatalog({ topic: c.topic })}
              style={{ width: "48.5%", elevation: 1 }}
              className="mb-3 items-center rounded-2xl border border-slate-200 bg-white p-5 active:opacity-90"
            >
              <View className="h-[46px] w-[46px] items-center justify-center rounded-2xl bg-[#E8F0FE]">
                <Feather name={c.icon} size={22} color="#2563EB" />
              </View>
              <Text className="mt-3 text-[14px] font-semibold text-[#0D233B]">{c.name}</Text>
              <Text className="mt-1 text-[12px] text-[#64748B]">{c.count}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* ==== КАК ЭТО РАБОТАЕТ ==== */}
      <View className="mt-6 bg-[#0D233B] px-5 py-14">
        <View className="flex-row items-center gap-2">
          <View className="h-4 w-4 rounded-full border-2 border-[#7DA6FF]" />
          <Text className="text-[13px] font-semibold tracking-[1.6px] text-[#7DA6FF]">КАК ЭТО РАБОТАЕТ</Text>
        </View>
        <Text className="mt-4 text-[28px] font-bold leading-[34px] text-white">
          Четыре шага от вопроса до консультации
        </Text>

        <View className="mt-8 gap-7">
          {steps.map(([n, title, text]) => (
            <View key={n}>
              <View className="h-10 w-10 items-center justify-center rounded-full border border-[#3B4A63]">
                <Text className="text-[14px] font-semibold text-[#7DA6FF]">{n}</Text>
              </View>
              <Text className="mt-3 text-[18px] font-semibold text-white">{title}</Text>
              <Text className="mt-2 text-[14px] text-[#94A3B8]">{text}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* ==== ПОДВАЛ ==== */}
      <View className="bg-[#0D233B] px-5 pb-10 pt-2">
        <View className="border-t border-white/10 pt-6">
          <Text className="text-[18px] font-bold text-white">
            Profi<Text className="text-[#5B8DEF]">Finder</Text>
          </Text>
          <Text className="mt-2 text-[13px] leading-[19px] text-[#94A3B8]">
            Найдём специалиста для любой задачи — от карьеры до сложного кейса на проекте.
          </Text>
          <Text className="mt-5 text-[12px] text-[#64748B]">© 2025 ProfiFinder · учебный прототип</Text>
        </View>
      </View>
    </ScrollView>
  );
}
