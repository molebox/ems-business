import { Divider, Text, Stack } from "components";

export function Hero() {
  return (
    <Stack 
    css={{
      mx: '$xxl',
      gridColumn: 'span 2',
      gridRow: '1',
      paddingTop: "xl",
      alignSelf: "center",
      maxWidth: "1440px",
    }}>
      <Text 
      as="h1" 
      size={{'@initial': 'jumbo', '@xs': 'xxl', '@sm': 'huge', '@md': 'huge', '@lg': 'jumbo', '@xl': 'huge'}}
      weight="bold" 
      >
        FM Hälsoklinik
      </Text>
      <Text 
      as="h2" 
      size={{
        '@initial': 'xl', 
        '@xs': 'medium', 
        '@sm': 'xl', 
        '@md': 'large', 
        '@lg': 'large', 
        '@xl': 'large'
      }}
      weight='regular'
      color="grey"
      py='xl'
      css={{
        maxWidth: '800px',
      }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Divider 
      css={{
        width: '100%',
        gridColumn: 'span 2',
      }}
      my={{
        '@initial': 'xxl',
        '@xs': 'xxl',
        '@sm': 'xxl',
        '@md': 'xxl',
        '@xl': 'huge',
      }}
    />
    </Stack>
  )
}