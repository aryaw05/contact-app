import { useRef } from "react";
import { CreateContact } from "../../data/contactData";
import { useState } from "react";
import { useEffect } from "react";
import { GetUser } from "../../data/data";
import FormLayout from "../../fragments/formLayout";
import {
  ButtonSubmit,
  NonIconInput,
  UserAuthInput,
} from "../../fragments/input";

const AddContactPage = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    try {
      await CreateContact(formData);
    } catch (error) {
      console.error(error);
    }
  };

  //middlewar
  useEffect(() => {
    const dataContact = async () => {
      try {
        await GetUser();
      } catch (error) {
        setError(error.message || "Terjadi kesalahan yang tidak terduga");
      }
    };

    dataContact();
  }, []);
  return error ? (
    <h1>Error: {error}</h1>
  ) : (
    <FormLayout formName="Add Contact">
      <form onSubmit={handleSubmit}>
        <UserAuthInput placeholder="First Name" ref={firstNameRef} />
        <UserAuthInput placeholder="Last Name" ref={lastNameRef} />
        <NonIconInput placeholder="Email" ref={emailRef} name="Email" />
        <NonIconInput placeholder="Phone" ref={phoneRef} name="Phone" />
        <ButtonSubmit>Submit</ButtonSubmit>
      </form>
    </FormLayout>
  );
  // render error jika tidak terdapat error maka render bagian bawah ini
};

export default AddContactPage;
