import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

export default function TabsLayout() {
  const scheme = useColorScheme();
  const dark = scheme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563EB",
        tabBarInactiveTintColor: dark ? "#7A8699" : "#94A3B8",
        tabBarStyle: {
          backgroundColor: dark ? "#1b2226" : "#FFFFFF",
          borderTopColor: dark ? "#3a444a" : "#EAEEF5",
          height: 64,
          paddingBottom: 10,
          paddingTop: 8,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Поиск",
          tabBarIcon: ({ color, size }) => <Feather name="search" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          title: "Каталог",
          tabBarIcon: ({ color, size }) => <Feather name="grid" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="become"
        options={{
          title: "Стать экспертом",
          tabBarIcon: ({ color, size }) => <Feather name="user-plus" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
