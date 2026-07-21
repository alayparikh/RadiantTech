import { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { SERVICES } from '../data/site';
import './ContactForm.css';

const EMPTY = { name: '', phone: '', email: '', service: '', message: '' };

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Please enter your name.';
  if (!f.phone.trim()) e.phone = 'Please enter a contact number.';
  if (!f.email.trim()) e.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address.';
  if (!f.message.trim()) e.message = 'Please tell us how we can help.';
  return e;
}

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const eObj = validate(form);
    setErrors(eObj);
    if (Object.keys(eObj).length) {
      // focus first invalid field
      const first = Object.keys(eObj)[0];
      document.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus('sending');

    // TODO(endpoint): wire to Formspree/Web3Forms/EmailJS or a backend.
    // Example (Web3Forms):
    //   await fetch('https://api.web3forms.com/submit', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ access_key: 'YOUR_KEY', ...form }),
    //   });
    await new Promise((r) => setTimeout(r, 800)); // simulate network

    setStatus('sent');
    setForm(EMPTY);
  };

  if (status === 'sent') {
    return (
      <div className="cform cform--sent" role="status">
        <CheckCircle2 size={48} className="cform__check" aria-hidden="true" />
        <h3>Thank you — message received.</h3>
        <p>Our team will get back to you within one business day.</p>
        <button className="btn btn--outline" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={submit} noValidate>
      <div className="cform__row">
        <Field label="Name" name="name" value={form.name} onChange={update} error={errors.name} autoComplete="name" />
        <Field label="Contact Number" name="phone" type="tel" value={form.phone} onChange={update} error={errors.phone} autoComplete="tel" />
      </div>
      <div className="cform__row">
        <Field label="Email" name="email" type="email" value={form.email} onChange={update} error={errors.email} autoComplete="email" />
        <div className="cform__field">
          <label htmlFor="cf-service">Service</label>
          <select id="cf-service" name="service" value={form.service} onChange={update}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </div>
      </div>
      <div className="cform__field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows="5"
          value={form.message}
          onChange={update}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'cf-message-err' : undefined}
          placeholder="Tell us about your project or challenge…"
        />
        {errors.message && <span className="cform__err" id="cf-message-err">{errors.message}</span>}
      </div>
      <button type="submit" className="btn btn--primary cform__submit" disabled={status === 'sending'}>
        {status === 'sending' ? (
          <><Loader2 size={18} className="spin" aria-hidden="true" /> Sending…</>
        ) : (
          <><Send size={18} aria-hidden="true" /> Send a Message</>
        )}
      </button>
    </form>
  );
}

function Field({ label, name, type = 'text', value, onChange, error, ...rest }) {
  const id = `cf-${name}`;
  return (
    <div className="cform__field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-err` : undefined}
        {...rest}
      />
      {error && <span className="cform__err" id={`${id}-err`}>{error}</span>}
    </div>
  );
}
