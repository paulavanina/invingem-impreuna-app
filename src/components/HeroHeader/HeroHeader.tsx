import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroHeader.module.css'
import thankYou from '../../assets/thank-you.png'
export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
          Spune-ti povestea ...
          </Title>
          <Text c="dimmed" mt="md">
          Fiecare poveste este unică și valoroasă. Ajută comunitatea să înțeleagă și să sprijine pe cei care se confruntă cu lupta împotriva cancerului.
          </Text>

          <List mt={30} spacing="sm" size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }>
            <List.Item>
              <b>Povestea ta </b>poate inspira și ajuta pe alții în aceeași situație.
            </List.Item>    
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
          </Group>
        </div>
        <Image src={thankYou} className={classes.image} />
      </div>
    </Container>
  );
}