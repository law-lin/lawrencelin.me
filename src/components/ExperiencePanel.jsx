import React from 'react';
import { Heading, Text, Stack, Box, StackDivider } from '@chakra-ui/react';

const experience = [
  // {
  //   company: 'IBM',
  //   position: 'Full Stack Developer Intern, May 2021 - August 2021',
  //   description: 'Vue.js, Node.js, Webpack, Gulp, IBM Cloud',
  // },
  {
    company: 'Goodnation',
    position: 'Software Engineering Intern, June 2020 - August 2020',
    description: 'Ruby on Rails, PostgreSQL',
  },
  {
    company: 'Open Learning Exchange',
    position: 'Software Engineering Intern, March 2020 - May 2020',
    description: 'Android (Java/Kotlin), Bash, Raspberry Pi, Docker',
  },
  {
    company: 'Coding4Youth',
    position: 'Online Computer Science Instructor, February 2020 - June 2020',
    description:
      'Taught Java (intro to Java, Java Swing, data structures, Android app development), Python, and HTML/CSS',
  },
];
const ExperienceBox = ({ company, position, description }) => {
  return (
    <Box px='5'>
      <Heading size='md'>{company}</Heading>
      <Text color='gray.500'>{position}</Text>
      <Text>{description}</Text>
    </Box>
  );
};
const ExperiencePanel = () => {
  return (
    <section style={{ textAlign: 'left' }}>
      <Heading textAlign='center'>Experience</Heading>
      <Box mx='20'>
        {/* <Heading size='lg'>Experience</Heading> */}
        <Stack mt='10' divider={<StackDivider borderColor='gray.200' />}>
          {experience.map((e) => (
            <ExperienceBox {...e} />
          ))}
        </Stack>
      </Box>
    </section>
  );
};

export default ExperiencePanel;
