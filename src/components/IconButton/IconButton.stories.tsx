import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconButton } from './IconButton';
import { LightMode } from '../../assets';

export default {
  title: 'UI-Kit/IconButton',
  component: IconButton,
  argTypes: {
     primary: {
       type: {name: 'boolean', required: true},
       description: 'Button mode',
     },
     size: {
       type: {required: true},
       description: 'Button size',
     },
     label: {
       description: 'Button text'
     },
     children: {
       type: {name: 'function', required: true},
       name: 'icon',
       description: 'Button icon as a react child component',
     },
     onClick: {
       type: {name: 'function', required: true},
       description: 'Callback function to run when the button is clicked',
     }
  }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
    <IconButton {...args}>
      <LightMode color='#FF5E13' />
    </IconButton>
)

export const WithLabel = Template.bind({});
WithLabel.args = {
  primary: true,
  size: 'small',
  label: 'Click me!',
};

export const Simple = Template.bind({});
Simple.args = {
  primary: false,
  size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  primary: true,
  size: 'medium',
  label: 'Click me!',
};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  size: 'large',
  label: 'Click me!',
};