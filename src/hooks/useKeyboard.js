import { useEffect, useState } from "react"

const ACTION_KEYBOARD_MAP = {
  Space: 'jump',
  Digit1: 'dirt',
  Digit2: 'grass',
  Digit3: 'glass',
  Digit4: 'wood',
  Digit5: 'log',
  ArrowUp: 'moveForward',
  ArrowDown: 'moveBackward',
  ArrowLeft: 'moveLeft',
  ArrowRight: 'moveRight'

}
export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBack: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    mood: false,
    log: false

  })

  useEffect(() => {
    const handleKeyDown = event => {
      const { code } = event
      const action = ACTION_KEYBOARD_MAP[code]

      if (action) {
        setActions(prevActions => ({
          ...prevActions,
          [action]: true
        }))
      }
    }

    const handleKeyUp = event => {
        const { code } = event
        const action = ACTION_KEYBOARD_MAP[code]
  
        if (action) {
          setActions(prevActions => ({
            ...prevActions,
            [action]: false
          }))
        }
      }

    // se subscribe al evento
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    // limpiamos el useEfect y removemos el evento

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return actions
}
