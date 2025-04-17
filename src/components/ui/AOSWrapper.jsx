'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSWrapper() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      // Add any other config options here
    });
  }, []);

  return null; // no markup needed
}
