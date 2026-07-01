import { breakpoints} from './breakpoints'

export const theme = {
  colors: {
    background: "#111827",
    surface: "#1F2937",
    surfaceHover: "#273548",

    primary: "#4F7CFF",
    secondary: "#7C5CFC",

    text: "#F9FAFB",
    textSecondary: "#9CA3AF",

    border: "#374151",

    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    xl: "24px",
    full: "9999px",
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    xxl: "32px",
  },

  shadow: {
    sm: "0 2px 6px rgba(0, 0, 0, 0.2)",
    md: "0 4px 12px rgba(0, 0, 0, 0.3)",
    lg: "0 8px 24px rgba(0, 0, 0, 0.4)",
  },

  breakpoints,
} as const;