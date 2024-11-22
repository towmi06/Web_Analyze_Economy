import { register } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'  
import "./register.scss";

function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const rePassword = e.target[3].value;

    if (password !== rePassword) {
      Swal.fire({
        icon: "error",
        title: "Incorrect re-entered password!",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      const options = {
        fullName: fullName,
        email: email,
        password: password
      }
      const response = await register(options);

      if (response.length > 0) {
        Swal.fire({
          icon: "success",
          title: "Register Successfull!",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          navigate("/login");  
        }, 1000);
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Email already exists!",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }

  }
  return (
    <>
      <div className="container-register">
        <div className="login-form-register">
          <form className="form-register" onSubmit={handleSubmit}>
            <div className="title-register">Register</div>
            <div className="label-register">Full Name</div>
            <input className="input-register" type="fullName" spellcheck="false" placeholder="Nhập họ tên" />
            <div className="label-register">Email</div>
            <input className="input-register" type="email" placeholder="Nhập email" />
            <div className="label-register">Password</div>
            <input className="input-register" type="password" placeholder="Nhập mật khẩu" />
            <div className="label-register">Re-enter Password</div>
            <input className="input-register" type="password" placeholder="Nhập lại mật khẩu" />
            <button className="btn-register" type="submit">
              Register
            </button>
          </form>
          <div className="content-right-register">
            <div className="title-content-register">Welcome to sign up</div>
            <div className="question-register">Have an account?</div>
            <button className="navigate-register"><a href="/login">Sign In</a></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Register;