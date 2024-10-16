import { useEffect } from "react";
import { GetUser, Logout } from "../../data/data";
import { useState } from "react";
import { GetContacts } from "../../data/contactData";
import LoginPage from "../userPage/loginPage";
import { Link } from "react-router-dom";
import Loading from "../../assets/loading";
import Layout from "../../fragments/layoutFrag";

const ProfilePage = () => {
  const [data, setData] = useState();
  const [contactData, setContactData] = useState([]);
  const [errorPage, setError] = useState(null);
  // SEARCH DAN DEBOUNCING
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState(search);
  // const [page, setPage] = useState(1);
  // GET USER
  useEffect(() => {
    const inputData = async () => {
      try {
        const getUserData = await GetUser();
        setData(getUserData);
      } catch (error) {
        setError(error.message || "Terjadi kesalahan yang tidak terduga");
      }
    };

    inputData();
  }, []);

  const logout = () => {
    const logoutData = async () => {
      try {
        await Logout();
        window.location.href = "/";
      } catch (error) {
        console.error(error);
      }
    };

    logoutData();
  };

  //SEARCH CONTACT
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(search);
    }, 1500);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    const contactData = async () => {
      if (!debounce) {
        try {
          const getData = await GetContacts();
          setContactData(getData.data);
        } catch (error) {
          setError(error.message || "Terjadi kesalahan yang tidak terduga");
        }
      } else {
        try {
          const getData = await GetContacts(debounce);
          setContactData(getData.data);
          console.log(getData.data);
        } catch (error) {
          setError(error.message || "Terjadi kesalahan yang tidak terduga");
        }
      }
    };

    contactData();
  }, [debounce]);

  return (
    <div>
      {/* kenapa diberi && ? , karena jika tidak diberi maka data yang dirender pertama adalah data kosong , sedangkan data yang terdapat isi nya ada di data setelah proses await */}
      <div>
        {errorPage ? (
          <LoginPage />
        ) : data && contactData ? (
          <Layout>
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-3xl font-Header">
                <span className="text-xl">Welcome</span>
                <br />
                {data.data.name}
              </h1>
              <button onClick={logout} className="btn btn-accent">
                Logout
              </button>
            </div>
            <label className="input input-bordered flex items-center gap-2 mb-7">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <div className="flex flex-col justify-center mx-3 h-fit">
              {contactData.map((contact) => (
                <div
                  key={contact.id}
                  className="p-5  w-full  cursor-pointer rounded-lg flex justify-between items-center mb-3 font-Body bg-secondary text-white outline outline-2 outline-black "
                  onClick={() =>
                    (window.location.href = `/detailContact/${contact.id}`)
                  }
                >
                  <h1 className="w-1/2">{contact.first_name}</h1>
                  <h1>{contact.phone}</h1>
                </div>
              ))}
            </div>
            <div>
              <Link
                to="/addContacts"
                className="p-4  text-white bg-blue-500 fixed bottom-52 right-6 rounded-full"
              >
                +
              </Link>
            </div>
          </Layout>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
