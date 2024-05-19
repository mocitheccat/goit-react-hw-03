import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { faker } from "@faker-js/faker";

import css from "./ContactForm.module.css";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const initialFormikValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAppend }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAppend({ ...values, id: faker.string.uuid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialFormikValues}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Full Name</label>
        <Field className={css.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={phoneFieldId}>Phone Number</label>
        <Field
          className={css.input}
          type="text"
          name="number"
          id={phoneFieldId}
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
