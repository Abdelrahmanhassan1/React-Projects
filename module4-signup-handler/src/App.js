import React, { useState } from "react";
import InputForm from "./components/InputForm";
import UsersList from "./components/UsersList";
import "./App.module.css";
function App() {
  const [usersList, setUsersList] = useState([{ username: "ali", age: 10 }]);

  const catchFormData = (userData) => {
    setUsersList((prevData) => {
      return [...prevData, userData];
    });
  };
  return (
    <div>
      <h2>SignUp Handler</h2>
      <InputForm onFormSubmission={catchFormData} />
      <h2>Users</h2>
      {usersList.length > 0 ? (
        <UsersList users={usersList} />
      ) : (
        <h3>There are no users yet!!</h3>
      )}
    </div>
  );
}

export default App;
