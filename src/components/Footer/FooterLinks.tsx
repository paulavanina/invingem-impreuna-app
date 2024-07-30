import { Text, Container } from '@mantine/core';
import classes from './FooterLinks.module.css';
import Logo from '../../assets/Împreună__1_-removebg-preview.png'
const data = [
  {
   title:'', 
    links: [
      { label: 'Despre noi', link: '#' },
      { label: 'Resurse', link: '#' },
      { label: 'Povestea mea', link: '#' },
      { label: 'Comunitate', link: '#' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <img src={Logo} style={{width:'150px', height: 'auto'}} />
          <Text size="xs" c="dimmed" className={classes.description}>
          O comunitate online pentru toate varstele care se confrunta cu cancerul.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Impreuna Invingem. Toate drepturile rezervate.
        </Text></Container>
    </footer>
  );
}