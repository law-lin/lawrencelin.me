import React, { useEffect, useState } from 'react';
import { ReactTerminal } from 'react-terminal';
import { useColorMode, IconButton, Container, Button } from '@chakra-ui/react';
import Elevator from 'elevator.js';
import { GiElevator } from 'react-icons/gi';
import './App.css';
// Utils
import { isBrowser } from 'react-device-detect';
import { Link, Element, scroller } from 'react-scroll';
// Panels
import AboutPanel from './components/AboutPanel';
import ProjectsPanel from './components/ProjectsPanel';
import ExperiencePanel from './components/ExperiencePanel';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [elevator, setElevator] = useState();

  useEffect(() => {
    setElevator(
      new Elevator({
        mainAudio: '/elevator.mp3',
        endAudio: '/ding.mp3',
        duration: 5000,
      })
    );
  }, []);

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
    scroller.scrollTo(command, {
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className='App'>
      {isBrowser && (
        <aside className='terminal'>
          <ReactTerminal
            commands={commands}
            theme={colorMode}
            welcomeMessage={
              <div>
                Welcome to my site! You can use this terminal to navigate it,
                scroll down on the right of this terminal, or use the navbar.
                Type
                <span className='code'> help </span>for a list of supported
                commands.
              </div>
            }
            prompt='visitor@lawrencelin.me ~ $'
            errorMessage={'bash: command not found'}
          />
        </aside>
      )}
      <article className='content'>
        <div
          className='sticky-header'
          style={{ width: isBrowser ? '75%' : '100%' }}
        >
          <Link
            activeClass='active'
            className='about'
            to='about'
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button mx='2' my='2'>
              About Me
            </Button>
          </Link>

          <Link
            activeClass='active'
            className='experience'
            to='experience'
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button mx='2' my='2'>
              Experience
            </Button>
          </Link>

          <Link
            activeClass='active'
            className='projects'
            to='projects'
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button mx='2' my='2'>
              Projects
            </Button>
          </Link>
        </div>
        <div className='main-content'>
          <Element name='about'>
            <AboutPanel />
          </Element>
          <Element name='experience'>
            <ExperiencePanel />
          </Element>
          <Element name='projects'>
            <ProjectsPanel />
          </Element>
          <Container textAlign='center'>
            <IconButton
              onClick={() => {
                elevator.elevate();
              }}
              icon={<GiElevator />}
            />
          </Container>
        </div>
      </article>
    </div>
  );
}

export default App;
