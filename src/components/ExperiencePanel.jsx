import React from 'react';
import {
  Heading,
  Text,
  Stack,
  Box,
  StackDivider,
  Flex,
} from '@chakra-ui/react';

const experience = [
  {
    company: 'IBM',
    position: 'Full Stack Developer Intern, May 2021 - August 2021',
  },
  {
    company: 'Goodnation',
    position: 'Software Engineering Intern, June 2020 - August 2020',
  },
  {
    company: 'Open Learning Exchange',
    position: 'Software Engineering Intern, March 2020 - May 2020',
  },
  {
    company: 'Coding4Youth',
    position: 'Online Computer Science Instructor, February 2020 - June 2020',
  },
];
const ExperienceBox = ({ company, position, description }) => {
  return (
    <Box h='100px' px='5'>
      <Heading size='md'>{company}</Heading>
      <Text color='gray.500'>{position}</Text>
      <Text>{description}</Text>
    </Box>
  );
};
const ExperiencePanel = () => {
  return (
    <div>
      <Box mx='20'>
        {/* <Heading size='lg'>Experience</Heading> */}
        <Stack mt='10' divider={<StackDivider borderColor='gray.200' />}>
          {experience.map((e) => (
            <ExperienceBox {...e} />
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default ExperiencePanel;
