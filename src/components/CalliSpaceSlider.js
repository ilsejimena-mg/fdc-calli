'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  { src: '/images/calli-espacio-sala-principal.jpg', alt: 'Sala principal de Calli con el logo pintado en la pared' },
  { src: '/images/calli-espacio-sala-logo.jpg', alt: 'Sala de estar de Calli junto al mural con el logo CALLI' },
  { src: '/images/calli-espacio-recepcion-materiales.jpg', alt: 'Recepción de Calli con materiales informativos y folletos' },
  { src: '/images/calli-espacio-sala-estar.jpg', alt: 'Sala de estar de Calli con sillón y cojines' },
  { src: '/images/calli-espacio-sala-juntas.jpg', alt: 'Sala de juntas de Calli con mesa y sillas' },
  { src: '/images/calli-espacio-oficina-rudy1.jpg', alt: 'Oficina de Calli con escritorio y estantes' },
  { src: '/images/calli-espacio-consulta-psicologica.jpg', alt: 'Consultorio de acompañamiento psicológico en Calli' },
  { src: '/images/calli-espacio-oficina-humbolt1.jpg', alt: 'Oficina de atención en Calli con equipo de cómputo' },
  { src: '/images/calli-espacio-oficina-humbolt2.jpg', alt: 'Oficina de atención en Calli, segundo ángulo' },
  { src: '/images/calli-espacio-oficina-reforma1.jpg', alt: 'Oficina de Calli con escritorio y archivero' },
  { src: '/images/calli-espacio-oficina-reforma2.jpg', alt: 'Oficina de Calli, segundo ángulo' },
  { src: '/images/calli-espacio-consultorio-vih1.jpg', alt: 'Consultorio de salud sexual de Calli con banner de PrEP y PEP' },
  { src: '/images/calli-espacio-consultorio-vih2.jpg', alt: 'Consultorio de salud sexual de Calli con materiales de prevención' },
  { src: '/images/calli-espacio-consultorio-vih3.jpg', alt: 'Consultorio de salud sexual de Calli con mesa redonda' },
]

const AUTOPLAY_MS = 5000

export default function CalliSpaceSlider() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex(i => (i + 1) % SLIDES.length), [])
  const prev = useCallback(() => setIndex(i => (i - 1 + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [next])

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 820,
        margin: '0 auto',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: 420 }}>
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: i === index ? 1 : 0,
              transition: 'opacity 0.6s ease',
            }}
          />
        ))}
      </div>

      <button
        onClick={prev}
        aria-label="Anterior"
        style={{
          position: 'absolute', top: '50%', left: '0.75rem', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.45)', color: '#fff', border: 'none', borderRadius: '50%',
          width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        style={{
          position: 'absolute', top: '50%', right: '0.75rem', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.45)', color: '#fff', border: 'none', borderRadius: '50%',
          width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <ChevronRight size={20} />
      </button>

      <div
        style={{
          position: 'absolute', bottom: '0.75rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '0.4rem',
        }}
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setIndex(i)}
            aria-label={`Ir a imagen ${i + 1}`}
            style={{
              width: 8, height: 8, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0,
              background: i === index ? '#fff' : 'rgba(255,255,255,0.5)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
