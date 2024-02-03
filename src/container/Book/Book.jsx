import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import {images} from '../../constants'
import './Book.css';

const Book = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    partySize: "1",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, date, time, partySize } = formData;
    if (name === "" || email === "" || phone === "" || date === "" || time === "" || partySize === "") {
      alert("Please fill out all fields before submitting.");
    } else {
        navigate('/confirm')
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="booking-form p__opensans">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          min={new Date().toISOString().split("T")[0]}
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
        <label htmlFor="party-size">Party Size:</label>
        <select id="party-size" name="partySize" value={formData.partySize} onChange={handleChange} required>
          <option value="1">1 person</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5">5 people</option>
        </select>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Book;
