import { Link } from "react-router-dom";
import { UserLogin } from "../../data/data";
import {
  ButtonSubmit,
  PasswordAuthInput,
  UserAuthInput,
} from "../../fragments/input";
import FormLayout from "../../fragments/formLayout";

const LoginPage = () => {
  const HandleLogin = async (event) => {
    event.preventDefault();

    const formData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    try {
      await UserLogin(formData);
      console.log(formData);
    } catch (error) {
      console.log(error);
    }

    window.location.href = "/";
  };
  return (
    <FormLayout formName="Login">
      <form onSubmit={HandleLogin}>
        <UserAuthInput placeholder="Username" />
        <PasswordAuthInput />
        <ButtonSubmit>Login</ButtonSubmit>
        <p className="text-sm mt-3 text-white font-Body">
          Belum Punya Akun?{" "}
          <Link to="/register" className="font-semibold">
            Daftar!
          </Link>
        </p>
      </form>
    </FormLayout>
  );
};

export default LoginPage;
