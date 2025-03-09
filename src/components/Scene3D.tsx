import { useEffect, useRef } from 'react'
import { useSpring } from 'framer-motion'

interface GlobeProps {
  className?: string
  variant?: 'cta' | 'page'
}

export function Scene3D({ className = "", variant = 'cta' }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const phi = useSpring(0, {
    damping: 30,
    stiffness: 200,
  })
  const theta = useSpring(0.3, {
    damping: 30,
    stiffness: 200,
  })

  useEffect(() => {
    let width = 0
    let currentPhi = 0
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
    
    import('cobe').then(({ default: createGlobe }) => {
      if (!canvasRef.current) return

      window.addEventListener('resize', onResize)
      onResize()

      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.3,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.12, 0.23, 0.54],
        markerColor: [0.86, 0.37, 0],
        glowColor: [0.12, 0.23, 0.54],
        markers: [
          { location: [6.5244, 3.3792], size: 0.1 },
          { location: [51.5074, -0.1278], size: 0.1 },
          { location: [40.7128, -74.0060], size: 0.1 },
          { location: [-33.8688, 151.2093], size: 0.1 },
          { location: [35.6762, 139.6503], size: 0.1 },
        ],
        onRender: (state: any) => {
          if (!pointerInteracting.current) {
            currentPhi += 0.003
            state.phi = currentPhi
          }
          state.phi = phi.get()
          state.theta = theta.get()
          state.width = width * 2
          state.height = width * 2
        },
      })

      return () => {
        globe.destroy()
        window.removeEventListener('resize', onResize)
      }
    })
  }, [phi, theta])

  const containerClasses = variant === 'cta' 
    ? "w-full h-full flex items-center justify-center"
    : "w-full h-[400px] md:h-[500px] flex items-center justify-center";

  return (
    <div className={containerClasses}>
      <canvas
        ref={canvasRef}
        className={className}
        style={{
          width: variant === 'cta' ? '100%' : '400px',
          height: variant === 'cta' ? '100%' : '400px',
          contain: 'layout paint size',
          opacity: 1,
          cursor: 'grab',
          background: 'transparent',
        }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current
          canvasRef.current!.style.cursor = 'grabbing'
        }}
        onPointerUp={() => {
          pointerInteracting.current = null
          canvasRef.current!.style.cursor = 'grab'
        }}
        onPointerOut={() => {
          pointerInteracting.current = null
          canvasRef.current!.style.cursor = 'grab'
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            phi.set(delta * 0.01)
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            phi.set(delta * 0.01)
          }
        }}
      />
    </div>
  )
}

export default Scene3D
