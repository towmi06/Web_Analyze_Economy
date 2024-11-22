import { changePass } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'  
import "./changepass.scss";

function ChangePass() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const newPass = e.target[2].value;
    const reNewPass = e.target[3].value;

    if (newPass !== reNewPass) {
      Swal.fire({
        icon: "error",
        title: "Incorrect re-entered password!",
        showConfirmButton: false,
        timer: 1500
      });
    } 
    else {
      const options = {
        email: email,
        password: password,
        newPass: newPass,
      }
      const response = await changePass(options);

      console.log(response);
      if (response.length > 0) {
        Swal.fire({
          icon: "success",
          title: "Password change successfull!",
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
          title: "Incorrect email or password!",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  }
  return (
    <>
      <div className="container-change">
        <div className="login-form-change">
          <form className="form-change" onSubmit={handleSubmit}>
            <div className="title-change">Change Password</div>
            <div className="label-change">Email</div>
            <input className="input-change" type="email" placeholder="Nhập email" />
            <div className="label-change">Password</div>
            <input className="input-change" type="password" placeholder="Nhập mật khẩu cũ" />
            <div className="label-change">New password</div>
            <input className="input-change" type="password" placeholder="Nhập mật khẩu mới" />
            <div className="label-change">Re-enter new password</div>
            <input className="input-change" type="password" placeholder="Nhập lại mật khẩu mới" />
            <button className="btn-change" type="submit">
              Change Pass
            </button>
          </form>
          <div className="content-right-change">
            <div className="title-content-change">Welcome to change password</div>
            <div className="question-change">Do you want to sign in?</div>
            <button className="navigate-change"><a href="/login">Sign In</a></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default ChangePass;