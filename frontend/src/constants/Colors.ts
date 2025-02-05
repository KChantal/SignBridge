export const tintColorLight = '#5A9BD4'; // Soft blue for light mode highlights
export const tintColorDark = '#8AA4D1'; // Muted blue for dark mode highlights

export default {
  light: {
    title: tintColorDark,
    text: '#0A2540', // Deep blue for text
    background: '#F0F8FF', // Alice blue for a calming background
    tint: tintColorLight, // Primary accent color
    tabIconDefault: '#A0C4FF', // Soft blue for inactive tab icons
    tabIconSelected: tintColorLight, // Highlighted tab icons
    cardBackground: '#E5F9E0', // Soft green for cards or accents
    subtleHighlight: '#D4D9F1', // Light purple for subtle highlights
  },
  dark: {
    title: tintColorDark,
    text: '#E0F2F1', // Soft white with a hint of green for text
    background: '#102A43', // Dark blue for background
    tint: tintColorDark, // Primary accent color for dark mode
    tabIconDefault: '#617A89', // Muted blue for inactive tab icons
    tabIconSelected: tintColorDark, // Highlighted tab icons
    cardBackground: '#1B3A4B', // Dark teal for card background
    subtleHighlight: '#3A506B', // Muted purple-blue for subtle highlights
  },
};
