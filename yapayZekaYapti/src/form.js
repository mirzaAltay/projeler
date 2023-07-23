import React, { useState } from "react";
import "./Form.css"; // CSS dosyasını ekliyoruz

const Form = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verilerini kullanabilir veya gönderebilirsiniz.
    console.log("İsim: ", name);
    console.log("Tarih: ", date);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="name">İsim:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Tarih:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <button type="submit">Gönder</button>
    </form>
  );
};

export default Form;
