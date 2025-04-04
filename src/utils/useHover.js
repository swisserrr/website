import { useEffect, useRef, useState } from 'react';

export function useHover() {
  const [value, setValue] = useState(false);
  const timer = useRef(null);
  const ref = useRef(null);
  const handleMouseOver = () => {
    timer.current = setTimeout(() => {
      setValue(true);
    }, 100);
  };
  const handleMouseOut = () => {
    clearTimeout(timer.current);
    setValue(false);
  };
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref.current]);
  return [ref, value];
}
