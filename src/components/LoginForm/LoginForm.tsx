'use client';

import React, { useId } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import { logInUser } from '@/redux/auth/operations';
import { useAppDispatch } from '@/redux/hooks';

export default function LoginForm() {
  const id: string = useId();
  const dispatch = useAppDispatch();

  type FormValues = {
    email: string;
    password: string;
  };

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    dispatch(logInUser(values));
    actions.resetForm();
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form className={css.form}>
        <div className={css.wrpap}>
          <ErrorMessage className={css.error} name="email" component="span" />
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder=""
            id={`email${id}`}
          />
          <label className={css.label} htmlFor={`email${id}`}>
            Email
          </label>
        </div>
        <div className={css.wrpap}>
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder=""
            id={`password${id}`}
          />
          <label className={css.label} htmlFor={`password${id}`}>
            Password
          </label>
        </div>
        <button className={css.button} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
