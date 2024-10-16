import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DeleteContact, GetContactsById } from "../../data/contactData";
import { DeleteAddress, GetAddress } from "../../data/addressData";
import Loading from "../../assets/loading";
import Layout from "../../fragments/layoutFrag";
import NavDetail from "../../fragments/headerDetailFrag";

const DetailContactPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [addressData, setAddressData] = useState(null);
  // DELETE CONTACT DATA
  const deleteButton = async (id) => {
    try {
      // Delete all addresses associated with the contact
      const deleteAddressPromises = addressData.data.map((address) =>
        DeleteAddress(address.id, id)
      );

      // Wait for all address deletions to complete
      await Promise.all(deleteAddressPromises);
      // After all addresses are deleted, delete the contact
      await DeleteContact(id);
    } catch (error) {
      console.error(error);
    }
    window.location.href = "/";
  };
  // GET CONTACT
  useEffect(() => {
    const getContactDetail = async () => {
      try {
        const getData = await GetContactsById(id);
        setData(getData);
        console.log(getData);
      } catch (error) {
        console.error(error);
      }
    };

    getContactDetail();
  }, [id]);

  // GET ADDRESS
  useEffect(() => {
    const getAddressDetail = async () => {
      try {
        const getData = await GetAddress(id);
        setAddressData(getData);
        console.log(getData);
      } catch (error) {
        console.error(error);
      }
    };

    getAddressDetail();
  }, [id]);

  return (
    <div>
      {data && addressData ? (
        <Layout>
          <NavDetail
            to={`/editContacts/${data.data.id}`}
            onClick={() => deleteButton(data.data.id)}
            addAddress={`/addAddress/${data.data.id}`}
          />
          <div className="py-12">
            <h1 className="text-3xl w-1/2 font-Header">
              <div
                className="w-fit px-12 py-9 bg-primary rounded-full text-center mb-4 outline
            outline-2"
              >
                {data.data.first_name.charAt(0)}
              </div>
              {data.data.first_name}
            </h1>
          </div>
          {/* phone detail */}
          <div className="phone_detail flex justify-between py-8 bg-accent px-3 rounded-lg outline outline-2 ">
            <h2 className="text-xl font-Body font-semibold">
              {data.data.phone}
            </h2>
            <div className="flex gap-6">
              <span className="material-symbols-outlined">call</span>
              <span className="material-symbols-outlined">chat</span>
            </div>
          </div>

          {/* more info */}
          <div className="mt-8">
            <h1 className="text-sm font-Header mb-4">
              Detail Informasi Kontak
            </h1>
            <table className="font-Body text-md table-auto w-full">
              <tbody>
                <tr>
                  <td className="py-2 font-semibold text-sm text-gray-700">
                    Email:
                  </td>
                  <td className="py-2">
                    <h2 className="text-sm text-gray-900">{data.data.email}</h2>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-sm text-gray-700">
                    First Name:
                  </td>
                  <td className="py-2">
                    <h2 className="text-sm text-gray-900">
                      {data.data.first_name}
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-sm text-gray-700">
                    Last Name:
                  </td>
                  <td className="py-2">
                    <h2 className="text-sm text-gray-900">
                      {data.data.last_name}
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-sm text-gray-700">
                    Phone:
                  </td>
                  <td className="py-2">
                    <h2 className="text-sm text-gray-900">{data.data.phone}</h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Alamat */}
          <div className=" mt-8">
            <h1 className="text-sm font-Header mb-4">Daftar Alamat</h1>
            <div className="grid grid-cols-1">
              {addressData.data.map((address, index) => (
                <div
                  key={address.id}
                  className="p-4 outline rounded-md mb-4 bg-primary  "
                >
                  <table className="font-Body text-md table-auto w-full ">
                    <tbody>
                      <tr>
                        <td className="py-2 font-semibold text-sm text-gray-700 ">
                          <div className="flex items-center">
                            <span className="font-semibold">
                              Alamat {index + 1}
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold text-sm text-gray-700">
                          <div className="flex items-center">
                            <span className="w-24">Kota</span>
                            <span className="mx-1">:</span>
                            <span className="text-sm text-gray-900">
                              {address.city}
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold text-sm text-gray-700">
                          <div className="flex items-center">
                            <span className="w-24">Provinsi</span>
                            <span className="mx-1">:</span>
                            <span className="text-sm text-gray-900">
                              {address.province}
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold text-sm text-gray-700">
                          <div className="flex items-center">
                            <span className="w-24">Negara</span>
                            <span className="mx-1">:</span>
                            <span className="text-sm text-gray-900">
                              {address.country}
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold text-sm text-gray-700">
                          <div className="flex items-center">
                            <span className="w-24">Kode Pos</span>
                            <span className="mx-1">:</span>
                            <span className="text-sm text-gray-900">
                              {address.postal_code}
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </Layout>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailContactPage;
