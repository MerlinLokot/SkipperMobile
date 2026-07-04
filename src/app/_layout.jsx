import "@/global.css";

import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const scheme = useColorScheme();
  const dark = scheme === "dark";

  return (
    <ThemeProvider value={dark ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="expert/[id]"
          options={{
            headerShown: true,
            headerTitle: "Профиль эксперта",
            headerBackTitle: "Назад",
            headerTintColor: dark ? "#FFFFFF" : "#0D233B",
            headerStyle: { backgroundColor: dark ? "#1b2226" : "#FFFFFF" },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
