import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import AppLogo from './AppLogo';
import { EnigmaLogo } from '../../assets';

export default  {
  title: 'UI-Kit/AppLogo',
  component: AppLogo,
  argTypes: {
    name: {
      type: {name: 'string'},
      description: 'App logo name',
    },
    styleForName: {
      type: {name: 'object'},
      description: 'Additional css style for name property'
    },
    children: {
      type: {name: 'function'},
      name: 'icon',
      description: 'App logo icon as a react child component',
    },
  }
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => (
  <AppLogo {...args}>
    <EnigmaLogo color='#FF5E13' width={48} height={50}/>
  </AppLogo>
)

export const Default = Template.bind({});
Default.args = {
  name: 'enigma',
  styleForName: {
    textTransform: 'uppercase',
  }
}


