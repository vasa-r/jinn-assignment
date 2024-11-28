import send from "../assets/send.svg";
import send1 from "../assets/send1.svg";
import send2 from "../assets/send2.svg";
import send3 from "../assets/send3.svg";
import send4 from "../assets/send4.svg";
import send5 from "../assets/send5.svg";
import send6 from "../assets/send6.svg";
import send7 from "../assets/send7.svg";
import send8 from "../assets/send8.svg";
import send9 from "../assets/send9.svg";

type ImageData = {
  id: string;
  name: string;
  image: string;
};

export const imageData: ImageData[] = [
  { id: "0", name: "SendImage", image: send },
  { id: "1", name: "SendImage1", image: send1 },
  { id: "2", name: "SendImage2", image: send2 },
  { id: "3", name: "SendImage3", image: send3 },
  { id: "4", name: "SendImage4", image: send4 },
  { id: "5", name: "SendImage5", image: send5 },
  { id: "6", name: "SendImage6", image: send6 },
  { id: "7", name: "SendImage7", image: send7 },
  { id: "8", name: "SendImage8", image: send8 },
  { id: "9", name: "SendImage9", image: send9 },
];

type ButtonColor = {
  id: string;
  name: string;
  backgroundColor: string;
};

export const buttonColors: ButtonColor[] = [
  { id: "1", name: "Primary", backgroundColor: "#ffffff" }, // white
  { id: "2", name: "Secondary", backgroundColor: "#047857" }, // Teal Green
  { id: "3", name: "Success", backgroundColor: "#16A34A" }, // Green
  { id: "4", name: "Warning", backgroundColor: "#F59E0B" }, // Amber
  { id: "5", name: "Danger", backgroundColor: "#DC2626" }, // Red
  { id: "6", name: "Info", backgroundColor: "#0EA5E9" }, // Sky Blue
  { id: "7", name: "Light", backgroundColor: "#42f590" }, // Light green
  { id: "8", name: "Dark", backgroundColor: "#1F2937" }, // Dark Gray
  { id: "9", name: "Neutral", backgroundColor: "#9CA3AF" }, // Neutral Gray
];

type ButtonStyle = {
  id: string;
  name: string;
  borderRadius: string;
};

export const borderRadius: ButtonStyle[] = [
  { id: "1", name: "Sharp", borderRadius: "0" }, // No rounding
  { id: "2", name: "Slightly Rounded", borderRadius: "4" }, // Small rounding
  { id: "3", name: "Rounded", borderRadius: "8" }, // Medium rounding
  { id: "4", name: "Pill", borderRadius: "50" }, // Large pill shape
  { id: "5", name: "Circle", borderRadius: "50" }, // Fully circular (use for square buttons)
  { id: "6", name: "Moderate", borderRadius: "16" }, // Moderate rounding
  { id: "7", name: "Square but Soft", borderRadius: "2" }, // Minimal rounding
  { id: "8", name: "Extra Rounded", borderRadius: "20" }, // Larger rounding
  { id: "9", name: "Oval", borderRadius: "100" }, // Elongated oval shape
];

type FontSizeData = {
  id: string;
  name: string;
  fontSize: string;
};

export const fontSizes: FontSizeData[] = [
  { id: "1", name: "0.5", fontSize: "0.5rem" }, // Font size 1
  { id: "2", name: "0.8", fontSize: "0.8rem" }, // Font size 2
  { id: "3", name: "1", fontSize: "1rem" }, // Font size 3
  { id: "4", name: "1.2", fontSize: "1.2rem" }, // Font size 4
  { id: "5", name: "1.5", fontSize: "1.5rem" }, // Font size 5
  { id: "6", name: "1.8", fontSize: "1.8rem" }, // Font size 6
  { id: "7", name: "2", fontSize: "2rem" }, // Font size 7
  { id: "8", name: "2.2", fontSize: "2.2rem" }, // Font size 8
  { id: "9", name: "2.5", fontSize: "2.5rem" }, // Font size 9
];

type FontFamilyData = {
  id: string;
  name: string;
  fontFamily: string;
};

export const fontFamilies: FontFamilyData[] = [
  { id: "1", name: "Arial", fontFamily: "Arial, sans-serif" }, // Arial font family
  { id: "2", name: "Roboto", fontFamily: "'Roboto', sans-serif" }, // Roboto font family
  { id: "3", name: "Times New Roman", fontFamily: "'Times New Roman', serif" }, // Times New Roman font family
  { id: "4", name: "Courier New", fontFamily: "'Courier New', monospace" }, // Courier New font family
  { id: "5", name: "Georgia", fontFamily: "'Georgia', serif" }, // Georgia font family
  { id: "6", name: "Open Sans", fontFamily: "'Open Sans', sans-serif" }, // Open Sans font family
];

export const defaultBtn = {
  icon: send,
  background: "#ffffff",
  borderRadius: "0",
};

export const defaultBubbles = {
  botBg: "#f0f0f0",
  botTextColor: "#222222",
  userBg: "#000000",
  userTextColor: "#ffffff",
};
