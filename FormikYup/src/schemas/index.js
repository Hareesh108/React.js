import * as Yup from 'yup';

export const FormSchema = Yup.object({
  name: Yup.string().min(2).max(25).required('Enter your name..'),
  email: Yup.string().email().required('Enter email...'),
  password: Yup.string().min(6).required('Enter password..'),
  conform_password: Yup.string().required("Password must match")
  .oneOf([Yup.ref('password'),null],"Password Must Match")
});
