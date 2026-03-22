'use client';

export default function HeroVideo() {
  return (
    <section style={{ width: '100%', backgroundColor: '#000', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', lineHeight: 0 }}>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src="https://iframe.mediadelivery.net/embed/618001/c5633fc5-d9d7-4c6e-b910-c24cda29cd39?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
          loading="lazy"
          style={{
            border: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
