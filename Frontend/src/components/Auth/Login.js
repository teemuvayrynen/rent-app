import React from "react"
import { Formik, Form, ErrorMessage, Field } from "formik"
import * as Yup from "yup"
import "./auth.css"
import { signIn } from "aws-amplify/auth"


const Login = ({ setVisible }) => {

  return (
    <>
      <div className="form-container">
        <Formik
          initialValues={{email: "", password: ""}}
          validationSchema={Yup.object({
            email: Yup.string()
              .required("Email is required")
              .email("Invalid email address"),
            password: Yup.string()
              .required("Password is required")
          })}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            signIn({ username: values.email, password: values.password })
              .then(() => {
                window.location.reload()
              })
              .catch(err => {
                switch (err.name) {
                  case "NotAuthorizedException":
                    setErrors({password: "Incorrect email or password"})
                    break
                  case "UserNotConfirmedException":
                    setErrors({password: "User is not confirmed"})
                    break
                  default:
                    setErrors({password: "Error. Try again later"})
                    break
                }
              })
              .finally(() => {
                setSubmitting(false)
              })
          }}
        >
          {({
            isSubmitting
          }) => (
            <Form className="formik-form">
              <span>Login</span>
              <div className="form-input-container">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="form-input"
                />
                <ErrorMessage name="email" component="div" className="form-error" />
              </div>
              <div className="form-input-container">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className="form-input"
                />
                <ErrorMessage name="password" component="div" className="form-error" />
              </div>
              <button disabled={isSubmitting} className="basic-button fullWidth" type="submit">Login</button>
              <p>
                Don't have an account? <span onClick={() => {
                  setVisible({
                    signup: true,
                    login: false
                  })
                }}>Sign up</span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
      <div className="form-background" onClick={() => { setVisible({
        signup: false,
        login: false
      }) }} />
    </>
  )
}




export default Login