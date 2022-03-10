import type * as Stitches from '@stitches/react';
import {styled} from '../stitches.config';
import { CSSBase } from './types';

const DividerStyle = styled('hr', {
  borderTop: '1px solid $primaryLight',
  variants: {
    my: {
      none: {
        my: '$none',
      },
      slight: {
        my: '$slight',
      },
      medium: {
        my: '$medium',
      },
      large: {
        my: '$large',
      },
      xl: {
        my: '$xl',
      },
      xxl: {
        my: '$xxl',
      },
      huge: {
        my: '$huge',
      }
    },
  }
})

type DividerProps = CSSBase & Stitches.VariantProps<typeof DividerStyle>;

export function Divider({css, my}: DividerProps) {
  return <DividerStyle css={css} my={my}/>
}