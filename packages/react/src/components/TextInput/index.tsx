import { ComponentProps } from '@stitches/react'
import { Input, Prefix, TextInputContainer } from './styles'
import { ElementRef, ElementType, forwardRef } from 'react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  as?: ElementType
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
