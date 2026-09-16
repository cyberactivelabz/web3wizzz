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
  'CYBERACTIVE',
  'CLOUD',
  'AUTHENTICITY',
];

export const floatingTextSettings = {
  wordCount: 18,
  minOpacity: 0.025,
  maxOpacity: 0.08,
  minDuration: 20,
  maxDuration: 60,
};

type FloatingWordStyle = React.CSSProperties & Record<`--${string}`, string>;

function randomBetween(minimum: number, maximum: number) {
  return minimum + Math.random() * (maximum - minimum);
}

export function FloatingTextBackground() {
  const wordsRef = useRef<HTMLDivElement[]>([]);
  const pointer = useRef({ x: 0.5, y: 0.5 });
  const currentPointer = useRef({ x: 0.5, y: 0.5 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const background = document.getElementById('floating-text-background');
    if (!background) return;

    const animatePointer = () => {
      currentPointer.current.x += (pointer.current.x - currentPointer.current.x) * 0.035;
      currentPointer.current.y += (pointer.current.y - currentPointer.current.y) * 0.035;

      wordsRef.current.forEach((wordElement) => {
        const wordX = Number(wordElement.dataset.x ?? 50) / 100;
        const wordY = Number(wordElement.dataset.y ?? 50) / 100;
        const distanceX = currentPointer.current.x - wordX;
        const distanceY = currentPointer.current.y - wordY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const influence = Math.max(0, 1 - distance / 0.38);

        wordElement.style.setProperty('--cursor-x', `${-distanceX * influence * 24}px`);
        wordElement.style.setProperty('--cursor-y', `${-distanceY * influence * 24}px`);
      });

      frameRef.current = requestAnimationFrame(animatePointer);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.current.x = event.clientX / window.innerWidth;
      pointer.current.y = event.clientY / window.innerHeight;
    };

    const handleVisibilityChange = () => {
      if (document.hidden && frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      } else if (!document.hidden && frameRef.current === null) {
        frameRef.current = requestAnimationFrame(animatePointer);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    frameRef.current = requestAnimationFrame(animatePointer);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const words = floatingWords.slice(0, floatingTextSettings.wordCount);

  return (
    <div id="floating-text-background" aria-hidden="true">
      {words.map((word, wordIndex) => {
        const x = randomBetween(4, 92);
        const y = randomBetween(5, 91);
        const depth = Math.random();
        const style: FloatingWordStyle = {
          '--x': `${x}%`,
          '--y': `${y}%`,
          '--size': `${randomBetween(48, 260)}px`,
          '--opacity': `${randomBetween(floatingTextSettings.minOpacity, floatingTextSettings.maxOpacity)}`,
          '--duration': `${randomBetween(floatingTextSettings.minDuration, floatingTextSettings.maxDuration)}s`,
          '--delay': `${randomBetween(-50, 0)}s`,
          '--drift-x': `${randomBetween(-9, 9)}vw`,
          '--drift-y': `${randomBetween(-7, 7)}vh`,
          '--rotation': `${randomBetween(-5, 5)}deg`,
          '--blur': depth < 0.32 ? '1.5px' : '0px',
        };

        return (
          <span
            key={`${word}-${wordIndex}`}
            ref={(element) => {
              if (element) wordsRef.current[wordIndex] = element;
            }}
            className="floating-word"
            data-x={x}
            data-y={y}
            style={style}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}