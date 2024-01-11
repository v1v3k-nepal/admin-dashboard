import React from "react";
import "./_confirmDeleteModal.scss";
import { SlClose } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import { deleteProduct, deleteUser } from "@/app/lib/actions";
import { toast } from "react-toastify";

export const ConfirmDeleteModal = ({
  setDeleteModalVisibility,
  id,
  deleteWhat,
  email,
}: Com.DeleteModalProps) => {
  const handleNotify = (status: Boolean) => {
    console.log(status, "i am delete status");
    status
      ? toast.success(`Deleted ${deleteWhat} Successfully`)
      : toast.error(`Could not Delete ${deleteWhat}`);
  };

  const handleDelete = async () => {
    if (email !== "testuser@gmail.com") {
      if (deleteWhat == "user") {
        const status = await deleteUser(id);
        handleNotify(status);
      } else if (deleteWhat == "product") {
        const status = await deleteProduct(id);
        handleNotify(status);
      }
    } else {
      toast.error("Deleting this particular user is restricted by developer");
    }
    setDeleteModalVisibility("none");
  };
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
          Do you really want to delete this {deleteWhat}? This process cannot be
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
          <button className="delete-btn-modal" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
