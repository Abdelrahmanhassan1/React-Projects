import React from "react";

function UsersList(props) {
  return (
    <div>
      {props.users.map((user, index) => {
        return (
          <li key={index}>
            {user.username} ({user.age} years old)
          </li>
        );
      })}
    </div>
  );
}

export default UsersList;
