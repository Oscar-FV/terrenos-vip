import { useState, useRef } from 'react';
import useScrollPosition from './hooks/useScrollPosition';
import usePanelColor from './hooks/usePanelColor';

import './App.css'

function App() {
  const scrollPosition = useScrollPosition();
  const [activePanelColor, setActivePanelColor] = useState<string>('');
  const [activeTextColor, setActiveTextColor] = useState<string>('');
  const panelRefs = useRef<HTMLDivElement[]>([]);

  usePanelColor(scrollPosition, panelRefs, setActivePanelColor, setActiveTextColor);

  return (
    <>
      <div className="">
        <div ref={(ref) => (panelRefs.current[0] = ref!)} data-color="white" data-text="black" className="panel">
          <div>
            <h1>Magic scrolling colours</h1>
            <p>Scroll to animate the background colour of the body as a full height panel becomes visible.</p>
            <p>I have tried to comment the code, particularly the JavaScript, as much as possible. I hope it's clear to understand.</p>
            <p>If you have any questions my twitter is <a href="https://twitter.com/daveredfern">@daveredfern</a>.</p>
          </div>
        </div>
        <div ref={(ref) => (panelRefs.current[1] = ref!)} data-color="violet" data-text="white" className="panel">
          <h2>Violet panel</h2>
        </div>
        <div ref={(ref) => (panelRefs.current[2] = ref!)} data-color="indigo" data-text="black" className="panel">
          <h2>Indigo panel</h2>
        </div>
        <div ref={(ref) => (panelRefs.current[3] = ref!)} data-color="blue" data-text="white" className="panel">
          <h2>Blue panel</h2>
        </div>
        <div ref={(ref) => (panelRefs.current[4] = ref!)} data-color="green" data-text="black" className="panel">
          <h2>Green panel</h2>
        </div>
        <div ref={(ref) => (panelRefs.current[5] = ref!)} data-color="yellow" data-text="white" className="panel">
          <h2>Yellow panel</h2>
        </div>
        <div ref={(ref) => (panelRefs.current[6] = ref!)} data-color="orange" data-text="black" className="panel">
          <h2>Orange panel</h2>
        </div>
        <div ref={(ref) => (panelRefs.current[7] = ref!)} data-color="red" data-text="white " className="panel">
          <h2>Red panel</h2>
        </div>
      </div>
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
