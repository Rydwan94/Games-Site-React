import { useContext } from "react";

import { themeContext } from "../context/AppProvider";

import { FaContao } from "react-icons/fa";

import "../css/GameForm.css";

const GameForm = () => {
  const { handleSubmit, handleFormOnChange, formData } =
    useContext(themeContext);

  console.log(formData.firstName);
  return (
    <div className="mainFormContainer">
      <form className="formContainer" onSubmit={handleSubmit}>
        <h3>
          <FaContao />
          ontact
        </h3>
        <input
          type="text"
          name="firstName"
          placeholder="Firs tName"
          value={formData.firstName}
          onChange={handleFormOnChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleFormOnChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleFormOnChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleFormOnChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GameForm;
