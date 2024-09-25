import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const refs = useRef({});

  const registerRef = (name, ref) => {
    refs.current[name] = ref;
  };

  const scrollTo = (name) => {
    const ref = refs.current[name];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ registerRef, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};
