import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setErrors({...errors, [e.target.name]: ''}); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // Form is valid — submit or integrate email service here
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact">
      <h1 className="title">Contact Me</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name:</label><br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}<br />

        <label htmlFor="email">Email:</label><br />
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}<br />

        <label htmlFor="message">Message:</label><br />
        <textarea
          id="message"
          name="message"
          rows="5"
          cols="40"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}<br />

        <button type="submit">Submit</button>

        {submitted && <p className="success">Thanks! Your message was sent.</p>}
      </form>
    </div>
  );
}

export default Contact;
