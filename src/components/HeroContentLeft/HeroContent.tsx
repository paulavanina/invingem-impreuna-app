import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from './HeroContent.module.css'

export function HeroContentLeft() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Bine ați venit la Împreună Învingem !</Title>
        <Text className={classes.description} size="xl" mt="xl" style={{color:'white'}}>
        Suntem aici pentru a duce împreună oamenii care se confruntă cu cancerul, pentru a împărtăși experiențe, a găsi resurse utile și a oferi suport emoțional. 
        </Text>
        <Button style={{ backgroundColor: '#2f7948' }} radius="xl" size="xl" className={classes.control}>Get started</Button>
      </Container>
    </div>
  );
}