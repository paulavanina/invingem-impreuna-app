
import { Avatar, Button, TextInput, Center, Text} from '@mantine/core'
import './DetaliiCont.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';
export const DetaliiCont = () => {
    const [value, setValue] = useState('');
    const [title, setTitle]=useState("");
    
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
    <div className="content-container">
        <TextInput label="Titlu" placeholder='Titlul postarii' p={20} onChange={e=>setTitle(e.target.value)} ></TextInput>
        <div className="editor-container">
            <ReactQuill theme="snow" value={value} onChange={setValue}/>
        </div>
        <Button type='submit' m={20} className='button'>Publica postarea</Button>    
    </div>
    
    </div>
    </Center>
  )
}

export default DetaliiCont
