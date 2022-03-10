/* eslint-disable react/display-name */
import React from 'react';
import { styled, keyframes } from '@stitches/react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  zIndex: 1,
  paddingTop: '$xxl',
  listStyle: 'none',
  maxWidth: "1440px",
});

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  // backgroundColor: '$lightGrey',
  padding: 6,
  borderRadius: 6,
  listStyle: 'none',
  // boxShadow: `$primaryFocus`,
});

const itemStyles = {
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: '$black',
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px $grey` },
  '&:hover': { backgroundColor: '$lighterGrey'},
};

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 6,
});

const StyledCaret = styled(CaretDownIcon, {
  position: 'relative',
  color: '$black',
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
});

const StyledTriggerWithCaret = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledTrigger {...props} ref={forwardedRef}>
    {children}
    <StyledCaret aria-hidden />
  </StyledTrigger>
));

const StyledLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
});

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
});

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
});

const StyledArrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: 'white',
  width: 10,
  height: 10,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2,
});

const StyledIndicatorWithArrow = React.forwardRef((props, forwardedRef) => (
  <StyledIndicator {...props} ref={forwardedRef}>
    <StyledArrow />
  </StyledIndicator>
));

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  width: '100%',
  backgroundColor: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
});

// Exports
const NavigationMenu = StyledMenu;
const NavigationMenuList = StyledList;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = StyledTriggerWithCaret;
const NavigationMenuLink = StyledLink;
const NavigationMenuContent = StyledContent;
const NavigationMenuViewport = StyledViewport;
const NavigationMenuIndicator = StyledIndicatorWithArrow;

// Your app...
const ContentList = styled('ul', {
  display: 'grid',
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: 'none',

  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          width: 500,
          gridTemplateColumns: '.75fr 1fr',
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 600,
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)',
        },
      },
    },
  },
});

const ListItem = styled('li', {});

const LinkTitle = styled('div', {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: '$black',
});

const LinkText = styled('p', {
  all: 'unset',
  color: '$black',
  lineHeight: 1.4,
  fontWeight: 'initial',
});

const ContentListItem = React.forwardRef(({ children, title, ...props }, forwardedRef) => (
  <ListItem>
    <NavigationMenuLink
      {...props}
      ref={forwardedRef}
      css={{
        padding: 12,
        borderRadius: 6,
        '&:hover': { backgroundColor: '$lighterGrey' },
      }}
    >
      <LinkTitle>{title}</LinkTitle>
      <LinkText>{children}</LinkText>
    </NavigationMenuLink>
  </ListItem>
));



const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0,
  perspective: '2000px',
});

export const Header = () => {
  return (
    <NavigationMenu>

      <NavigationMenuItem>
        <NavigationMenuLink href="https://github.com/radix-ui">
          FM Hälsoklinik
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuList>

        {/* <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/radix-ui">Hur kan vi hjälpa dig?</NavigationMenuLink>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <NavigationMenuTrigger>Tjänster</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="one">
              <ContentListItem href="https://stitches.dev/" title="Massage">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ContentListItem>
              <ContentListItem href="/colors" title="Funktionsmedicinsk behandling">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/radix-ui">Blogg</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/radix-ui">Om</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/radix-ui">Kontakt</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenu>
  );
};

export default Header;


// export function Header({ children }: React.PropsWithChildren<{}>) {
//   return (
//     <header>
//       {children}
//     </header>
//   );
// }