import { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { SERVICES } from '../data/site';
import './ContactForm.css';

const EMPTY = { name: '', phone: '', email: '', service: '', message: '', botcheck: '' };

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
      const first = Object.keys(eObj)[0];
      document.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    // Honeypot: real users never fill this; bots do. Silently drop.
    if (form.botcheck) {
      setStatus('sent');
      setForm(EMPTY);
      return;
    }

    setStatus('sending');
    setErrors({});

    // Web3Forms: set VITE_WEB3FORMS_ACCESS_KEY in your host env (see DEPLOY.md).
    // Get a free key at https://web3forms.com (enter info@radiantcontrolsystems.com).
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // No key configured yet — demo mode (no email sent).
      await new Promise((r) => setTimeout(r, 700));
      setStatus('sent');
      setForm(EMPTY);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          botcheck: form.botcheck, // Web3Forms server-side honeypot
          subject: `New website enquiry — ${form.service || 'General'}`,
          from_name: 'Radiant Control Systems Website',
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service || 'Not specified',
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm(EMPTY);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      setStatus('idle');
      setErrors({ form: "Something went wrong. Please call us at (470) 915-0965 or email info@radiantcontrolsystems.com." });
    }
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
      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="text"
        name="botcheck"
        value={form.botcheck}
        onChange={update}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />
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
      {errors.form && (
        <p className="cform__err cform__err--form" role="alert">{errors.form}</p>
      )}
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
