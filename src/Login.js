import { Button } from "antd";
import { useNavigate } from "react-router-dom";
// 跳转到关于页面
function Login() {
  const navigate = useNavigate();
  function gotoAbout() {
    navigate("/about", { replace: true });
  }
  return (
    <div>
      login
      <Button onClick={gotoAbout}>gotoAbout</Button>
    </div>
  );
}

export default Login;
