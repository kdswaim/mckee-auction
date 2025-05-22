'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSWrapper() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: window.innerWidth < 600 ? 30 : 100,
});
  }, []);

  return null; // no markup needed
}
