import { useEffect } from 'react';

const usePanelColor = (scrollPosition: number, panelRefs: React.RefObject<HTMLDivElement[]>, setActivePanelColor: (color: string) => void, setActiveTextColor: (color: string) => void) => {
  useEffect(() => {
    const handlePanelColor = () => {
      const scroll = scrollPosition;
      panelRefs.current!.forEach((panelRef) => {
        const $panel = panelRef;
        if ($panel) {
          if (
            $panel.offsetTop <= scroll &&
            $panel.offsetTop + $panel.offsetHeight > scroll
          ) {
            setActivePanelColor($panel.dataset.color || '');
            setActiveTextColor($panel.dataset.text || '')
          }
        }
      });
    };
    handlePanelColor();
  }, [scrollPosition, panelRefs, setActivePanelColor]);
};

export default usePanelColor;