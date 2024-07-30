import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import { BrowserRouter } from 'react-router-dom'; 
import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import './App.css'
const theme = createTheme({
  fontFamily: 'Poppins',
 
});


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </MantineProvider>
  );
}