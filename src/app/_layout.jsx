import "@/global.css";

import { DefaultTheme, Stack, ThemeProvider } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="specialist/[id]"
          options={{
            headerShown: true,
            headerTitle: "Профиль",
            headerBackTitle: "Назад",
            headerTintColor: "#0D233B",
            headerStyle: { backgroundColor: "#F5F8FC" },
            headerShadowVisible: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
