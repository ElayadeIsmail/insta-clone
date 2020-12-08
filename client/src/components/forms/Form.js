import React from 'react';
import { Formik, Form } from 'formik';

function AppForm({ initialValues, onSubmit, validateSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validateSchema}
    >
      {() => <Form>{children}</Form>}
    </Formik>
  );
}

export default AppForm;
