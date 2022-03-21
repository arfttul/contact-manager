import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="px-4 py-2 lg:w-1/2 lg:border-2 lg:mx-auto">
        <div className="py-1">Add Contact</div>
        <div className="field py-1  flex flex-col">
          <label>Name</label>
          <input
            className="  px-2 py-1 border-black border-2 outline-none rounded-md "
            type="text"
            name="Name"
            placeholder="Name"
          />
        </div>
        <div className="field py-1 flex flex-col">
          <label>Email</label>
          <input
            className=" px-2 py-1 border-black border-2 outline-none rounded-md "
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-300 px-4 py-2 rounded-sm my-1 "
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddContact;
