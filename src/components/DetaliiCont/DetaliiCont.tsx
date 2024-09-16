import { Avatar, Button, TextInput, Center} from '@mantine/core'
import './DetaliiCont.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useForm } from '@mantine/form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { response } from 'express';

interface BlogInterface{
  titlu: string;
  descriere: string;
}
export const DetaliiCont = () => {
 
   const Blog={
    initialValues:{
        mode: 'uncontrolled',
        titlu:'',
        descriere:'',
    },
  }
    const form=useForm<BlogInterface>(Blog);

    const[userData, setUserData]=useState({
      nume:'',
      prenume:'',
      email:'',
    })

    useEffect(()=>{
      const token=localStorage.getItem('token');

      if(!token){
        console.error("token-ul lipseste");
        return;
      }
      const config={
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
      const userProfileURL="http://localhost:8080/user-profile"
      
       axios.get(userProfileURL, config)
       .then(response=>{
        setUserData(response.data);
       }).catch(error=>{
        console.error("eroare");
       })
    },[])


    const handleSubmit = async (values: BlogInterface) => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("token-ul lipseste");
          return;
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const blogURL = "http://localhost:8080/blog";
        const response = await axios.post(blogURL, values, config);
        console.log(response.data);
        
      } catch (error) {
        console.error("Eroare in inserarea datelor in bd.");
      }
    };
 
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
      <div className="nume">Nume: {userData.nume}</div>
      <div className="prenume">Prenume: {userData.prenume} </div>
      <div className='email'>Email: {userData.email}</div>
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
