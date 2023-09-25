import "./login.css"

const Login = ({ setVisible }) => {

  return (
    <>
      <div className="loginform-container">
      
      </div>
      <div onClick={() => { setVisible(false) }} className="background-for-form" />
    </>
  )
}

export default Login