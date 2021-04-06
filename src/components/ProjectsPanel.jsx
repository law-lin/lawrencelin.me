import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const ProjectsPanel = () => {
  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} spacing='40px'>
      <Box>
        <ProjectCard
          href='https://onecase.app/lawrence'
          title='OneCase'
          description='Productive journaling with friends'
          tags={['TS', 'React', 'Node.js', 'PostgreSQL']}
        />
      </Box>
      <Box>
        <ProjectCard
          title='Camo'
          description='Connect with like-minded students anonymously'
          tags={['JS', 'React Native', 'Node.js', 'Firebase']}
        />
      </Box>
      <Box>
        <ProjectCard
          href='http://theshowcase.app/lawlin'
          title='Showcase'
          description='Showcase your interests, passions, and projects'
          tags={['JS', 'React', 'Node.js', 'Firebase']}
        />
      </Box>
      <Box>
        <ProjectCard
          href='https://speaclear.online/'
          title='Speaclear'
          description='Improve public speaking by identifying filler word usage'
          tags={['JavaScript', 'React']}
        />
      </Box>
      <Box>
        <ProjectCard
          href='http://minutemoji.online/'
          title='Emoji of the Minute'
          description='Vote for the emoji of the minute!'
          tags={['JS', 'React', 'Node.js', 'Firebase']}
        />
      </Box>
      <Box>
        <ProjectCard
          href='http://collink.appspot.com/'
          title='Collink'
          description='Linking up students on their college campuses nationwide'
          tags={['Python', 'JavaScript', 'Google App Engine']}
        />
        {/* <TaggedContentCard
          href='https://github.com/nukeop'
          thumbnail='https://i.imgur.com/57I3RAq.jpg'
          title='Cupcakes'
          description='a bite-sized cake'
          tags={['food', 'cake', 'icing']}
        /> */}
      </Box>
      <Box>
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
      </Box>
    </SimpleGrid>
  );
};

export default ProjectsPanel;
