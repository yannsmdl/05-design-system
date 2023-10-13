import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@yannsml-devz/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          <Text size="sm">Accept terms of use</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<CheckboxProps> = {}
