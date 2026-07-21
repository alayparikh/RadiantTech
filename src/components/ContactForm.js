import React, { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to backend / email service
    alert('Message submitted (demo only).');
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Name*" required value={form.name} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Contact Number*" required value={form.phone} onChange={handleChange} />
          </div>
          <div className="form-row">
            <input type="email" name="email" placeholder="Email*" required value={form.email} onChange={handleChange} />
            <select name="service" value={form.service} onChange={handleChange}>
              <option value="">Select your Service</option>
              <option value="Control Panels">Control Panels</option>
              <option value="PLC System Integration">PLC System Integration</option>
              <option value="HMI/Scada Integration">HMI/Scada Integration</option>
              <option value="Field Service">Field Service</option>
            </select>
          </div>
          <textarea name="message" placeholder="Enter your Message" value={form.message} onChange={handleChange} />
          <button type="submit" className="btn-primary">Send a Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;