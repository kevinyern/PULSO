'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoadError, setVideoLoadError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const src = 'https://vz-977ab098-119.b-cdn.net/c5633fc5-d9d7-4c6e-b910-c24cda29cd39/playlist.m3u8';

    const handleError = () => {
      setVideoLoadError(true);
    };

    video.addEventListener('error', handleError);

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else {
      import('hls.js').then(({ default: Hls }) => {
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(src);
          hls.attachMedia(video);
          hls.on(Hls.Events.ERROR, handleError);
        } else {
          setVideoLoadError(true);
        }
      }).catch(() => {
        setVideoLoadError(true);
      });
    }

    return () => {
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <section style={{ width: '100%', backgroundColor: '#000', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', lineHeight: 0 }}>
      {!videoLoadError ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            display: 'block',
            maxHeight: '80vh',
            objectFit: 'cover',
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '400px',
            backgroundColor: '#1a1a1a',
            backgroundImage: 'url(/pulso-arri.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      )}
    </section>
  );
}
