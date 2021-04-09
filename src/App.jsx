import React, { useEffect, useState } from 'react';
import { ReactTerminal } from 'react-terminal';
import {
  useColorMode,
  IconButton,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Elevator from 'elevator.js';
import { GiElevator } from 'react-icons/gi';
import './App.css';
import AboutPanel from './components/AboutPanel';
import ProjectsPanel from './components/ProjectsPanel';
import ExperiencePanel from './components/ExperiencePanel';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [tabIndex, setTabIndex] = useState(0);
  const [elevator, setElevator] = useState();

  useEffect(() => {
    setElevator(
      new Elevator({
        mainAudio: '/elevator.mp3',
        endAudio: '/ding.mp3',
        duration: 3000,
      })
    );
  }, []);

  const tabs = ['about', 'experience', 'projects'];

  const commands = {
    help: `Supported commands: about, experience, projects,  ${
      colorMode === 'dark' ? 'lightmode' : 'darkmode'
    }, clear`,
    about: () => handleCommandChange('about'),
    experience: () => handleCommandChange('experience'),
    projects: () => handleCommandChange('projects'),
    darkmode: () => {
      if (colorMode !== 'dark') {
        toggleColorMode();
      } else {
        return "You're already using dark mode!";
      }
    },
    lightmode: () => {
      if (colorMode !== 'light') {
        toggleColorMode();
      } else {
        return "You're already using light mode!";
      }
    },
  };

  const handleCommandChange = (command) => {
    setTabIndex(tabs.indexOf(command));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <div className='App'>
      <aside className='terminal'>
        <ReactTerminal
          commands={commands}
          theme={colorMode}
          welcomeMessage={
            <div>
              Welcome to my site! You can either use this terminal to navigate
              it or simply scroll down on the right of this terminal. Type
              <span className='code'> help </span>for a list of supported
              commands.
            </div>
          }
          prompt='visitor@lawrencelin.me ~ $'
          errorMessage={'bash: command not found'}
        />
      </aside>
      <article className='content'>
        <Tabs
          size='lg'
          variant='soft-rounded'
          index={tabIndex}
          onChange={handleTabsChange}
        >
          <TabList>
            <Tab>About Me</Tab>
            <Tab>Experience</Tab>
            <Tab>Projects</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <AboutPanel />
            </TabPanel>
            <TabPanel>
              <ExperiencePanel />
            </TabPanel>
            <TabPanel>
              <ProjectsPanel />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Container textAlign='center'>
          <IconButton
            onClick={() => {
              elevator.elevate();
            }}
            icon={<GiElevator />}
          />
        </Container>
      </article>
    </div>
  );
}

export default App;
