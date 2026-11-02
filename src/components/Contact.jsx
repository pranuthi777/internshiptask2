import { useState } from 'react';
import { profile } from '../data/profile';
import { ArrowIcon } from './Icons';

const emptyForm = { name: '', email: '', subject: '', message: '' };

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (form.email.trim() === '') {
    errors.email = 'Please enter your email.';
  } else if (!/^\S+@\S+\.\S{2,}$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email, like name@example.com.';
  }
  if (form.subject.trim() === '') errors.subject = 'Please add a subject.';
  if (form.message.trim().length < 10) {
    errors.message = 'Your message should be at least 10 characters.';
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    // after a field has been visited, update its error while typing
    if (touched[e.target.name]) setErrors(validate(updated));
  }

  function handleBlur(e) {
    setTouched({ ...touched, [e.target.name]: true });
    setErrors(validate(form));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(newErrors).length > 0) return;

    // the site has no backend, so this opens the visitor's email app with everything filled in
    const body = `${form.message}\n\n${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  function showError(field) {
    return touched[field] && errors[field];
  }

  if (sent) {
    return (
      <div className="form-card sent">
        <h3>Thanks, {form.name.split(' ')[0]}!</h3>
        <p>
          Your email app should have opened with your message ready to send. If it didn’t, you can
          email me at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
        <button
          type="button"
          className="button outline"
          onClick={() => {
            setForm(emptyForm);
            setTouched({});
            setErrors({});
            setSent(false);
          }}
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className={showError('name') ? 'field has-error' : 'field'}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(showError('name'))}
          />
          {showError('name') && <p className="error">{errors.name}</p>}
        </div>

        <div className={showError('email') ? 'field has-error' : 'field'}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(showError('email'))}
          />
          {showError('email') && <p className="error">{errors.email}</p>}
        </div>
      </div>

      <div className={showError('subject') ? 'field has-error' : 'field'}>
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError('subject'))}
        />
        {showError('subject') && <p className="error">{errors.subject}</p>}
      </div>

      <div className={showError('message') ? 'field has-error' : 'field'}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError('message'))}
        />
        {showError('message') && <p className="error">{errors.message}</p>}
      </div>

      <button type="submit" className="button primary">
        Send message <ArrowIcon />
      </button>
    </form>
  );
}
