import { useState, useRef } from 'react';
import useScrollPosition from './hooks/useScrollPosition';
import usePanelColor from './hooks/usePanelColor';

import './App.css'
import Navbar from './components/common/Navbar/Navbar';

function App() {
  const scrollPosition = useScrollPosition();
  const [activePanelColor, setActivePanelColor] = useState<string>('');
  const [activeTextColor, setActiveTextColor] = useState<string>('');
  const panelRefs = useRef<HTMLDivElement[]>([]);

  usePanelColor(scrollPosition, panelRefs, setActivePanelColor, setActiveTextColor);

  return (
    <>
      <Navbar />
      
    </>
  );
};

export default App
