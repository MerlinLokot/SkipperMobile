import { View, Text } from "react-native";

export function LensMark({ size = 26, ring = "#0D233B" }) {
  const s = size;
  return (
    <View style={{ width: s, height: s }}>
      <View
        style={{
          position: "absolute",
          top: s * 0.05,
          left: s * 0.05,
          width: s * 0.72,
          height: s * 0.72,
          borderRadius: s,
          borderWidth: Math.max(2, s * 0.11),
          borderColor: ring,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: s * 0.02,
          right: s * 0.04,
          width: s * 0.34,
          height: Math.max(3, s * 0.13),
          borderRadius: s,
          backgroundColor: "#2563EB",
          transform: [{ rotate: "45deg" }],
        }}
      />
    </View>
  );
}

export function Wordmark({ size = 20 }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 9 }}>
      <LensMark size={size + 6} />
      <Text style={{ fontSize: size, fontWeight: "800", letterSpacing: -0.5 }}>
        <Text style={{ color: "#0D233B" }}>Profi</Text>
        <Text style={{ color: "#2563EB" }}>Finder</Text>
      </Text>
    </View>
  );
}
