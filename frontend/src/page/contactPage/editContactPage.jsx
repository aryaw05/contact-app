import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { EditContact, GetContactsById } from "../../data/contactData";
import { useState } from "react";

const EditContactPage = () => {
  // STATE GETCONTACT BY ID
  const [contactData, setContactData] = useState({});
  const { id } = useParams();
  //GET CONTACT
  useEffect(() => {
    const getContactById = async () => {
      try {
        const getDataContact = await GetContactsById(id);
        setContactData(getDataContact);
      } catch (error) {
        console.error(error);
      }
    };
    getContactById();
  }, [id]);
  //EDIT CONTACT
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputData = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    try {
      await EditContact(id, inputData);
      console.log(inputData);
    } catch (error) {
      console.error(error);
    }
    window.location.href = "/";
  };
  return contactData && contactData.data ? (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add New Contact
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              defaultValue={contactData.data.first_name}
              type="text"
              ref={firstNameRef}
              placeholder="John"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              defaultValue={contactData.data.last_name}
              type="text"
              ref={lastNameRef}
              placeholder="Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              defaultValue={contactData.data.email}
              type="email"
              ref={emailRef}
              placeholder="johndoe@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
              defaultValue={contactData.data.phone}
              type="tel"
              ref={phoneRef}
              placeholder="+1234567890"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default EditContactPage;
