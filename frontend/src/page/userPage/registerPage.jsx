import { UserRegister } from "../../data/data";
import FormLayout from "../../fragments/formLayout";
import {
  ButtonSubmit,
  PasswordAuthInput,
  UserAuthInput,
} from "../../fragments/input";

const RegisterPage = () => {
  const handleRegister = async (event) => {
    event.preventDefault();
    const dataInput = {
      username: event.target.username.value,
      name: event.target.name.value,
      password: event.target.password.value,
    };


    try {
      await UserRegister(dataInput);
      console.log(dataInput);
    } catch (e) {
      console.log(e);
    }
    window.location.href = "/profile";
  };
  return (
    <FormLayout formName="Register">
      <form onSubmit={handleRegister}>
        <UserAuthInput placeholder="Username" />
        <UserAuthInput placeholder="Name" />
        <PasswordAuthInput />
        <ButtonSubmit>Register</ButtonSubmit>
      </form>
    </FormLayout>
  );
};

export default RegisterPage;
