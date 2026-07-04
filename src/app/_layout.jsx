import "@/global.css";

import { DefaultTheme, Stack, ThemeProvider } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="expert/[id]"
          options={{
            headerShown: true,
            headerTitle: "Профиль эксперта",
            headerBackTitle: "Назад",
            headerTintColor: "#0D233B",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
