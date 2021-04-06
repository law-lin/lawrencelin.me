import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Providers
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import { TerminalContextProvider } from 'react-terminal';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ colors });
const configTheme = extendTheme({ config });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TerminalContextProvider>
        <ColorModeScript
          initialColorMode={configTheme.config.initialColorMode}
        />
        <App />
      </TerminalContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
