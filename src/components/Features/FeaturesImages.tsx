import {  Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
import classes from './FeaturesImages.module.css';

const data = [
  {
    id:1,
    title: 'Titlu',
    description: 'Descriere',
  },
  {
    id:2,
    title: 'Titlu',
    description: 'Descriere',
  },
  {
    id:3,
    title: 'Titlu',
    description: 'Descriere',
  },
  {
    id:4,
    title: 'Titlu',
    description: 'Descriere',
  },
];

export function FeaturesImages() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.id}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Title className={classes.title} order={2}>
       Features<span className={classes.highlight}></span> 
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus hic quae, eius reiciendis unde illum totam, autem numquam eos non officiis eveniet quas enim quidem consequatur velit animi quod!
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}