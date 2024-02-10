import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@i-mu-design-system/react'

export default {
  title: 'Typography / Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children: 'Lorem ipsum lorem siuj ls',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
