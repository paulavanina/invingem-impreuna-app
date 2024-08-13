import { Button, Group, TextInput, MultiSelect, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import './SignUp.css'
export function SignUp() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      nume:'',
      prenume:'',
      status:'',
      email: '',
      parola:'',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      parola: (val) => (val.length <= 6 ? 'Parola trebuie sa contina minim 6 caractere' : null),
    },
  });

  return (
    <div className='background-container'>
    <div className='form-container'>
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput className='form-component'
        withAsterisk
        label="Nume"
        placeholder="Numele tau"
        key={form.key('nume')}
        {...form.getInputProps('nume')}
      />
       <TextInput className='form-component'
        withAsterisk
        label="Prenume"
        placeholder="Prenumele tau"
        key={form.key('prenume')}
        {...form.getInputProps('prenume')}
      />
      <MultiSelect className='form-component'
      label="Status"
      placeholder="Alege status-ul"
      data={['Luptător împotriva cancerului', 'Supraviețuitor al cancerului','Susținător al celor afectați de cancer']}
      searchable
      />
      <TextInput className='form-component'
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <PasswordInput className='form-component'
        withAsterisk
        label="Parola"
        placeholder="parola"
        key={form.key('parola')}
        {...form.getInputProps('parola')}
      />
    

      <Group justify="center" pr={10} pt={15}  >
        <Button type="submit">Submit</Button>
      </Group>
    </form>
    </div>
    </div>
  );
}