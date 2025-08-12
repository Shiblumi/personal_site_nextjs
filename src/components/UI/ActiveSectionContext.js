'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Navbar from '@/components/UI/Navbar/Navbar';

export const ActiveSectionContext = createContext();

// Context of which section is currently being viewed.a
export const useNavbarContext = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useNavbarContext must be used within scope of ActiveSectionContext');
  }
  return context;
};

// Sets context provider above Navbar and Page components.
export default function NavbarContext({ children }) {
  const [activeSection, setActiveSection] = useState(1);
  
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      <Navbar />
      {children}
    </ActiveSectionContext.Provider>
  );
}
