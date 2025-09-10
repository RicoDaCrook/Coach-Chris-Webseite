import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const useScrollAnimation = (threshold = 0.1) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true
  });

  return { ref, inView };
};

export default useScrollAnimation;
