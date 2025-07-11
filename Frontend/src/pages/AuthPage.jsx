import {useState} from "react";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const AuthPage = () => {
  const [login, setLogin] = useState(true)
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
      {login?<LoginForm state={setLogin}/>:<RegisterForm state={setLogin}/>}
    </div>
  );
};

export default AuthPage;
