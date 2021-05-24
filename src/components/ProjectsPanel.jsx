import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

import onecase from '../assets/onecase.png';
import camo from '../assets/camo.PNG';
import showcase from '../assets/showcase_stuff.png';
import steam from '../assets/steam-game-popularity.PNG';
import speaclear from '../assets/speaclear.PNG';
import emoji from '../assets/emoji-of-the-minute.PNG';
import collink from '../assets/collink.PNG';

const ProjectsPanel = () => {
  return (
    <section>
      <Heading textAlign='center'>Projects</Heading>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2, xl: 3 }} spacing='40px'>
        <Box>
          <ProjectCard
            href='https://onecase.app/lawrence'
            thumbnail={onecase}
            title='OneCase'
            description='Productive journaling with friends'
            tags={['TS', 'React', 'Node.js', 'PostgreSQL']}
          />
        </Box>
        <Box>
          <ProjectCard
            href='https://usecamo.app'
            thumbnail={camo}
            title='Camo'
            description='Connect with like-minded students anonymously'
            tags={['JS', 'React Native', 'Node.js', 'Firebase']}
          />
        </Box>
        <Box>
          <ProjectCard
            href='http://theshowcase.app/lawlin'
            thumbnail={showcase}
            title='Showcase'
            description='Showcase your interests, passions, and projects'
            tags={['JS', 'React', 'Node.js', 'Firebase']}
          />
        </Box>
        <Box>
          <ProjectCard
            href='https://www.youtube.com/watch?v=Aht3wotrrBk&list=PLyCRt3MN8s8OJp-M5UdCQv-NDllAqJOb5&index=4'
            thumbnail={steam}
            title='Steam Game Popularity Dashboard'
            description='Visualize and analyze the popularity of Steam games over time'
            tags={['JS', 'React.js', 'd3.js', 'Python Flask']}
          />
        </Box>
        <Box>
          <ProjectCard
            href='https://speaclear.online'
            thumbnail={speaclear}
            title='Speaclear'
            description='Improve public speaking by identifying filler word usage'
            tags={['JavaScript', 'React']}
          />
        </Box>
        <Box>
          <ProjectCard
            href='http://minutemoji.online/'
            thumbnail={emoji}
            title='Emoji of the Minute'
            description='Vote for the emoji of the minute!'
            tags={['JS', 'React', 'Node.js', 'Firebase']}
          />
        </Box>
        <Box>
          <ProjectCard
            href='http://collink.appspot.com/'
            thumbnail={collink}
            title='Collink'
            description='Linking up students on their college campuses nationwide'
            tags={['Python', 'JavaScript', 'Google App Engine']}
          />
        </Box>
        {/* <Box>
        <ProjectCard
          href='http://minutemoji.online/'
          title='Emoji of the Minute'
          description='Vote for the emoji of the minute!'
          tags={['JS', 'React', 'Node.js', 'Firebase']}
        />
      </Box>
      <Box>
        <ProjectCard
          href='http://minutemoji.online/'
          title='Emoji of the Minute'
          description='Vote for the emoji of the minute!'
          tags={['JS', 'React', 'Node.js', 'Firebase']}
        />
      </Box> */}
      </SimpleGrid>
    </section>
  );
};

export default ProjectsPanel;
