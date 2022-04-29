import { create } from '@storybook/theming';
import EnigmaLogo  from './enigma-logo.svg'

export default create({
  base: 'light',
  colorPrimary: '#0F1642',
  colorSecondary: '#2668B3',
  brandTitle: 'Enigma UI Library',
  brandUrl: 'http://localhost:3000/',
  brandImage: EnigmaLogo,
})