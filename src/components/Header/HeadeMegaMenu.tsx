import {Group, Button, Box, Burger, Drawer,} from '@mantine/core';
import Logo from '../../assets/logo-placeholder.png'
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={100}>
      <header className={classes.header}>

        <Group  justify="space-between" h="100%">
        <img src={Logo} style={{width:'150px', height: 'auto'}} />
          <Group h="100%" gap={1} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Despre noi
            </a>
            <a href="#" className={classes.link}>
              Resurse
            </a>
            <a href="#" className={classes.link}>
              Povestea mea
            </a>
            <a href="#" className={classes.link}>
              Comunitate
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
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