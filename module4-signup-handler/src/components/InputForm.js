import React, { useState } from "react";

function InputForm(props) {
  //   const [username, setUsername] = useState("");
  //   const [age, setAge] = useState(0);

  const [userData, setUserData] = useState({
    username: "",
    age: 0,
  });

  const inputChangeHandler = (event) => {
    setUserData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    if (userData.username === "") {
      //   let ErrorMSG = "Invalid Username";
      return;
    } else if (userData.age <= 0) {
      //   let ErrorMSG = "Invalid Age";
      return;
    }
    props.onFormSubmission(userData);
    setUserData({ username: "", age: 0 });
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={inputChangeHandler}
          value={userData.username}
        />
        <label>Age</label>
        <input
          type="number"
          name="age"
          onChange={inputChangeHandler}
          value={userData.age}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default InputForm;
