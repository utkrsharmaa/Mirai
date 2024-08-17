import React, { createContext, useContext, useState } from "react";

type AreaContextProviderProps = {
  children: React.ReactNode;
};

type activeArea = "Home" | "Collection" | "Settings" | "Preview";

type AreaContextType = {
  area: activeArea;
  setArea: React.Dispatch<React.SetStateAction<activeArea>>;
};

const defaultContextValue: AreaContextType = {
  area: "Home",
  setArea: () => {},
};

export const AreaContext = createContext<AreaContextType>(defaultContextValue);

export default function AreaContextProvider({
  children,
}: AreaContextProviderProps) {
  const [area, setArea] = useState<activeArea>("Home");

  return (
    <AreaContext.Provider
      value={{
        area,
        setArea,
      }}
    >
      {children}
    </AreaContext.Provider>
  );
}

export function useAreaContext() {
  const context = useContext(AreaContext);
  return context;
}
