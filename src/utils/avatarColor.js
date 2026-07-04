const palette = [
  "#0D233B",
  "#111827",
  "#2563EB",
  "#3B82F6",
  "#1D4ED8",
  "#0EA5E9",
];

export const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export const getAvatarColor = (id) => palette[Number(id) % palette.length];
