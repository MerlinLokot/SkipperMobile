import { View, Text, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const bullets = [
  "Опишите компетенции, темы и опыт — всё в одном профиле",
  "Задайте свои форматы и стоимость консультаций",
  "Один аккаунт работает и как эксперт, и как пользователь",
];

export default function BecomeExpertScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 bg-[#F5F8FC]"
      contentContainerStyle={{ paddingTop: insets.top + 12, paddingBottom: insets.bottom + 32, paddingHorizontal: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-row items-center gap-2">
        <View className="h-[14px] w-[14px] rounded-full border-2 border-[#2563EB]" />
        <Text className="text-[13px] font-semibold tracking-[1.5px] text-[#2563EB]">ДЛЯ СПЕЦИАЛИСТОВ</Text>
      </View>
      <Text className="mt-3 text-[28px] font-bold leading-[34px] text-[#0D233B]">
        Вы эксперт? Получайте заказы на консультации
      </Text>
      <Text className="mt-3 text-[15px] leading-[22px] text-[#64748B]">
        Отметьте при регистрации, что вы специалист, и заполните профиль. Пользователи найдут вас в
        каталоге, а платформа поможет зафиксировать каждую консультацию.
      </Text>

      <View className="mt-5 gap-3">
        {bullets.map((b) => (
          <View key={b} className="flex-row items-start gap-3">
            <View className="mt-[1px] h-[22px] w-[22px] items-center justify-center rounded-full bg-[#E8F0FE]">
              <Feather name="check" size={13} color="#2563EB" />
            </View>
            <Text className="flex-1 text-[15px] text-[#0D233B]">{b}</Text>
          </View>
        ))}
      </View>

      <View className="mt-7 overflow-hidden rounded-2xl border border-gray-100 bg-white">
        <View className="flex-row gap-[6px] border-b border-gray-100 bg-[#F5F8FC] px-4 py-3">
          {["Профиль", "Темы", "Форматы"].map((t, i) => (
            <View key={t} className={`rounded-lg px-3 py-[6px] ${i === 0 ? "bg-[#0D233B]" : ""}`}>
              <Text className={`text-[12px] font-semibold ${i === 0 ? "text-white" : "text-[#64748B]"}`}>{t}</Text>
            </View>
          ))}
        </View>

        <View className="p-[18px]">
          <Text className="mb-2 text-[11px] uppercase tracking-[1px] text-[#64748B]">Имя и специальность</Text>
          <View className="rounded-xl border border-gray-200 px-[14px] py-[12px]">
            <Text className="text-[14px] text-[#0D233B]">Марина Ковалёва · Продукт-менеджер</Text>
          </View>

          <Text className="mb-2 mt-4 text-[11px] uppercase tracking-[1px] text-[#64748B]">Компетенции</Text>
          <View className="flex-row flex-wrap gap-[7px]">
            {["Продукт-менеджмент", "Карьера"].map((t) => (
              <View key={t} className="rounded-full bg-[#E8F0FE] px-[11px] py-[5px]">
                <Text className="text-[12px] font-medium text-[#1D4ED8]">{t}</Text>
              </View>
            ))}
            <View className="rounded-full border border-dashed border-gray-300 px-[11px] py-[5px]">
              <Text className="text-[12px] text-[#64748B]">+ добавить</Text>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-between border-t border-gray-100 bg-[#F5F8FC] px-[18px] py-[14px]">
          <Text className="text-[11px] text-[#64748B]">черновик · виден только вам</Text>
          <View className="rounded-lg bg-[#2563EB] px-[16px] py-[9px]">
            <Text className="text-[13px] font-semibold text-white">Опубликовать</Text>
          </View>
        </View>
      </View>

      <Pressable className="mt-7 items-center rounded-2xl bg-[#2563EB] py-[15px]">
        <Text className="text-[15px] font-semibold text-white">Создать профиль специалиста</Text>
      </Pressable>
    </ScrollView>
  );
}
