import {
  Card,
  Image,
  Text,
  Group,
  Center,
  Avatar,
  Button,
  
} from '@mantine/core';
import classes from './BlogCard.module.css';
import avatar from '../../assets/profile-mihail.jpg'
import healthcare from '../../assets/healthcare.avif'
export function BlogCard() {

  return (
    <div className="card-container">
  
    <Center>
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a>
          <Image src={healthcare} height={200} p={10} radius={15}/>
        </a>
      </Card.Section>

      <Text  fw={500} component="a">
        Principalele semne ale unei boli oncologice
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={7}>
      În acest articol iti prezint principalele semne și simptome care pot indica prezența unui cancer, de la pierderea inexplicabilă în greutate sau starea de somnolență nejustificată până la febra cronică sau alte schimbări neobișnuite ale corpului. 
      Vom explora semnele pe care nu trebuie să le ignorăm, dar NU UITA ca acest material nu este menit să te sperie, nici să te diagnosticheze, ci să informeze. Fiecare simptom pe care îl discutăm poate fi întâlnit și în alte afecțiuni, deci dacă recunoști ceva din ceea ce vorbim aici, nu înseamnă că ai cancer. Scopul nostru este să te îndemnăm să acorzi mai multă atenție semnalelor pe care ți le dă corpul și să consulți un medic cât mai repede, pentru investigații amănunțite și diagnostic. Prevenția și profilaxia sunt cheia sănătății de lungă durată.
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar
            src={avatar}
            size={35}
            radius="xl"
            mr="xs"
          />
          <Text fz={14} inline>
           Mihail Pautov
          </Text>
          <Button ml={100}>Read more</Button>
        </Center>

      </Group>
    </Card>
    </Center>
    </div>
  );
}