import { Link } from "react-router-dom";

const NavDetail = (props) => {
  const { to, onClick, addAddress } = props;
  return (
    <div className="font-Body">
      <div className="flex justify-between items-center py-4 ">
        <Link to="/">
          <span className="material-symbols-outlined text-3xl">
            keyboard_backspace
          </span>
        </Link>
        <div className="flex gap-3">
          <span className="material-symbols-outlined text-3xl">favorite</span>
          <Link to={to}>
            <span className="material-symbols-outlined text-3xl">edit</span>
          </Link>
          <div className="dropdown dropdown-end">
            <button>
              <span
                className="material-symbols-outlined text-3xl "
                role="button"
              >
                more_vert
              </span>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Hapus
                </button>
              </li>
              <li>
                <Link to={addAddress}>Tambah Alamat</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal  */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Apakah anda yakin menghapus kontak ini
          </p>
          <div className="modal-action">
            <form method="dialog">
              <div className="flex gap-3">
                <button onClick={onClick} className="text-error text-sm font-semibold">Hapus</button>
                <button className="btn">Batal</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NavDetail;
