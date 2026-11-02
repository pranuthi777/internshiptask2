import { useState } from 'react';
import { profile } from '../data/profile';

const emptyForm = { name: '', email: '', subject: '', message: '' };

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (form.email.trim() === '') {
    errors.email = 'Please enter your email.';
  } else if (!/^\S+@\S+\.\S{2,}$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (form.subject.trim() === '') errors.subject = 'Please enter a subject.';
  if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
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

    // no backend, so this opens the visitor's email app with everything filled in
    const body = `${form.message}\n\n${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  // Bootstrap shows the red border + message when the input has "is-invalid"
  function inputClass(field) {
    return touched[field] && errors[field] ? 'form-control is-invalid' : 'form-control';
  }

  if (sent) {
    return (
      <div className="alert alert-success" role="status">
        <h5 className="alert-heading">Thanks, {form.name.split(' ')[0]}!</h5>
        <p>
          Your email app should have opened with your message. If it didn’t, email me at{' '}
          <a href={`mailto:${profile.email}`} className="alert-link">
            {profile.email}
          </a>
          .
        </p>
        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={() => {
            setForm(emptyForm);
            setTouched({});
            setErrors({});
            setSent(false);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="card card-body shadow-sm p-4" onSubmit={handleSubmit} noValidate>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            className={inputClass('name')}
            placeholder="Your name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="invalid-feedback">{errors.name}</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={inputClass('email')}
            placeholder="name@example.com"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        <div className="col-12">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            className={inputClass('subject')}
            placeholder="What is this about?"
            value={form.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="invalid-feedback">{errors.subject}</div>
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className={inputClass('message')}
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          <div className="invalid-feedback">{errors.message}</div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary px-4">
            <i className="bi bi-send me-2"></i>Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
