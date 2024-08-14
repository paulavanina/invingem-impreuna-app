import { Container, Title, Button, Text } from '@mantine/core';
import classes from './ComunityContent.module.css'
const ComunityContent = () => {
  return (
    <div className={classes.hero}> 
      <Container className={classes.container} size="md">
        <Title className={classes.title} >Te invităm să te alături nouă </Title>
        <Text className={classes.description} size="xl" mt="xl" style={{color:'black'}}>
        Participarea la evenimente și webinarii este o oportunitate excelentă de a obține informații actualizate și de a interacționa cu alții care se confruntă cu provocări similare. 
        </Text>
        <Button style={{ backgroundColor: '#FFDE75' }} radius="xl" size="xl" className={classes.control}>Get started</Button>
       
      </Container>
    </div>
  );
}

export default ComunityContent
