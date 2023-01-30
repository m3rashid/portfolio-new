import React from 'react';
// import { createRoot } from 'react-dom/client';
import { ColorModeScript } from '@chakra-ui/react';

import { App } from './App';
import { hydrate, render } from 'react-dom';

const rootElement = document.getElementById('root') as HTMLElement;
// const root = createRoot(rootElement);

const InnerApp = () => (
  <React.StrictMode>
    <ColorModeScript initialColorMode='dark' />
    <App />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrate(<InnerApp />, rootElement);
} else {
  render(<InnerApp />, rootElement);
}
