import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import { Wordmark } from "@/components/Logo";

const CATS = [
  { nm: "Карьера", icon: "compass" },
  { nm: "Продукт", icon: "layers" },
  { nm: "Разработка", icon: "code" },
  { nm: "Дизайн", icon: "pen-tool" },
  { nm: "Найм и HR", icon: "users" },
  { nm: "Стартапы", icon: "trending-up" },
];

const QUICK = ["Выбор профессии", "Подбор персонала", "Разбор проекта"];

export default function SearchScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 bg-[#F5F8FC]"
      contentContainerStyle={{ paddingTop: insets.top + 12, paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-5">
        <Wordmark size={20} />

        <View className="mt-6 flex-row items-center gap-2 self-start rounded-full bg-[#E8F0FE] px-4 py-2">
          <View className="h-[6px] w-[6px] rounded-full bg-[#2563EB]" />
          <Text className="text-[13px] font-medium text-[#2563EB]">
            240+ экспертов на связи
          </Text>
        </View>

        <Text className="mt-4 text-[34px] font-extrabold leading-[40px] text-[#0D233B]">
          Найдём <Text className="text-[#2563EB]">специалиста</Text> для любой
          задачи
        </Text>
        <Text className="mt-3 text-[15px] leading-[22px] text-[#64748B]">
          Опишите вопрос — от выбора профессии до разбора кейса на проекте — и
          мы подберём эксперта, который уже решал такое.
        </Text>

        {}
        <View className="mt-5 flex-row items-center rounded-2xl bg-white py-[6px] pl-4 pr-[6px]">
          <Feather name="search" size={18} color="#94A3B8" />
          <TextInput
            placeholder="Например: переход в продакт"
            placeholderTextColor="#94A3B8"
            className="ml-2 flex-1 text-[14px] text-[#0D233B]"
          />
          <Pressable className="rounded-xl bg-[#2563EB] px-5 py-[10px]">
            <Text className="text-[14px] font-semibold text-white">Найти</Text>
          </Pressable>
        </View>

        <View className="mt-4 flex-row flex-wrap items-center gap-2">
          <Text className="text-[14px] text-[#64748B]">Часто ищут:</Text>
          {QUICK.map((t) => (
            <View
              key={t}
              className="rounded-full border border-gray-200 bg-white px-[13px] py-[6px]"
            >
              <Text className="text-[13px] text-[#0D233B]">{t}</Text>
            </View>
          ))}
        </View>

        <View className="mt-7 flex-row items-center">
          {[
            ["240+", "специалистов"],
            ["18", "направлений"],
            ["4.9", "средняя оценка"],
          ].map(([n, l], i) => (
            <View key={l} className="flex-row items-center">
              {i > 0 && <View className="mx-4 h-[34px] w-[1px] bg-gray-200" />}
              <View>
                <Text className="text-[22px] font-bold text-[#0D233B]">
                  {n}
                </Text>
                <Text className="text-[12px] text-[#64748B]">{l}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View className="mt-9 px-5">
        <View className="flex-row items-center gap-2">
          <View className="h-[14px] w-[14px] rounded-full border-2 border-[#2563EB]" />
          <Text className="text-[13px] font-semibold tracking-[1.5px] text-[#2563EB]">
            НАПРАВЛЕНИЯ
          </Text>
        </View>
        <Text className="mt-2 text-[24px] font-bold text-[#0D233B]">
          Выберите область — найдём лучших
        </Text>

        <View className="mt-4 flex-row flex-wrap justify-between">
          {CATS.map((c) => (
            <View
              key={c.nm}
              style={{ width: "48.5%" }}
              className="mb-3 rounded-2xl border border-gray-100 bg-white p-4"
            >
              <View className="h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-[#E8F0FE]">
                <Feather name={c.icon} size={22} color="#2563EB" />
              </View>
              <Text className="mt-3 text-[15px] font-semibold text-[#0D233B]">
                {c.nm}
              </Text>
              <Text className="mt-[2px] text-[12px] text-[#64748B]">
                эксперты
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
