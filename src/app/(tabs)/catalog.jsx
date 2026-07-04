import { useMemo, useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";

import { Chip } from "@/components/Chip";
import { ExpertCard } from "@/components/ExpertCard";
import { StateView } from "@/components/StateView";
import { useFetch } from "@/hooks/useFetch";
import { getExperts } from "@/api/experts";

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

  const { data, loading, error, reload } = useFetch(getExperts, []);
  const experts = data || [];

  const [topic, setTopic] = useState("all");
  const [format, setFormat] = useState("all");
  const [q, setQ] = useState("");


  useEffect(() => {
    if (params.topic) setTopic(params.topic);
    if (params.q !== undefined) setQ(params.q);
  }, [params.topic, params.q]);

  const topics = useMemo(() => ["all", ...new Set(experts.map((e) => e.topic))], [experts]);
  const formats = useMemo(() => ["all", ...new Set(experts.map((e) => e.format))], [experts]);

  const filtered = useMemo(() => {
    const query = (q || "").trim().toLowerCase();
    return experts.filter((e) => {
      const byTopic = topic === "all" || e.topic === topic;
      const byFormat = format === "all" || e.format === format;
      const byQuery =
        !query ||
        e.name.toLowerCase().includes(query) ||
        e.specialty.toLowerCase().includes(query);
      return byTopic && byFormat && byQuery;
    });
  }, [experts, topic, format, q]);

  const Header = (
    <View>
      <View className="mb-1 flex-row items-center gap-2">
        <View className="h-4 w-4 rounded-full border-2 border-[#2563EB]" />
        <Text className="text-[13px] font-semibold tracking-[1.6px] text-[#2563EB]">КАТАЛОГ СПЕЦИАЛИСТОВ</Text>
      </View>
      <Text className="text-[28px] font-bold text-[#0D233B]">Кто готов помочь прямо сейчас</Text>

      {q ? (
        <Text className="mt-2 text-[13px] text-[#64748B]">
          Запрос: «{q}»
        </Text>
      ) : null}

      {/* карточка фильтров */}
      <View className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
        <Text className="text-[12px] font-semibold tracking-[1.2px] text-[#64748B]">ТЕМА</Text>
        <View className="mt-3 flex-row flex-wrap">
          {topics.map((t) => (
            <Chip key={t} label={t === "all" ? "Все" : t} active={topic === t} onPress={() => setTopic(t)} />
          ))}
        </View>

        <Text className="mt-4 text-[12px] font-semibold tracking-[1.2px] text-[#64748B]">ФОРМАТ</Text>
        <View className="mt-3 flex-row flex-wrap">
          {formats.map((f) => (
            <Chip key={f} label={f === "all" ? "Любой" : f} active={format === f} onPress={() => setFormat(f)} />
          ))}
        </View>
      </View>

      {!loading && !error && (
        <Text className="mb-4 mt-5 text-[14px] text-[#64748B]">
          Найдено: {filtered.length} {plural(filtered.length)}
        </Text>
      )}
    </View>
  );

  return (
    <View className="flex-1 bg-[#F5F8FC]" style={{ paddingTop: insets.top + 8 }}>
      <FlatList
        data={filtered}
        keyExtractor={(e) => String(e.id)}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: insets.bottom + 24 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Header}
        renderItem={({ item }) => (
          <ExpertCard expert={item} onPress={() => router.push(`/specialist/${item.id}`)} />
        )}
        ListEmptyComponent={
          loading || error ? (
            <StateView loading={loading} error={error} onRetry={reload} />
          ) : (
            <View className="mt-2 items-center rounded-2xl border border-dashed border-slate-300 bg-white p-8">
              <Text className="mb-1 font-bold text-[#0D233B]">Ничего не нашлось</Text>
              <Text className="text-center text-[14px] text-[#64748B]">
                Попробуйте другой запрос или снимите фильтры.
              </Text>
            </View>
          )
        }
      />
    </View>
  );
}
