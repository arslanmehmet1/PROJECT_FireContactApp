import { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { AddUser, UpdateUser } from "./utils/functions";

const initialValue = {
  username: "",
  phoneNumber: "",
  gender: "",
};
function App() {
  const [info, setInfo] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      UpdateUser(info);
    } else AddUser(info);
  };

  const editUser = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
      />
      <Contacts editUser={editUser} />
    </div>
  );
}

export default App;
