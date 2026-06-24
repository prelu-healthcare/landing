import React, { useState } from 'react';
import './App.css';

const TEAL = '#3AADA8';
const TEAL_DARK = '#2d9490';
const DARK = '#0f1923';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav">
      <a href="#home" className="nav-logo">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill={TEAL}/>
          <path d="M16 8c-2.2 0-4 1.8-4 4 0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" fill="white"/>
          <circle cx="16" cy="12" r="1.5" fill={TEAL}/>
        </svg>
        <span>Prelu<strong>Healthcare</strong></span>
      </a>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
        <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Contact Us</a>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Compassionate Care &amp; Transport
        </div>
        <h1>The steady hand<br />when you need it<br /><em>most.</em></h1>
        <p>Prelu Healthcare ensures people get where they need to go — to their doctor, to their treatment, back home — with dignity, reliability, and care.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Get Started →</a>
          <a href="tel:+17209983257" className="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            (720) 998-3257
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-img-wrapper">
          <div className="hero-img-placeholder">
            <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
              <rect x="5" y="20" width="70" height="30" rx="6" fill="#e2f4f3"/>
              <rect x="0" y="30" width="80" height="15" rx="4" fill="#c5eae8"/>
              <circle cx="18" cy="48" r="7" fill="#3AADA8"/>
              <circle cx="18" cy="48" r="3" fill="white"/>
              <circle cx="58" cy="48" r="7" fill="#3AADA8"/>
              <circle cx="58" cy="48" r="3" fill="white"/>
              <rect x="20" y="10" width="35" height="20" rx="4" fill="#e2f4f3"/>
              <rect x="25" y="13" width="10" height="10" rx="2" fill="#3AADA8" opacity="0.4"/>
              <rect x="38" y="13" width="10" height="10" rx="2" fill="#3AADA8" opacity="0.4"/>
            </svg>
            <p>Your vehicle photo here</p>
          </div>
          <div className="hero-badge-float">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill={TEAL}/>
              <path d="M16 8c-2.2 0-4 1.8-4 4 0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" fill="white"/>
            </svg>
            PreluHealthcare
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="1.8"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/><rect x="9" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/></svg>
    ),
    title: 'Non-Medical Transport (NMT)',
    desc: 'Reliable, comfortable transportation for everyday medical appointments, pharmacy visits, and errands for those who need a steady hand.',
    status: 'active',
    tag: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
    ),
    title: 'Prelu Care Navigator Platform',
    desc: 'AI-powered, voice-enabled care navigation for older adults and caregivers. Get resources, benefits help, and connect to a real person when you need it.',
    status: 'active',
    tag: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    title: 'Home Health Care Agency',
    desc: 'Comprehensive home services including medical care, nursing, physical/occupational therapy, and personal care for residents.',
    status: 'coming',
    tag: 'License Approval Pending',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'Behavioral Health Secure Transportation',
    desc: 'Safe, dignified, and confidential transport for individuals receiving behavioral and mental health services, handled with compassion and trained professionalism.',
    status: 'coming',
    tag: 'Coming Soon',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    ),
    title: 'Program Approved Service Agency (PASA)',
    desc: 'Waiver-funded support services for individuals with intellectual and developmental disabilities, helping them live with greater independence.',
    status: 'coming',
    tag: 'Coming Soon',
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-label">OUR SERVICES</div>
      <h2>Comprehensive care, from your door to the doctor's.</h2>
      <p className="section-sub">We provide a continuum of care that spans transportation, coordination, and in-home support, ensuring you or your loved ones are never alone in the healthcare journey.</p>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className={`service-card ${s.status === 'coming' ? 'coming' : ''}`} key={i}>
            {s.tag && <span className="service-tag">{s.tag}</span>}
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            {s.status === 'active'
              ? <a href="#contact" className="service-link">Learn more →</a>
              : <span className="service-coming">Coming Soon</span>
            }
          </div>
        ))}
      </div>
    </section>
  );
}

const whyUs = [
  { icon: '🛡️', title: 'Licensed & Insured', desc: 'Fully compliant with state and federal regulations, carrying comprehensive insurance across all our services.' },
  { icon: '💛', title: 'Compassionate, Trained Staff', desc: 'Our team shows up with empathy, patience, and genuine human connection at every step.' },
  { icon: '🔄', title: 'Whole-Person Care', desc: 'From getting to an appointment to navigating care options — no one falls through the cracks.' },
  { icon: '🤖', title: 'Tech-Enabled, Human-Led', desc: 'Our Care Navigator pairs smart AI with real people, making resources easy to find and use.' },
  { icon: '⏰', title: 'Reliable & On Time', desc: 'Whether a dialysis run or a care coordination call, we show up when we say we will. Every time.' },
  { icon: '📋', title: 'Personalized Support Plans', desc: 'Every client has different needs. We tailor transportation, navigation, and care support to each person.' },
];

function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="why-left">
        <div className="section-label light">WHY CHOOSE US</div>
        <h2>More than a ride.<br />A partner in care.</h2>
        <p>When you entrust us with your loved ones, we treat them as our own. Prelu Healthcare was built on rigorous standards and uncompromising empathy, covering every part of the care journey.</p>
      </div>
      <div className="why-grid">
        {whyUs.map((w, i) => (
          <div className="why-card" key={i}>
            <span className="why-icon">{w.icon}</span>
            <h4>{w.title}</h4>
            <p>{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:hello@preluhealthcare.com?subject=Service Request: ${form.service || 'General Inquiry'}&body=Name: ${form.firstName} ${form.lastName}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0A%0AMessage: ${form.message}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <div className="section-label">GET STARTED</div>
        <h2>Let us handle the journey.</h2>
        <p>Reach out today to schedule transportation or discuss personalized care navigation for your family.</p>
        <div className="contact-info">
          <div className="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            <div><strong>Call Us 24/7</strong><br /><a href="tel:+17209983257">(720) 998-3257</a></div>
          </div>
          <div className="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <div><strong>Email Us</strong><br /><a href="mailto:hello@preluhealthcare.com">hello@preluhealthcare.com</a></div>
          </div>
          <div className="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <div><strong>Headquarters</strong><br />3557 N Duquesne Ct<br />Aurora, Colorado 80019</div>
          </div>
        </div>
      </div>
      <div className="contact-right">
        {submitted ? (
          <div className="form-success">
            <span>✓</span>
            <h3>Message sent!</h3>
            <p>We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Jane" required value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" required value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="jane@example.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>
            </div>
            <div className="form-group">
              <label>Service Needed</label>
              <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                <option value="">Select a service...</option>
                <option>Non-Medical Transport (NMT)</option>
                <option>Prelu Care Navigator Platform</option>
                <option>General Inquiry / Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="How can we help you or your loved one today?" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>
            <button type="submit" className="btn-primary full">Request Service</button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#home" className="nav-logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill={TEAL}/>
              <path d="M16 8c-2.2 0-4 1.8-4 4 0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" fill="white"/>
              <circle cx="16" cy="12" r="1.5" fill={TEAL}/>
            </svg>
            <span style={{color:'white'}}>Prelu<strong>Healthcare</strong></span>
          </a>
          <p>The steady hand that makes sure people get where they need to go, receive the care they deserve, and find the support that helps them thrive.</p>
        </div>
        <div className="footer-links">
          <div>
            <h5>Quick Links</h5>
            <a href="#services">Our Services</a>
            <a href="#why-us">Why Choose Us</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div>
            <h5>Legal</h5>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/hipaa">HIPAA Compliance</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Prelu Healthcare. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
