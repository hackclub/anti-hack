import React from 'react'
import {
  Box,
  Heading,
  Container,
  Text,
  Flex,
  Module,
  Button,
  BackgroundImage,
  Link as A
} from '@hackclub/design-system'
import Link from 'gatsby-link'
import Stat from 'components/Stat'
import { stats } from 'data.json'

const Grid = Box.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[2]}px;
  width: 100%;

  > div {
    width: 100%;
    box-shadow: ${props => props.theme.boxShadows[3]};
    border-radius: ${props => props.theme.radius};
    max-width: 100%;
  }

  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${props => props.theme.space[4]}px;
  }
`

const Super = Box.extend`
  background: ${props => props.theme.colors.warning} url(/diagonal.svg) top
    center repeat-x;
  background-size: auto 100%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(/diagonal.svg) top right repeat-x;
    background-size: auto 100%;
    background-position-x: 32%;
  }

  > * {
    position: relative;
  }
`

const Graph = Box.extend`
  background: ${props => props.theme.colors.accent} url(/graph.svg) no-repeat;
  background-size: 100% 100%;
`

const Modules = Box.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  div {
    align-items: flex-start;
    padding: 0;
    text-align: left;
    width: 100% !important;
  }
`

const Stats = Box.extend`
  column-count: 2;
  div {
    text-align: left;
  }
`

const Like = A.extend.attrs({
  underline: true,
  color: 'white',
  target: '_blank'
})``

const Photo = BackgroundImage.extend.attrs({ role: 'img' })`
  overflow: hidden;
  transition: all 0.125s ease-out;
  background-size: auto 100%;
  &:hover {
    background-size: auto 108%;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    background-size: cover !important;
  }
`

const Action = Button.withComponent(Link).extend`
  transition: transform 0.125s ease-out;
  will-change: transform;
  transform: scale(1);
  &:hover,
  &:focus {
    transform: scale(1.06);
  }
  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`

export default () => (
  <Container w={1} px={[3, 4, null, 2]} mt={[4, 5]}>
    <Container maxWidth={48} mx={0}>
      <Heading.h2 f={[4, 5]} mb={3}>
        Anti-Hack Club is the largest community of students learning to secure their Roblox and Minecraft accounts
      </Heading.h2>
      <Text f={[3, 4]}>
        Every day, thousands of people are learning how to illegally break into Roblox and Minecraft accounts and
        retrieve your game status that you spent thousands of hours on within minutes. This is not fair. 
      </Text>
    </Container>
    <Grid mt={4} mb={[4, 6]} color="white">
      <Box bg="info" p={[3, 4]}>
        <Heading.h3 f={4} my={0} caps>
          Stop 'em illegal hackers!
        </Heading.h3>
        <Text f={3} my={3}>
          Everyday, thousands of accounts are at risk. Not only Minecraft and Roblox, your Facebook, 
          Whatsapp, or even Harris Teeter VIC cards are being illegally accessed. 
        </Text>
      </Box>
      <Photo image="/anti_1.png" />
    </Grid>
    <Container maxWidth={48} mx={0} mt={5}>
      <Heading.h2 f={[4, 5]} mb={3}>
        An old Chinese proverb goes, "If you know yourself and your enemy, you'll never lose a battle. "
      </Heading.h2>
      <Text f={[3, 4]}>
        
      </Text>
    </Container>
    <Grid my={[4, 5]} color="white" pb={3}>
      <Photo image="/anti_2.png" />
      <Super p={[3, 4]}>
        <Heading.h3 f={4} my={0} caps>
          Security is key
        </Heading.h3>
        <Text f={3} my={3}>
          Learning to cybersecurity is uniquely empowering: you go from a victim to a
          winner. The goal of Anti-Hack Club is to help you become that winner. We
          want everyone to be safe when enjoying themselves online.
        </Text>
      </Super>
    </Grid>
  </Container>
)
