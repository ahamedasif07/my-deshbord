"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  isSideBarOpen: string | boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<string | boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<string | boolean>(true);

  return (
    <AppContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for easier usage
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
