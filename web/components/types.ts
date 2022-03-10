import { CSS } from "stitches.config";
import { styled } from "../stitches.config";

export type CSSBase = {
  css?: CSS;
};

export type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type Space = 'none' | 'slight' | 'medium' | 'large' | 'xl' | 'xxl' | 'huge';

export type Direction = 'row' | 'column';

export type Align = 'start' | 'center' | 'end';

export type Justify = 'start' | 'center' | 'end' | 'between' | 'around';

export interface Spacing {
  px?: Space;
  py?: Space;
  p?: Space;
  m?: Space;
}

export const spacing = styled('div', {
  variants: {
    px: {
      none: {
        px: '$none',
      },
      slight: {
        px: '$slight',
      },
      medium: {
        px: '$medium',
      },
      large: {
        px: '$large',
      },
      xl: {
        px: '$xl',
      },
      xxl: {
        px: '$xxl',
      },
      huge: {
        px: '$huge',
      }
    },
    py: {
      none: {
        py: '$none',
      },
      slight: {
        py: '$slight',
      },
      medium: {
        py: '$medium',
      },
      large: {
        py: '$large',
      },
      xl: {
        py: '$xl',
      },
      xxl: {
        py: '$xxl',
      },
      huge: {
        py: '$huge',
      }
    },
    p: {
      none: {
        p: '$none',
      },
      slight: {
        p: '$slight',
      },
      medium: {
        p: '$medium',
      },
      large: {
        p: '$large',
      },
      xl: {
        p: '$xl',
      },
      xxl: {
        p: '$xxl',
      },
      huge: {
        p: '$huge',
      }
    },
    m: {
      none: {
        m: '$none',
      },
      slight: {
        m: '$slight',
      },
      medium: {
        m: '$medium',
      },
      large: {
        m: '$large',
      },
      xl: {
        m: '$xl',
      },
      xxl: {
        m: '$xxl',
      },
      huge: {
        m: '$huge',
      }
    },
  },
  defaultVariants: {
    py: '$slight',
    px: '$slight',
  }
})