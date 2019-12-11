import React, { Fragment } from "react";
import "./contactlist.css";
import ContactItem from "./ContactItem/ContactItem";
import Search from "../SearchComponent/search";

const ContactList = ({ ContactList, onDelete, addFavorite }) => {
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
        addFavorite={() => addFavorite(item.id)}
      ></ContactItem>
    );
  });
  return (
    <Fragment>
      <Search></Search>
      <h2 className="col-7 d-flex justify-content-center">ContactList</h2>
      {listItem}
    </Fragment>
  );
};

export default ContactList;