import React from "react";
import "./_addUser.scss";

const AddUser = () => {
  return (
    <form action="">
      <div className="add-user-container">
        <div className="cols">
          <div className="col-left">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <select name="isAdmin" id="isAdmin">
              <option value="false">Is Admin ?</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="col-right">
            <input type="email" placeholder="Email" />
            <input type="phone" name="phone" id="phone" placeholder="Phone" />
            <select name="isActive" id="isActive">
              <option value="false">Is Active ?</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <textarea name="textarea" id="textarea" cols={30} rows={10}></textarea>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default AddUser;
