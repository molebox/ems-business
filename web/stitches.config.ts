import { createStitches, globalCss } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const {styled, css, theme, config, createTheme, getCssText} = createStitches({
  theme: {
    fonts: {
        body: 'Inter, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto'
    },
    colors: {
        black: '#1a1a1a',
        white: '#fafafa',
        grey: '#a3a3a3',
        lightGrey: '#e6e6e6',
        lighterGrey: '#F3F3F3',
        primaryDark: '#aaa781',
        primaryLight: '#bbb89a'
    },
    space: {
        none: '0px',
        slight: '2px',
        medium: '4px',
        large: '8px',
        xl: '16px',
        xxl: '32px',
        huge: '64px',
    },
    fontSizes: {
        xs: '0.75rem', // xs
        s: '0.875rem', // s
        m: '1rem', // m
        l: '1.25rem', // l
        xl: '2rem', // xl
        xxl: '2.5rem', // xxl
        huge: '4.5rem', // huge
        jumbo: '6.5rem', // jumbo
    },
    fontWeights: {
        light: 400,
        regular: 500,
        bold: 600,
    },
    lineHeights: {
        solid: 1,
        heading: 1.25,
        body: 1.5
    },
    letterSpacings: {},
    sizes: {
        maxWidth: 1440,
        interactiveElementHeight: '40px',
        interactiveElementMinWidth: '100px'
    },
    borderWidths: {
        1: '0px',
        2: '1px',
        3: '2px',
        4: '4px'
    },
    borderStyles: {
        1: 'none',
        2: 'solid'
    },
    // Radius
    radii: {
        none: '0px',
        slight: '5px',
        rounded: '8px',
        pill: '9999px', // round
    },
    shadows: {
        primaryFocus: `
        0.9px 1.2px 4px rgba(0, 0, 0, 0.034),
        2.1px 2.8px 9.5px rgba(0, 0, 0, 0.048),
        3.9px 5.3px 17.9px rgba(0, 0, 0, 0.06),
        6.9px 9.4px 31.9px rgba(0, 0, 0, 0.072),
        13px 17.5px 59.7px rgba(0, 0, 0, 0.086),
        31px 42px 143px rgba(0, 0, 0, 0.12)
      
      `,
    },
    zIndices: {
        neutral: 0,
        above: 100,
        below: -100,
        onTop: 999999999
    },
    transitions: {},
},
media: {
    xs: '(min-width: 390px)',
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 2560px)',
},
utils: {
    p: (value?: Stitches.ScaleValue<'space'>) => (
        {
            paddingTop: value,
            paddingBottom: value,
            paddingLeft: value,
            paddingRight: value
        }
    ),
    m: (value?: Stitches.ScaleValue<'space'>) => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value,
    }),
    pt: (value?: Stitches.ScaleValue<'space'>) => ({
        paddingTop: value,
    }),
    pr: (value?: Stitches.ScaleValue<'space'>) => ({
        paddingRight: value,
    }),
    pb: (value?: Stitches.ScaleValue<'space'>) => ({
        paddingBottom: value,
    }),
    pl: (value?: Stitches.ScaleValue<'space'>) => ({
        paddingLeft: value,
    }),
    px: (value?: Stitches.ScaleValue<'space'>) => ({
        paddingLeft: value,
        paddingRight: value,
    }),
    py: (value?: Stitches.ScaleValue<'space'>) => ({
        paddingTop: value,
        paddingBottom: value,
    }),
    mt: (value: Stitches.ScaleValue<'space'>) => ({
        marginTop: value,
    }),
    mr: (value: Stitches.ScaleValue<'space'>) => ({
        marginRight: value,
    }),
    mb: (value: Stitches.ScaleValue<'space'>) => ({
        marginBottom: value,
    }),
    ml: (value: Stitches.ScaleValue<'space'>) => ({
        marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
        marginLeft: value,
        marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
        marginTop: value,
        marginBottom: value,
    }),
}
});

/**
 * The CSS types that map to the theme.
 */
 export type CSS = Stitches.CSS<typeof config>;

/**
* A global css reset. Call function at the root level of your app.
*/
export const resetCSS = globalCss({
  '*': {
    verticalAlign: 'baseline',
    fontWeight: 'inherit',
    fontFamily: 'Inter',
    fontStyle: 'inherit',
    fontSize: '16px',
    border: '0 none',
    outline: 0,
    padding: 0,
    margin: 0,
  }
})