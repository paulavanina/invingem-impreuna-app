import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import { BrowserRouter } from 'react-router-dom'; 
import { createTheme, MantineProvider } from '@mantine/core';
import './App.css'
const theme = createTheme({
  fontFamily: 'Poppins',
 colors:{
  myPrimary:[
    "#598c88",
    "#598c88",
    "#598c88",
    "#598c88",
    "#598c88",
    "#598c88",
    "#598c88",
    "#598c88",
    "#598c88",
    "#598c88",
    "#598c88",
  ]
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