import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!'); 
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required onChange={handleChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" required onChange={handleChange}></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <p>Email: mr.wrc1998@gmail.com</p>
      <p>Phone: (304) 621-2837</p>
    </section>
  );
};

export default Contact;
