import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import { BrowserRouter } from 'react-router-dom'; 
import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import './App.css'
const theme = createTheme({
  fontFamily: 'Poppins',
 colors:{
  myPrimary:['#edfaf0',
  '#def0e4',
  '#bce0c8',
  '#98cfa9',
  '#78c090',
  '#65b77f',
  '#5ab375',
  '#499d63',
  '#3e8c57',
  '#2f7948']
 },
 primaryColor:'myPrimary',
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