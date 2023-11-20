import React from "react";
import "./_addUser.scss";

const AddUser = () => {
  return (
    <div className="add-user-container">
      <div className="cols">
        <div className="col-left">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <select name="isAdmin" id="isAdmin">
            <option value="false">isAdmin ?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="col-right">
          <input type="email" placeholder="email" />
          <input type="phone" name="phone" id="phone" placeholder="phone" />
          <select name="isActive" id="isActive">
            <option value="false">isActive ?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
      <textarea name="textarea" id="textarea" cols={30} rows={10}></textarea>
      <button>Submit</button>
    </div>
  );
};

export default AddUser;
