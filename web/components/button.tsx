
import type * as Stitches from '@stitches/react';
import * as React from "react";
import { styled } from "../stitches.config";

const ButtonVariants = styled('button', {
  minHeight: '$interactiveElementHeight',
  minWidth: '$interactiveElementMinWidth',
  fontSize: '$3',
  padding: '$4 $3',
  border: 'solid 1px $700',
  boxShadow: '-2px 3px 1px 0px rgba(0,0,0,1)',
  transition: 'all 250ms ease',
  cursor: 'pointer',
  '&:active': {
    transform: 'translateY(3px)',
    boxShadow: '0px 1px 0px 0px rgba(0,0,0,1)',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: '$400',
        boxShadow: '$primaryFocus',
        color: '$900',
        '&:hover': {
          backgroundColor: '$300',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '$primaryFocus',
        },
      },
      secondary: {
        backgroundColor: '$600',
        color: '$700',
        '&:hover': {
          backgroundColor: '$200',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '$secondaryFocus',
        },
      },
    },
    cornerRadius: {
      square: {
        borderRadius: '$none',
      },
      slight: {
        borderRadius: '$slight',
      },
      rounded: {
        borderRadius: '$rounded',
      },
    },
  },
})

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Required<Stitches.VariantProps<typeof ButtonVariants>>;

/**
 * A simple, accessible button component.
 *
 * @param color - primary | secondary
 * @param cornerRadius - square | slight | rounded
 */
 export const Button = (props: ButtonProps) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { children } = props;

  return (
    <ButtonVariants ref={ref} {...props}>
      {children}
    </ButtonVariants>
  );
};
