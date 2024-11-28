/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { defaultBtn } from "../util/constants";

interface BtnType {
  icon: string;
  background: string;
  borderRadius: string;
}

interface AppContextType {
  buttonData: BtnType;
  updateBotButton: (icon: string, bg: string, bradius: string) => void;
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
  const values = { buttonData, updateBotButton };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;