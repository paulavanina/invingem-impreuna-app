export const SignUpValidation={
    initialValues:{
        mode: 'uncontrolled',
        nume:'',
        prenume:'',
        status:'',
        email: '',
        parola:'',
      },
      validate: {
        email: (value:string ) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        parola: (val:string) => (val.length <= 6 ? 'Parola trebuie sa contina minim 6 caractere' : null),
      },
}