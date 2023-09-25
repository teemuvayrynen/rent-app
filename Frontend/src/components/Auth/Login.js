import { Formik, Form, ErrorMessage, Field } from "formik"
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"
import UserPool from "./UserPool"
import * as Yup from "yup"
import "./auth.css"

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
          onSubmit={(values, { setSubmitting, setErrors }) => {
            const user = new CognitoUser({
              Username: values.email,
              Pool: UserPool
            })

            const authDetails = new AuthenticationDetails({
              Username: values.email,
              Password: values.password
            })

            user.authenticateUser(authDetails, {
              onSuccess: (data) => {
                console.log(data)
              },
              onFailure: (err) => {
                console.log(err)
                switch (err.code) {
                  case "NotAuthorizedException":
                    setErrors({password: "Incorrect email or password"})
                    break
                  case "UserNotConfirmedException":
                    setErrors({password: "User is not confirmed"})
                    break
                  default:
                    break
                }
              }
            })
            setSubmitting(false)
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