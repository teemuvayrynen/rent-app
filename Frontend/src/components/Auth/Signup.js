import { Formik, Form, ErrorMessage, Field } from "formik"
import * as Yup from "yup"
import "./auth.css"

const Signup = ({ setVisible }) => {

  return (
    <>
      <div className="form-container">
        <Formik
          initialValues={{email: "", password: ""}}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Name is required"),
            email: Yup.string()
              .required("Email is required")
              .email("Invalid email address"),
            password: Yup.string()
              .required("Password is required")
              .min(8, "Password must be at least 8 characters"),
            passwordConfirmation: Yup.string()
            .required("Password confirmation is required")
            .oneOf([Yup.ref("password"), null], "Passwords must match")
          })}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({
            isSubmitting
          }) => (
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
                <ErrorMessage name="email" component="div" className="form-error" />
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
                }}>Login</span>
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
export default Signup