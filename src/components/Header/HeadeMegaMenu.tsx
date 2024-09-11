import {Group, Button, Box, Burger, Drawer,} from '@mantine/core';
import Logo from '../../assets/Împreună (4).png'
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';
import { Link, useNavigate } from 'react-router-dom';
export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  
  const navigate=useNavigate();

  const handleLogin=()=>{
    navigate('/logIn');
  }

  const handleSignUp=()=>{
    navigate('/signUp')
  }

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group  justify="space-between" h="100%">
        <img src={Logo} style={{width:'150px', height: 'auto'}} />
          <Group h="100%" gap={1} visibleFrom="sm">
            <Link to="/" className={classes.link}>
              Despre noi
            </Link>  
            <Link to="/povestea-mea" className={classes.link}>
              Povestea mea
            </Link>
            <a href="/comunitate" className={classes.link}>
              Comunitate
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Link to='/contulMeu' className={classes.link}>
            Contul meu 
            </Link>
            <Button variant="default" onClick={handleLogin}>Log in</Button>
            <Button onClick={handleSignUp}>Sign up</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      > 
      </Drawer>
    </Box>
  );
}