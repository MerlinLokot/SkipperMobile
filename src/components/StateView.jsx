import { View, Text, ActivityIndicator, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

export function StateView({ loading, error, onRetry }) {
  if (loading) {
    return (
      <View className="items-center justify-center py-16">
        <ActivityIndicator size="large" color="#2563EB" />
        <Text className="mt-3 text-[14px] text-[#64748B]">Загрузка…</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View className="items-center justify-center px-6 py-16">
        <View className="mb-3 h-[48px] w-[48px] items-center justify-center rounded-full bg-red-100">
          <Feather name="wifi-off" size={22} color="#DC2626" />
        </View>
        <Text className="mb-1 text-[16px] font-bold text-[#0D233B]">
          Нет связи с сервером
        </Text>
        <Text className="mb-4 text-center text-[14px] text-[#64748B]">
          Проверьте, что запущен json-server и телефон в той же сети.
        </Text>
        {onRetry && (
          <Pressable
            onPress={onRetry}
            className="rounded-full bg-[#2563EB] px-5 py-[10px] active:opacity-90"
          >
            <Text className="text-[14px] font-semibold text-white">
              Повторить
            </Text>
          </Pressable>
        )}
      </View>
    );
  }
  return null;
}
