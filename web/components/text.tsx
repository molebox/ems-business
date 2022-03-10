import { styled } from "../stitches.config";
import type * as Stitches from '@stitches/react';
import { As, Spacing, CSSBase, spacing} from "./types";

interface Props extends Spacing {
  children: React.ReactNode;
  as?: As;
}

const Root = styled('p', spacing, {
  variants: {
    color: {
      black: {
        color: '$black',
      },
      white: {
        color: '$white',
      },
      grey: {
        color: '$grey',
      }
    },
    weight: {
      light: {
        fontWeight: '$light',
      },
      regular: {
        fontWeight: '$regular',
      },
      bold: {
        fontWeight: '$bold',
      }
    },
    size: {
      xs: {
        fontSize: '$xs',
      },
      small: {
        fontSize: '$s',
      },
      medium: {
        fontSize: '$m',
      },
      large: {
        fontSize: '$l',
      },
      xl: {
        fontSize: '$xl',
      }, 
      xxl: {
        fontSize: '$xxl',
      },
      huge: {
        fontSize: '$huge',
      },
      jumbo: {
        fontSize: '$jumbo',
      }
    },
  },
  defaultVariants: {
    color: '$black',
    weight: '$regular',
    size: '$medium',
  }
})

type TextProps = CSSBase & React.PropsWithChildren<Props> & Stitches.VariantProps<typeof Root>;

export function Text({children, as, size, weight, color, py, px, css}: TextProps) {
  return (
    <Root css={css} as={as} size={size} weight={weight} color={color} px={px} py={py}>{children}</Root>
  );
}