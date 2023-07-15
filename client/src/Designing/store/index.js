import { proxy } from 'valtio';
import threejs from '../pub/threejs.png'
const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: {threejs},
  fullDecal: {threejs},
});

export default state;