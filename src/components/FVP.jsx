import { PointerLockControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function FVP () {
  const { camara, gl } = useThree()

  return (
    <PointerLockControls args={[camara, gl.domElement]} />
  )
}
