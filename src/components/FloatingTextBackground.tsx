import { useEffect, useRef } from 'react';

export const floatingWords = [
  'WEB3WIZZZ',
  'BLOCKCHAIN',
  'WEB3',
  'IDENTITY',
  'SECURITY',
  'NETWORK',
  'DEFI',
  'CRYPTOGRAPHY',
  'DECENTRALIZED',
  'PRIVACY',
  'TRUST',
  'EVM',
  'SMART CONTRACT',
  'ZERO TRUST',
  'DIGITAL IDENTITY',
  'PROTOCOL',
  'VALIDATOR',
  'KEYS',
] as const;

export const floatingTextSettings = {
  wordCount: 18,
  minOpacity: 0.04,
  maxOpacity: 0.1,
  minDuration: 20,
  maxDuration: 60,
};

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);
const randomSign = () => (Math.random() > 0.5 ? 1 : -1);

function createWordStyle(index: number) {
  const depth = Math.random();
  const fontSize = randomBetween(18, 30) + depth * 48;
  const drift = 6 + (1 - depth) * 14;

  return {
    '--word-left': `${randomBetween(3, 82)}%`,
    '--word-top': `${randomBetween(4, 90)}%`,
    '--word-size': `${fontSize}px`,
    '--word-opacity': `${randomBetween(
      floatingTextSettings.minOpacity,
      floatingTextSettings.maxOpacity,
    )}`,
    '--word-duration': `${randomBetween(
      floatingTextSettings.minDuration,
      floatingTextSettings.maxDuration,
    )}s`,
    '--word-delay': `${randomBetween(-60, 0)}s`,
    '--word-rotation': `${randomBetween(-5, 5)}deg`,
    '--drift-x': `${randomSign() * drift}px`,
    '--drift-y': `${randomSign() * drift}px`,
    '--word-blur': depth < 0.3 ? '1.5px' : '0px',
    '--word-order': index,
  } as React.CSSProperties;
}

export function FloatingTextBackground() {
  const labelsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const labels = labelsRef.current;
    let frame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let currentX = pointerX;
    let currentY = pointerY;
    let centers: Array<{ x: number; y: number }> = [];

    const updateCenters = () => {
      centers = labels.map((label) => {
        const rect = label.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      });
    };

    const animatePointer = () => {
      currentX += (pointerX - currentX) * 0.045;
      currentY += (pointerY - currentY) * 0.045;

      labels.forEach((label, index) => {
        const center = centers[index];
        if (!center) return;
        const distance = Math.hypot(pointerX - center.x, pointerY - center.y);
        const influence = Math.max(0, 1 - distance / 260);
        const pushX = center.x - currentX;
        const pushY = center.y - currentY;
        label.style.setProperty('--cursor-x', `${(pushX / 260) * influence * 7}px`);
        label.style.setProperty('--cursor-y', `${(pushY / 260) * influence * 7}px`);
      });

      frame = requestAnimationFrame(animatePointer);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
      } else if (!mediaQuery.matches) {
        updateCenters();
        frame = requestAnimationFrame(animatePointer);
      }
    };

    if (!mediaQuery.matches) {
      updateCenters();
      frame = requestAnimationFrame(animatePointer);
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('resize', updateCenters, { passive: true });
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', updateCenters);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div id="floating-text-background" aria-hidden="true">
      {floatingWords.slice(0, floatingTextSettings.wordCount).map((word, index) => (
        <span className="floating-word" key={`${word}-${index}`} style={createWordStyle(index)}>
          <span
            className="floating-word__label"
            ref={(label) => {
              if (label) labelsRef.current[index] = label;
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}