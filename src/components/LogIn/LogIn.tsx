import {  Button, Group, TextInput, PasswordInput} from '@mantine/core';
import { useForm } from '@mantine/form';
import './LogIn.css'
import { initialValues } from './constants';
import { validateEmail,validatePassword } from './validation';
export function Login(){
    const form=useForm({
        mode:'uncontrolled',
        initialValues :initialValues,
        validate: {
            email: validateEmail,
            parola: validatePassword
          },
    });
    return(
    <div className='background-container'>
         <div className='su-form-container'>
            <form onSubmit={form.onSubmit((values)=>console.log(values))}>
                    <TextInput className='su-form-component' 
                    withAsterisk
                    label="Email"
                    placeholder="invingemimpreuna@yahoo.com"
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                    />

                    <PasswordInput className='su-form-component'
                    label="Parola"
                    placeholder="parola"
                    key={form.key('parola')}
                    {...form.getInputProps('parola')}
                    />
                    
                    <Group justify="center" pr={10} pt={10} >
                        <Button type="submit" className='su-form-component'>Submit</Button>
                    </Group>
            </form>
         </div>
    </div>
    );
}
