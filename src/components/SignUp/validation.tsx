export const validateEmail=(value:string)=>(/^\S+@\S+$/.test(value) ? null : 'Invalid email')
export const validatePassword=(val:string)=> (val.length <= 6 ? 'Parola trebuie sa contina minim 6 caractere' : null)
