import React from 'react'
import { Container, Text, Button } from '@hackclub/design-system'

export default () => (
  <Container maxWidth={42} mt={3} mb={4} align="center">
    <Text color="slate" f={3}>
    The Anti-Hack Club is a network of passionate students learning to keep their Minecraft 
        and Roblox accounts safe through learning the basics of cybersecurity.
    </Text>
    {/*<Button href="https://finder.hackclub.com" inverted mt={[3, 4]}>
      Find a Club Near You »
    </Button>*/}
  </Container>
)
