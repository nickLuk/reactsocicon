import React, { Fragment } from "react";
import "./contactlist.css";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ ContactList, onDelete }) => {
  const listItem = ContactList.map(item => {
    return (
      <ContactItem
        key={item.id}
        avatar={item.avatar}
        name={item.name}
        description={item.description}
        gender={item.gender}
        iconfacebook={item.iconfacebook}
        icontwitter={item.icontwitter}
        iconlinkedin={item.iconlinkedin}
        iconskype={item.iconskype}
        iconemail={item.iconemail}
        favorite={item.favorite}
        onDelete={() => onDelete(item.id)}
      ></ContactItem>
    );
  });
  return (
    <Fragment>
      <h2 className="col-7 d-flex justify-content-center">ContactList</h2>
      {listItem}
    </Fragment>
  );
};

export default ContactList;
