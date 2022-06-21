import { ReactElement, useEffect, useState } from 'react'

interface WindowHeightProps {
  children: (windowHeight) => ReactElement
}

const WindowHeight = ({ children }: WindowHeightProps) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight)
    })
  }, [])
  return children(windowHeight)
}

export default WindowHeight
