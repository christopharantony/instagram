import React from 'react';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password is too short')
    .required('Password is required'),
});
function SampleForm() {
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      // Do something with the form values, for example send a request to the server
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <h3>Form</h3>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.name && formik.touched.name)}
          helperText={
            formik.errors.name && formik.touched.name ? formik.errors.name : ''
          }
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.email && formik.touched.email)}
          helperText={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : ''
          }
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.password && formik.touched.password)}
          helperText={
            formik.errors.password && formik.touched.password
              ? formik.errors.password
              : ''
          }
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
}

export default SampleForm;
