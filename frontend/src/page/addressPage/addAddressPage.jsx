import { useRef } from "react";
import { CreateAddress } from "../../data/addressData";
import { useParams } from "react-router-dom";

const AddAddressPage = () => {
  //ID CONTACT
  const { id } = useParams();

  //ADD ADDRESS
  const streetRef = useRef();
  const cityRef = useRef();
  const provinceRef = useRef();
  const countryRef = useRef();
  const postalCodeRef = useRef();

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const inputData = {
      street: streetRef.current.value,
      city: cityRef.current.value,
      province: provinceRef.current.value,
      country: countryRef.current.value,
      postal_code: postalCodeRef.current.value,
    };

    try {
      await CreateAddress(inputData, id);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Tambah Alamat Baru
        </h2>
        <form onSubmit={handlerSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Jalan
            </label>
            <input
              type="text"
              ref={streetRef}
              placeholder="Masukkan nama jalan"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Kota
            </label>
            <input
              type="text"
              ref={cityRef}
              placeholder="Masukkan nama kota"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Provinsi
            </label>
            <input
              type="text"
              ref={provinceRef}
              placeholder="Masukkan nama provinsi"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Negara
            </label>
            <input
              type="text"
              ref={countryRef}
              placeholder="Masukkan nama negara"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Kode Pos
            </label>
            <input
              type="text"
              ref={postalCodeRef}
              placeholder="Masukkan kode pos"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Simpan Alamat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddressPage;
