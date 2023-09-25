import React, { useState } from "react"
import { Formik, Form, ErrorMessage, Field } from "formik"
import { CognitoUserAttribute } from "amazon-cognito-identity-js"
import * as Yup from "yup"
import UserPool from "./UserPool"
import "./auth.css"

const Signup = ({ setVisible }) => {
  const [success, setSuccess] = useState(false)

  return (
    <>
      <div className="form-container">
        <Formik
          initialValues={{email: "", password: "", name: "", passwordConfirmation: ""}}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Name is required"),
            email: Yup.string()
              .required("Email is required")
              .email("Invalid email address"),
            password: Yup.string()
              .required("Password is required")
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
              ),
            passwordConfirmation: Yup.string()
            .required("Password confirmation is required")
            .oneOf([Yup.ref("password"), null], "Passwords must match")
          })}
          onSubmit={(values, { setErrors, setSubmitting }) => {
            const nameAttr = new CognitoUserAttribute({ Name: "name", Value: values.name })

            UserPool.signUp(values.email, values.password, [nameAttr], null, (err, data) => {
              if (err) {
                switch (err.code) {
                  case "UsernameExistsException":
                    setErrors({email: "Account already exists"})
                    break
                  default:
                    break
                }
              } else {
                setSuccess(true)
              }
              setSubmitting(false)
            })
          }}
        >
          {success ? (
            <div className="form-success">
              <h1>Check your email</h1>
              <p>We have sent you an email with account verification link.</p>
            </div>
          ) : ({isSubmitting}) => (
            <Form className="formik-form">
              <span>Sign up</span>
              <div className="form-input-container">
                <Field
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Enter name"
                  className="form-input"
                />
                <ErrorMessage name="name" component="div" className="form-error" />
              </div>
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
              <div className="form-input-container">
                <Field
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Enter password again"
                  className="form-input"
                />
                <ErrorMessage name="passwordConfirmation" component="div" className="form-error" />
              </div>
              <button disabled={isSubmitting} className="basic-button fullWidth" type="submit">Login</button>
              <p>
                Already have an account? <span onClick={() => {
                  setVisible({
                    signup: false,
                    login: true
                  })
                }}>Sign up</span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
      <div className="form-background" onClick={() => { 
        setVisible({
          signup: false,
          login: false
        })
        setSuccess(false) 
      }} />
    </>
  )
}
export default Signup