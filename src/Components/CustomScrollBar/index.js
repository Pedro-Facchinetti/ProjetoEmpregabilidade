import React, { useEffect, useRef } from 'react';
import './CustomScrollBar.module.scss';
import ArrowDown from './SetaParaBaixoScroll.png'
import ArrowUp from './SetaParaCimaScroll.png'

export const CustomScrollbar = () => {
  const scrollBarRef = useRef(null);
  const scrollThumbRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    scrollThumbRef.current.style.height = `${158 * scrollRatio}px`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="customScrollbar" ref={scrollBarRef}>
      <img src={ArrowUp} alt="Up Arrow" className="arrow arrow-up" />
      <div className="scrollTrack">
        <div className="scrollThumb" ref={scrollThumbRef} />
      </div>
      <img src={ArrowDown} alt="Down Arrow" className="arrow arrow-down" />
    </div>
  );
};