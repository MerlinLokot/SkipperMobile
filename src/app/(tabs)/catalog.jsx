import { useMemo, useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";

import { Chip } from "@/components/Chip";
import { ExpertCard } from "@/components/ExpertCard";
import { experts, topicFilters, formatFilters } from "@/data/catalog";

const plural = (n) => {
  const m = n % 10, d = n % 100;
  if (m === 1 && d !== 11) return "специалист";
  if (m >= 2 && m <= 4 && (d < 10 || d >= 20)) return "специалиста";
  return "специалистов";
};

export default function CatalogScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const params = useLocalSearchParams();

  const [topic, setTopic] = useState("all");
  const [format, setFormat] = useState("all");
  const [q, setQ] = useState("");

  useEffect(() => {
    if (params.topic) setTopic(params.topic);
    if (params.q !== undefined) setQ(params.q);
  }, [params.topic, params.q]);

  const list = useMemo(() => {
    const query = (q || "").trim().toLowerCase();
    return experts.filter((e) => {
      const byTopic = topic === "all" || e.topics.includes(topic);
      const byFormat = format === "all" || e.format === format;
      const byQuery =
        !query ||
        [e.name, e.role, e.short, ...e.tags, ...e.topicsFull].join(" ").toLowerCase().includes(query);
      return byTopic && byFormat && byQuery;
    });
  }, [topic, format, q]);

  return (
    <View className="flex-1 bg-[#F5F8FC] dark:bg-[#1b2226]" style={{ paddingTop: insets.top + 8 }}>
      <FlatList
        data={list}
        keyExtractor={(e) => String(e.id)}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: insets.bottom + 24 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View className="mb-1 flex-row items-center gap-2">
              <View className="h-[14px] w-[14px] rounded-full border-2 border-[#2563EB]" />
              <Text className="text-[13px] font-semibold tracking-[1.5px] text-[#2563EB]">КАТАЛОГ</Text>
            </View>
            <Text className="text-[28px] font-bold text-[#0D233B] dark:text-white">Кто готов помочь сейчас</Text>

            <Text className="mb-2 mt-4 text-[12px] uppercase tracking-[1px] text-[#64748B] dark:text-gray-400">Тема</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-1 px-1">
              {topicFilters.map((t) => (
                <Chip key={t.val} label={t.label} active={topic === t.val} onPress={() => setTopic(t.val)} />
              ))}
            </ScrollView>

            <Text className="mb-2 mt-4 text-[12px] uppercase tracking-[1px] text-[#64748B] dark:text-gray-400">Формат</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-1 px-1">
              {formatFilters.map((f) => (
                <Chip key={f.val} label={f.label} active={format === f.val} onPress={() => setFormat(f.val)} />
              ))}
            </ScrollView>

            <Text className="mb-4 mt-5 text-[13px] text-[#64748B] dark:text-gray-400">
              Найдено: {list.length} {plural(list.length)}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <ExpertCard expert={item} onPress={() => router.push(`/expert/${item.id}`)} />
        )}
        ListEmptyComponent={
          <View className="mt-4 items-center rounded-2xl border border-dashed border-gray-300 bg-white p-8 dark:border-[#3a444a] dark:bg-[#2c353a]">
            <Text className="mb-1 font-bold text-[#0D233B] dark:text-white">Ничего не нашлось</Text>
            <Text className="text-center text-[14px] text-[#64748B] dark:text-gray-400">
              Снимите один из фильтров, чтобы расширить поиск.
            </Text>
          </View>
        }
      />
    </View>
  );
}
