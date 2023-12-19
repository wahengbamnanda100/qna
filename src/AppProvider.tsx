/* eslint-disable no-mixed-spaces-and-tabs */

import { AlertColor } from "@mui/material";
import React from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

type UserStateType = { userName: string; passWord: string } | undefined;

type NotifyStateType =
  | {
      message: string;
      severity: AlertColor;
    }
  | undefined;

type DefaultTheme = { name: "default"; color: "#d07810" };
type RedTheme = { name: "red"; color: "#EC7474" };
type GreenTheme = { name: "green"; color: "#4caf50" };
type PurpleTheme = { name: "purple"; color: "#673ab7" };

type ThemeColorStateType = DefaultTheme | RedTheme | GreenTheme | PurpleTheme;

type AppContextType = {
  user: UserStateType;
  setUser: React.Dispatch<React.SetStateAction<UserStateType>>;
  notify: NotifyStateType;
  setNotify: React.Dispatch<React.SetStateAction<NotifyStateType>>;
  themeColor: ThemeColorStateType;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColorStateType>>;
};

const app = React.createContext<AppContextType>({} as AppContextType);

export const useAppProvider = () => React.useContext(app);

const AppProvider = ({ children }: AppProviderProps) => {
  const [user, setUser] = React.useState<UserStateType>({
    userName: "",
    passWord: "",
  });
  const [notify, setNotify] = React.useState<NotifyStateType>(undefined);
  const [themeColor, setThemeColor] = React.useState<ThemeColorStateType>({
    name: "default",
    color: "#d07810",
  });

  return (
    <app.Provider
      value={{
        user,
        setUser,
        notify,
        setNotify,
        themeColor,
        setThemeColor,
      }}
    >
      {children}
    </app.Provider>
  );
};

export default AppProvider;
