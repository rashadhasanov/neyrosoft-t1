import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullname.trim() ||
      !formData.username.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      setMessage("Bütün xanaları doldurun...");
    } else {
      setMessage("Qeydiyyat uğurludur.");
    }

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Fullname:
          <input type="text" name="fullname" onChange={handleChange} />
        </label>
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Form;
