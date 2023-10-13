import { ComponentProps } from '@stitches/react'
import { Input, Prefix, TextInputContainer } from './styles'
import { ElementType } from 'react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  as?: ElementType
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
