import React from "react";
import "./_confirmDeleteModal.scss";
import { SlClose } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import { deleteUser } from "@/app/lib/actions";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type DeleteModalProps = {
  setDeleteModalVisibility: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  setDeleteStatus: React.Dispatch<React.SetStateAction<Boolean>>;
};
const ConfirmDeleteModal = ({
  setDeleteModalVisibility,
  id,
  setDeleteStatus,
}: DeleteModalProps) => {
  return (
    <div className="confirm-delete-modal">
      <div
        className="close-icon"
        onClick={() => setDeleteModalVisibility("none")}
      >
        <IoCloseSharp />
      </div>
      <div className="content">
        <div className="icon">
          <SlClose />
        </div>
        <h2 className="title">Are You Sure ?</h2>
        <p className="desc">
          Do you really want to delete this record? This process cannot be
          undone later.
        </p>
        <div className="btn-container">
          <button
            className="cancel-btn-modal"
            onClick={() => {
              setDeleteModalVisibility("none");
            }}
          >
            Cancel
          </button>
          <button
            className="delete-btn-modal"
            onClick={async () => {
              const status = await deleteUser(id);
              status ? setDeleteStatus(true) : setDeleteStatus(false);
              setDeleteModalVisibility("none");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
