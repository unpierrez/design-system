import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@i-mu-design-system/react'

export default {
  title: 'Data display / Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/unpierrez.png',
    alt: 'Marcos Umpierre',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
