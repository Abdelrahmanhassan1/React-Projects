import React from "react";
import "./UsersList.module.css";

function UsersList(props) {
  return (
    <div>
      {props.users.map((user, index) => {
        return (
          <li key={index}>
            {user.username.charAt(0).toUpperCase() + user.username.slice(1)} (
            {user.age} years old)
          </li>
        );
      })}
    </div>
  );
}

export default UsersList;
