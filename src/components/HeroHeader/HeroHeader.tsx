import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroHeader.module.css'
import headerImg from '../../assets/placeholder-img.png'

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}> </span>  <br /> 
          </Title>
          <Text c="dimmed" mt="md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, numquam rem minus veniam ut fuga officia eos hic repellendus tempore assumenda! Dicta exercitationem illo dolor rem molestias iste praesentium magnam?
          </Text>

          <List mt={30} spacing="sm" size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }>
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all components and hooks
              export types
            </List.Item>    
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
          </Group>
        </div>
        <Image src={headerImg} className={classes.image} />
      </div>
    </Container>
  );
}