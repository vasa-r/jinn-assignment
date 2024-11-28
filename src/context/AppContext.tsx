/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { defaultBtn, defaultBubbles } from "../util/constants";

interface BtnType {
  icon: string;
  background: string;
  borderRadius: string;
}

interface BubbleType {
  botBg: string;
  botTextColor: string;
  userBg: string;
  userTextColor: string;
}

interface AppContextType {
  buttonData: BtnType;
  updateBotButton: (icon: string, bg: string, bradius: string) => void;
  titleBg: string;
  updateTitleBg: (bg: string) => void;
  bubblesData: BubbleType;
  updateBubblesData: (
    botBg: string,
    botTxtColor: string,
    userBg: string,
    userTxtColor: string
  ) => void;
}

interface AppContextProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

const AppProvider = ({ children }: AppContextProps) => {
  const [buttonData, setButtonData] = useState(defaultBtn);
  const [titleBg, setTitleBg] = useState("#000000");
  const [bubblesData, setBubblesData] = useState(defaultBubbles);

  useEffect(() => {
    console.log(buttonData);
  }, [buttonData]);

  const updateBotButton = (icon: string, bg: string, bradius: string) => {
    setButtonData((prev) => ({
      ...prev,
      icon,
      background: bg,
      borderRadius: bradius,
    }));
  };

  const updateTitleBg = (bg: string) => {
    setTitleBg(bg);
  };

  const updateBubblesData = (
    botBg: string,
    botTxtColor: string,
    userBg: string,
    userTxtColor: string
  ) => {
    setBubblesData((prev) => ({
      ...prev,
      botBg,
      botTextColor: botTxtColor,
      userBg,
      userTextColor: userTxtColor,
    }));
  };

  const values = {
    buttonData,
    updateBotButton,
    titleBg,
    updateTitleBg,
    bubblesData,
    updateBubblesData,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
