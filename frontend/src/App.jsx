import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import RegisterPage from "./page/userPage/registerPage";
import ProfilePage from "./page/userPage/profilePage";
import AddContactPage from "./page/contactPage/addContact";
import EditContactPage from "./page/contactPage/editContactPage";
import AddAddressPage from "./page/addressPage/addAddressPage";
import DetailContactPage from "./page/contactPage/detailContactPage";

function App() {
  return (
    <Routes>
      {/* user route */}
      <Route path="/" element={<ProfilePage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* contact route */}
      <Route path="/addContacts" element={<AddContactPage />} />
      <Route path="/editContacts/:id" element={<EditContactPage />} />
      <Route path="/detailContact/:id" element={<DetailContactPage />} />

      {/* address routes */}
      <Route path="/addAddress/:id" element={<AddAddressPage />} />
      <Route path="*" element="404" />
    </Routes>
  );
}

export default App;
