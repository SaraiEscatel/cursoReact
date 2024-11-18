import React from "react";
import PropType from "prop-types";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        // ***Initial values that the form will take
        initialValues={initialCredentials}
        //**Yup Validation Schema */
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));

          localStorage.setItem("credentials", values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          andleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="angeles@gmail.com"
            />

            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />

            {/**Emails Password */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}

            <button type="submit">Login Formik</button>
            {isSubmitting ? <p>Login your credencials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
