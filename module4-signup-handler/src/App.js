import React, { useState } from "react";
import InputForm from "./components/InputForm";
import UsersList from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
    { username: "Ali", age: 10, id: 19 },
  ]);

  const catchFormData = (userData) => {
    setUsersList((prevData) => {
      return [...prevData, userData];
    });
  };
  return (
    <div>
      <InputForm onFormSubmission={catchFormData} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
