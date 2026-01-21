import React, { useState } from 'react';
import Aurora from './Aurora';
import { div } from 'three/tsl';

const Hire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // ✅ THIS WAS MISSING / BROKEN
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setMessage('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        budget: '',
        timeline: '',
        description: '',
      });
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
    <Aurora
      colorStops={['#3A29FF', '#FF94B4', '#FF3232']}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
      />

   <div className="hire-heading">
  <h1 className="pay1">
    I build fast, reliable product UIs that
  </h1>
  <h1 className="pay pay1">
    convert visitors into Paying Customers
  </h1>
  <p className="hire-p">
    Senior frontend engineer with shipping revenue driving interfaces for SaaS,
    fintech, and devtools teams.
    <br />
    I focus on performance, clarity, and business outcomes—not just pixels.
  </p>
</div>



<div className="hire-box-container">
  <div data-aos="fade-left" className="box hire-box">
    <h2>What I can do for you</h2>
    <ul>
      <li>
        Turn messy specs into clean, maintainable UIs that ship
        <br />
        without drama
      </li>
      <li>
        I build fast, clean, production-ready web apps that don’t break
        <br />
        under pressure.
      </li>
      <li>
        If you want someone who executes, fixes problems, and ships—hire me.
      </li>
    </ul>
  </div>

  <div data-aos="fade-left" className="box hire-box2">
    <h2>Response time</h2>
    <p>
      Send a short brief and I&apos;ll reply with feasibility, a timeline
      <br />
      estimate, and next steps
    </p>
    <button>Book a Discovery call</button>
  </div>

  <div data-aos="fade-right" className="box hire-box3">
    <h2>Tell me about your project</h2>
    <p>
      I partner with serious teams who want things built properly, shipped on
      time, and maintained without chaos.
    </p>
    <ul>
      <li>
        You’ll hear back within one business day with focused questions and a
        clear path forward.
      </li>
      <li>
        If the scope is defined, you’ll get a transparent price and a
        step-by-step delivery plan.
      </li>
      <li>
        For ongoing needs, I work on a monthly engagement with clear goals and
        visible progress.
      </li>
    </ul>
  </div>
</div>

<br />
<br />
<br />


    <div className="hire-main">

      <main className="hire-root">
        <section className="card">
          <header className="header">
            <h1 className="header-title">Let’s build something.</h1>
            <p className="header-subtitle">
              Tell me about your project. Serious inquiries only.
            </p>
          </header>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Budget</label>
                <select
                  name="budget"
                  className="form-select"
                  value={formData.budget}
                  onChange={handleChange}
                  >
                  <option value="">Select</option>
                  <option>Under $1k</option>
                  <option>$1k – $5k</option>
                  <option>$5k – $10k</option>
                  <option>$10k+</option>
                </select>
              </div>

              <div className="form-group">
                <label>Timeline</label>
                <select
                  name="timeline"
                  className="form-select"
                  value={formData.timeline}
                  onChange={handleChange}
                  >
                  <option value="">Select</option>
                  <option>ASAP</option>
                  <option>2–4 weeks</option>
                  <option>1–3 months</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Project description</label>
              <textarea
                name="description"
                className="form-textarea"
                value={formData.description}
                onChange={handleChange}
                required
                />
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send project details'}
            </button>

            {message && <p className="form-message">{message}</p>}
          </form>
        </section>
      </main>
    </div>
                </div>
  );
};

export default Hire;
