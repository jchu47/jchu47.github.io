import { useState } from 'react';
import '../App.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const action = form.action;

    fetch(action, {
      method: 'POST',
      body: data,
    })
      .then(() => {
        // Reset form data state
        setFormData({
          name: '',
          email: '',
          message: '',
        });

        // Display a pop-up message
        alert('Form submitted successfully!');
      })
      .catch(error => {
        console.error('Error submitting form:', error.message);
      });
  };

  return (
    <form
      className='contact-form'
      method='POST'
      action='https://script.google.com/macros/s/AKfycby5o4JHp3BOF79sX9Lk5o8Rewv3AO8U9zvaOGOgO9oBRzTYFakSlz8VN-puWbU5jT1G/exec'
      onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor='message'>Message:</label>
      <textarea
        id='message'
        name='message'
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type='submit'>Submit</button>
    </form>
  );
}

export default ContactForm;
