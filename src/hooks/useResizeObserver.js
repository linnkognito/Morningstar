import { useEffect, useState } from "react";

export function useResizeObserver(ref) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(() => {
      if (ref.current) setHeight(ref.current.offsetHeight);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return height;
}
