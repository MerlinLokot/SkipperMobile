import { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { Wordmark } from "@/components/Logo";
import { categories, quickTags } from "@/data/catalog";

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const goCatalog = (params) => router.push({ pathname: "/catalog", params: params || {} });

  return (
    <ScrollView
      className="flex-1 bg-[#F5F8FC] dark:bg-[#1b2226]"
      contentContainerStyle={{ paddingTop: insets.top + 12, paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-5">
        <Wordmark size={20} />

        <View className="mt-6 flex-row items-center gap-2 self-start rounded-full bg-[#E8F0FE] px-4 py-2 dark:bg-[#2c353a]">
          <View className="h-[6px] w-[6px] rounded-full bg-[#2563EB]" />
          <Text className="text-[13px] font-medium text-[#2563EB]">240+ экспертов на связи</Text>
        </View>

        <Text className="mt-4 text-[34px] font-extrabold leading-[40px] text-[#0D233B] dark:text-white">
          Найдём <Text className="text-[#2563EB]">специалиста</Text> для любой задачи
        </Text>
        <Text className="mt-3 text-[15px] leading-[22px] text-[#64748B] dark:text-gray-400">
          Опишите вопрос — от выбора профессии до разбора кейса на проекте — и мы подберём эксперта,
          который уже решал такое.
        </Text>

        <View
          style={{ elevation: 3 }}
          className="mt-5 flex-row items-center rounded-2xl bg-white py-[6px] pl-4 pr-[6px] dark:bg-[#2c353a]"
        >
          <Feather name="search" size={18} color="#94A3B8" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Например: переход в продакт"
            placeholderTextColor="#94A3B8"
            returnKeyType="search"
            onSubmitEditing={() => goCatalog({ q: query })}
            className="ml-2 flex-1 text-[14px] text-[#0D233B] dark:text-white"
          />
          <Pressable onPress={() => goCatalog({ q: query })} className="rounded-xl bg-[#2563EB] px-5 py-[10px] active:opacity-90">
            <Text className="text-[14px] font-semibold text-white">Найти</Text>
          </Pressable>
        </View>

        <View className="mt-4 flex-row flex-wrap items-center gap-2">
          <Text className="text-[14px] text-[#64748B] dark:text-gray-400">Часто ищут:</Text>
          {quickTags.map((t) => (
            <Pressable
              key={t.label}
              onPress={() => goCatalog({ topic: t.topic })}
              className="rounded-full border border-gray-200 bg-white px-[13px] py-[6px] active:opacity-80 dark:border-[#3a444a] dark:bg-[#2c353a]"
            >
              <Text className="text-[13px] text-[#0D233B] dark:text-gray-200">{t.label}</Text>
            </Pressable>
          ))}
        </View>

        <View className="mt-7 flex-row items-center">
          {[
            ["240+", "специалистов"],
            ["18", "направлений"],
            ["4.9", "средняя оценка"],
          ].map(([n, l], i) => (
            <View key={l} className="flex-row items-center">
              {i > 0 && <View className="mx-4 h-[34px] w-[1px] bg-gray-200 dark:bg-[#3a444a]" />}
              <View>
                <Text className="text-[22px] font-bold text-[#0D233B] dark:text-white">{n}</Text>
                <Text className="text-[12px] text-[#64748B] dark:text-gray-400">{l}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View className="mt-9 px-5">
        <View className="flex-row items-center gap-2">
          <View className="h-[14px] w-[14px] rounded-full border-2 border-[#2563EB]" />
          <Text className="text-[13px] font-semibold tracking-[1.5px] text-[#2563EB]">НАПРАВЛЕНИЯ</Text>
        </View>
        <Text className="mt-2 text-[24px] font-bold text-[#0D233B] dark:text-white">Выберите область — найдём лучших</Text>

        <View className="mt-4 flex-row flex-wrap justify-between">
          {categories.map((c) => (
            <Pressable
              key={c.topic}
              onPress={() => goCatalog({ topic: c.topic })}
              style={{ width: "48.5%", elevation: 1 }}
              className="mb-3 rounded-2xl border border-gray-100 bg-white p-4 active:opacity-90 dark:border-[#3a444a] dark:bg-[#2c353a]"
            >
              <View className="h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-[#E8F0FE] dark:bg-[#0D233B]">
                <Feather name={c.icon} size={22} color="#2563EB" />
              </View>
              <Text className="mt-3 text-[15px] font-semibold text-[#0D233B] dark:text-white">{c.nm}</Text>
              <Text className="mt-[2px] text-[12px] text-[#64748B] dark:text-gray-400">{c.count}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
