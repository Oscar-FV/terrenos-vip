import { useState, useRef } from 'react';
import useScrollPosition from './hooks/useScrollPosition';
import usePanelColor from './hooks/usePanelColor';

import './App.css'
import Navbar from './components/common/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Slogan from './components/Slogan/Slogan';
import Gallery from './components/Gallery/Gallery';
import TimeLine from './components/TimeLIne/TimeLine';
import ContactUs from './components/ContactUs/Contact';
import Footer from './components/common/Footer/Footer';

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
      <Slogan color="#2E9BF8" text="#f4f4f4" ref={(ref) => (panelRefs.current[1] = ref!)}/>
      <Gallery color="#f4f4f4" text="#003764" ref={(ref) => (panelRefs.current[2] = ref!)}/>
      <TimeLine color="#2E9BF8" text="#f4f4f4" ref={(ref) => (panelRefs.current[3] = ref!)}/>
      <ContactUs color="#f4f4f4" text="#003764" ref={(ref) => (panelRefs.current[4] = ref!)}/>
      <Footer />
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
