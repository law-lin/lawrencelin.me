import React from 'react';
import {
  Container,
  Heading,
  Text,
  Stack,
  Box,
  useColorMode,
  Flex,
  Tag,
  Divider,
  SimpleGrid,
  List,
  ListItem,
} from '@chakra-ui/react';
import { MdComputer } from 'react-icons/md';
import { FaMobile, FaServer, FaDatabase, FaCogs } from 'react-icons/fa';

const AboutPanel = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <section>
        <Container display='flex' flexDirection='column' alignItems='center'>
          <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light' />
          <Heading size='3xl'>Lawrence Lin</Heading>
          <Text fontSize='3xl'>Software Developer</Text>
        </Container>
      </section>
      <section>
        <Container>
          <Heading size='lg'>About Me</Heading>
          <Box flex='1' px='5'>
            <Text fontSize='lg'>
              I'm a software developer and computer science student at Stony
              Brook University.
            </Text>
          </Box>
        </Container>
      </section>
      <section
        style={{
          borderRadius: '14px',
          backgroundColor: colorMode === 'dark' ? '#262424' : '#ffffff',
        }}
      >
        <Container padding='20px 0'>
          <Heading size='xl'>Skills</Heading>
        </Container>
        <SimpleGrid columns={5} spacing={10}>
          <Box>
            <Stack>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <MdComputer size={75} />
              </Box>
              <Heading size='lg'>Front-End</Heading>
              <List>
                <ListItem>HTML/CSS</ListItem>
                <ListItem>JavaScript/TypeScript</ListItem>
                <ListItem>React.js</ListItem>
                <ListItem>Vue.js</ListItem>
              </List>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <FaServer size={75} />
              </Box>
              <Heading size='lg'>Back-End</Heading>
              <List>
                <ListItem>Node.js &bull; Express.js</ListItem>
                <ListItem>Firebase</ListItem>
                <ListItem>Python &bull; Flask</ListItem>
                <ListItem>AWS</ListItem>
              </List>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <FaMobile size={75} />
              </Box>
              <Heading size='lg'>Mobile</Heading>
              <List>
                <ListItem>React Native</ListItem>
                <ListItem>Android &bull; Java</ListItem>
                <ListItem>iOS &bull; Swift</ListItem>
              </List>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <FaDatabase size={75} />
              </Box>
              <Heading size='lg'>Databases</Heading>
              <List>
                <ListItem>SQL</ListItem>
                <ListItem>MongoDB</ListItem>
                <ListItem>Firebase Firestore/RTDB</ListItem>
                <ListItem>Parse</ListItem>
              </List>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <FaCogs size={75} />
              </Box>
              <Heading size='lg'>Other</Heading>
              <List>
                <ListItem>C &bull; Java &bull; Bash</ListItem>
                <ListItem>REST &bull; GraphQL</ListItem>
                <ListItem>d3.js</ListItem>
                <ListItem>
                  Git &bull; GitHub &bull; GitLab &bull; Bitbucket
                </ListItem>
                <ListItem>Heroku</ListItem>
                <ListItem>Raspberry Pi</ListItem>
              </List>
            </Stack>
          </Box>
        </SimpleGrid>
      </section>
    </>
  );
};

export default AboutPanel;
