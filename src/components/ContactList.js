import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ContactList = (props) => {
  const renderContacts = props.contacts.map((contact) => (
    <div className="item my-1 p-4 flex justify-between border-b-2">
      <div className="container-sm ">
        <div className="text-3xl">{contact.name}</div>
        <div className="small">{contact.email}</div>
      </div>
      <FontAwesomeIcon
        style={{ cursor: "pointer", fontSize: "26px" }}
        icon={faTrash}
      />
    </div>
  ));
  return <div className="lg:w-1/2 lg:mx-auto ">{renderContacts}</div>;
};

export default ContactList;
