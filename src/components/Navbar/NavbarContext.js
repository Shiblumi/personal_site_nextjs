"use client";

import { createContext, useContext, useState } from "react";
import Navbar from "$/Navbar/Navbar";

export const ActiveSectionContext = createContext();

// Returns context for child components to use.
export const useNavbarContext = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useNavbarContext must be used within scope of ActiveSectionContext');
  }
  return context;
};

// Sets context provider above Navbar and Page components.
export default function NavbarContext({ children }) {
  const [activeSection, setActiveSection] = useState('section1');
  
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      <Navbar />
      {children}
    </ActiveSectionContext.Provider>
  );
}