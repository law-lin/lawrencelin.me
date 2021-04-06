import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';

const AboutPanel = () => {
  return (
    <Container
      display='flex'
      flexDirection='column'
      alignItems='center'
      textAlign='center'
    >
      <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light' />
      <Heading size='3xl'>Lawrence Lin</Heading>
      <Text fontSize='3xl'>Software Developer</Text>
    </Container>
  );
};

export default AboutPanel;
