import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import { useEffect } from "react";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  deleteAllCookies();

  useEffect(() => {
    dispatch(checkLogin(false));
    navigate("/");
  }, [dispatch,navigate])

  return (
    <>
    </>
  )
}
export default Logout;