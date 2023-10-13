import { ComponentProps, ElementType } from 'react'
import { Label, MultiStepContainer, Steps, Step } from './styles'

export interface MultiStepProps
  extends ComponentProps<typeof MultiStepContainer> {
  as?: ElementType
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStepContainer.displayName = 'MultiStepContainer'
