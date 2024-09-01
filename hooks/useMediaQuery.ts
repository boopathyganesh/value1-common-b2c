import { useState, useEffect } from 'react';

const tailwindBreakpoints: { [key: string]: string } = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

const useMediaQuery = (breakpoint: keyof typeof tailwindBreakpoints): boolean => {
  const query = tailwindBreakpoints[breakpoint];
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    // Set the initial state
    handleChange();

    // Listen for changes to the media query
    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
