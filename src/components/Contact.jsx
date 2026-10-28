import { useState } from 'react';
import { profile } from '../data/profile';

const emptyForm = { name: '', email: '', message: '' };

function validate(form) {
  const errors = {};
  if (form.name.trim() === '') errors.name = 'Please enter your name.';
  if (form.email.trim() === '') {
    errors.email = 'Please enter your email.';
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'That email doesn’t look right.';
  }
  if (form.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // no backend, so open the visitor's email app with the message filled in
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-sent">
        <p>Thanks, {form.name}! Your email app should have opened with the message ready to send.</p>
        <button
          type="button"
          onClick={() => {
            setForm(emptyForm);
            setSent(false);
          }}
        >
          Write another
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" value={form.name} onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="6" value={form.message} onChange={handleChange} />
      {errors.message && <p className="error">{errors.message}</p>}

      <button type="submit">Send</button>
    </form>
  );
}
