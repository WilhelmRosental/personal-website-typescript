import React from 'react'

import { Button } from './Button.styles'

interface ButtonProps {
    alt: string
    form: string
    disabled: boolean
    onClick: any
    children: any
}

const ButtonResume = (props : ButtonProps) => (
  <Button form={props.form} onClick={props.onClick} disabled={props.disabled}>{props.children}
  </Button>
);

export default ButtonResume;