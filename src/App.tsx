import { useState, useRef } from 'react';
import useScrollPosition from './hooks/useScrollPosition';
import usePanelColor from './hooks/usePanelColor';

import './App.css'
import Navbar from './components/common/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Slogan from './components/Slogan/Slogan';

function App() {
  const scrollPosition = useScrollPosition();
  const [activePanelColor, setActivePanelColor] = useState<string>('');
  const [activeTextColor, setActiveTextColor] = useState<string>('');
  const panelRefs = useRef<HTMLDivElement[]>([]);

  usePanelColor(scrollPosition, panelRefs, setActivePanelColor, setActiveTextColor);

  return (
    <>
      <Navbar />
      <HeroSection color="#f4f4f4" text="#f4f4f4" ref={(ref) => (panelRefs.current[0] = ref!)}/>
      <Slogan color="#003764" text="#f4f4f4" ref={(ref) => (panelRefs.current[1] = ref!)}/>
      <style>{`
        body {
          background-color: ${activePanelColor};
          color: ${activeTextColor}
        }
      `}</style>
    </>
  );
};

export default App
