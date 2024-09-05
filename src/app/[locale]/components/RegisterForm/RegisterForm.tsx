'use client';

import React, { useId } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';
import { registerUser } from '@/redux/auth/operations';
import { useAppDispatch } from '@/redux/hooks';
import { useTranslations } from 'next-intl';

export default function RegisterForm() {
  const id: string = useId();
  const dispatch = useAppDispatch();
  const t = useTranslations('RegisterPage');

  type FormValues = {
    name: string;
    email: string;
    password: string;
  };

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    dispatch(registerUser(values));
    actions.resetForm();
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, t('registerForm.tooShort'))
      .max(50, t('registerForm.tooLong'))
      .required(t('registerForm.required')),
    email: Yup.string()
      .min(5, t('registerForm.tooShort'))
      .max(50, t('registerForm.tooLong'))
      .required(t('registerForm.required')),
    password: Yup.string()
      .min(8, t('registerForm.tooShort'))
      .max(50, t('registerForm.tooLong'))
      .required(t('registerForm.required')),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      <Form className={css.form}>
        <div className={css.wrpap}>
          <ErrorMessage className={css.error} name="name" component="span" />
          <Field
            className={css.input}
            type="text"
            name="name"
            id={`name${id}`}
            placeholder=""
          />
          <label className={css.label} htmlFor={`name${id}`}>
            {t('registerForm.name')}
          </label>
        </div>
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
            {t('registerForm.email')}
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
            {t('registerForm.password')}
          </label>
        </div>
        <button className={css.button} type="submit">
          {t('registerForm.register')}
        </button>
      </Form>
    </Formik>
  );
}
