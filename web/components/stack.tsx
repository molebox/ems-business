import { styled } from "../stitches.config";
import type * as Stitches from '@stitches/react';
import { Direction, Align, Justify, CSSBase } from "./types";

interface Props {
  children: React.ReactNode;
  gap?: string;
  direction?: Direction;
  align?: Align;
  justify?: Justify;
  center?: boolean;
  height?: string;
}

const Root = styled('div', {
  display: 'flex',
  margin: 10,
  variants: {
    center: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
      }
    },
    align: {
      start: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
    },
    justify: {
      start: {
        justifyContent: 'start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    gap: {
      none: {
       gap: '0'
      },
      small: {
        gap: '8px'
      },
      medium: {
        gap: '16px'
      },
      large: {
        gap: '24px'
      }
    }
  },
  defaultVariants: {
    gap: 'small',
    direction: 'column',
  }
})

type StackProps = CSSBase & React.PropsWithChildren<Props> & Stitches.VariantProps<typeof Root>;

export function Stack({ children, gap, direction, align, justify, center, css }: StackProps) {
  return <Root css={{...css}} gap={gap} direction={direction} align={align} justify={justify} center={center}>{children}</Root>;
}