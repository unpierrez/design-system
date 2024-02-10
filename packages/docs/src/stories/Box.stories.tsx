import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@i-mu-design-system/react'

export default {
  title: 'Surfaces / Box',
  tags: ['autodocs'],
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
