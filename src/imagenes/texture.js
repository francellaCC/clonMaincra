import { 
  grassImg,
  logImg,
  glassImg,
  dirtImg,
  woodImg
} from "./images"

import { NearestFilter, RepeatWrapping, TextureLoader } from "three"

const groundTexture = new TextureLoader().load(grassImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const woodTexture = new TextureLoader().load(woodImg)

// mapeo horizontal y vertical

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter

export {
  groundTexture,
  glassTexture,
  woodTexture,
  logTexture,
  dirtTexture

}
