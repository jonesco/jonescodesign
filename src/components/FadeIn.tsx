import { useState, useEffect } from 'react'
import type { ReactNode, CSSProperties } from 'react'

interface FadeInProps {
  delay?: number
  duration?: number
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export default function FadeIn({
  delay = 500,
  duration = 500,
  children,
  className,
  style,
}: FadeInProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${duration}ms ease`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
