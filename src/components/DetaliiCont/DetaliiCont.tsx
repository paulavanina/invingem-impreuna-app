
import { Avatar, Button, TextInput, Center} from '@mantine/core'
import './DetaliiCont.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useForm } from '@mantine/form';
import { Blog } from './Blog';
import axios from 'axios';
export const DetaliiCont = () => {
    const form=useForm(Blog);

    const handleSubmit=async(values:any)=>{
      try{
    const response= await axios.post("http://localhost:8080/blog", values);
    console.log(response.data);
      }catch(error){
    console.error("Eroare in inserarea datelor in bd.")
      }
    }

    
  return (
    <Center>
    <div className='contul-meu'>
    <div className="profile-container">
      <Avatar className='avatar'
        src=""
        size={130}
        radius={80}
        mx="auto"
        mt={20}
      />
      <div className="nume">Nume:</div>
      <div className="prenume">Prenume: </div>
      <div className='email'>Email:</div>
    </div>

    {/* Blog: */}
    <form onSubmit={form.onSubmit((values)=>handleSubmit(values))}>
    <div className="content-container">
        <TextInput label="Titlu" 
        placeholder='Titlul postarii'
        p={20}  
        key={form.key('titlu')}
        {...form.getInputProps('titlu')}>
        </TextInput>

      <div className="editor-container">
        <ReactQuill theme="snow" 
        key={form.key('descriere')}
        {...form.getInputProps('descriere')}
        />
        </div>
        <Button type='submit' m={20} className='button'>Publica postarea</Button>    
    </div>
    </form>
    </div>
    </Center>
  )
}

export default DetaliiCont
