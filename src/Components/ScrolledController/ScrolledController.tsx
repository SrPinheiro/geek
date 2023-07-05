/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import { Container } from './styles'

type Props = {
  children: React.ReactNode
}

export const ScrolledController = ({children}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let startX: number | null = null;
  let scrollLeft: number | null = null;

  useEffect(() => {
    const container = containerRef.current;
    container!.scrollLeft = 1;

    container?.addEventListener("scroll", () => {
      const minScroll = 1;
      if(container!.scrollLeft < minScroll) container!.scrollLeft = minScroll;
    })

    const handleMouseDown = (event: MouseEvent) => {
      startX = event.pageX - container!.offsetLeft;
      scrollLeft = container!.scrollLeft;
      container!.style.cursor = 'grabbing';

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!startX || !scrollLeft) return;

      const x = event.pageX - container!.offsetLeft;
      const scrollX = x - startX;

      const minScroll = 1; // Defina o limite mínimo de rolagem aqui

      if (scrollLeft - scrollX < minScroll) {
        container!.scrollLeft = minScroll;
      } else {
        container!.scrollLeft = scrollLeft - scrollX;
      }

      console.log(container!.scrollLeft);
    };

    const handleMouseUp = () => {
      startX = null;
      scrollLeft = null;
      container!.style.cursor = 'grab';

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    container!.addEventListener('mousedown', handleMouseDown);

    return () => {
      container!.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      {children}
    </Container>
  )
}
