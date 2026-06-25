import React, { useState } from 'react';
import './App.css';
import { HeartPulse, Menu, X, ArrowRight, Phone, Car, ActivitySquare, Home, ShieldPlus, Users, ShieldCheck, Clock, ClipboardList, HeartHandshake, Navigation, MapPin, Mail, CheckCircle2, Stethoscope } from 'lucide-react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav">
      <a href="#home" className="nav-logo">
        <div className="nav-logo-icon"><HeartPulse size={18} color="white" /></div>
        <span>Prelu<strong>Healthcare</strong></span>
      </a>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
        <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Contact Us</a>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
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
        <p>Prelu Healthcare ensures people get where they need to go, to their doctor, to their treatment, back home, with dignity, reliability, and care.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary"><span>Get Started</span><span className="btn-arrow"><ArrowRight size={16} /></span></a>
          <a href="tel:+17209983257" className="btn-outline"><Phone size={16} />(720) 998-3257</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-img-wrapper">
          <img src="/car.jpg" alt="Prelu Healthcare vehicle" className="hero-car-img" />
          <div className="hero-badge-float">
            <div className="float-icon"><HeartPulse size={14} color="white" /></div>
            <span>Prelu<strong>Healthcare</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: <Car size={22} color="#06B6D4" />, title: 'Non-Medical Transport (NMT)', desc: 'Reliable, comfortable transportation for everyday medical appointments, pharmacy visits, and errands for those who need a steady hand.', status: 'active', tag: null },
  { icon: <ActivitySquare size={22} color="#06B6D4" />, title: 'Non-Emergency Medical Transport', desc: 'Scheduled medical transport for dialysis, therapy, and specialist visits. ADA-compliant vehicles and certified professional drivers.', status: 'active', tag: null },
  { icon: <Stethoscope size={22} color="#06B6D4" />, title: 'Prelu Care Navigator Platform', desc: 'AI-powered, voice-enabled care navigation for older adults and caregivers. Get resources, benefits help, and connect to a real person when you need it.', status: 'active', tag: null },
  { icon: <Home size={22} color="#94a3b8" />, title: 'Home Health Care Agency', desc: 'Comprehensive home services including medical care, nursing, physical/occupational therapy, and personal care for residents.', status: 'coming', tag: 'License Approval Pending' },
  { icon: <ShieldPlus size={22} color="#94a3b8" />, title: 'Behavioral Health Secure Transportation', desc: 'Safe, dignified, and confidential transport for individuals receiving behavioral and mental health services, handled with compassion and trained professionalism.', status: 'coming', tag: 'Coming Soon' },
  { icon: <Users size={22} color="#94a3b8" />, title: 'Program Approved Service Agency (PASA)', desc: 'Waiver-funded support services for individuals with intellectual and developmental disabilities, helping them live with greater independence.', status: 'coming', tag: 'Coming Soon' },
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
              ? <a href="#contact" className="service-link">Learn more <span className="link-arrow"><ArrowRight size={13} /></span></a>
              : <span className="service-coming">Coming Soon</span>
            }
          </div>
        ))}
      </div>
    </section>
  );
}

const whyUs = [
  { icon: <ShieldCheck size={22} color="#06B6D4" />, title: 'Licensed & Insured', desc: 'Fully compliant with state and federal regulations, carrying comprehensive insurance across all our services.' },
  { icon: <Users size={22} color="#06B6D4" />, title: 'Compassionate, Trained Staff', desc: 'Our team shows up with empathy, patience, and genuine human connection at every step.' },
  { icon: <HeartHandshake size={22} color="#06B6D4" />, title: 'Whole-Person Care', desc: 'From getting to an appointment to navigating care options, no one falls through the cracks.' },
  { icon: <Navigation size={22} color="#06B6D4" />, title: 'Tech-Enabled, Human-Led', desc: 'Our Care Navigator pairs smart AI with real people, making resources easy to find and use.' },
  { icon: <Clock size={22} color="#06B6D4" />, title: 'Reliable & On Time', desc: 'Whether a dialysis run or a care coordination call, we show up when we say we will. Every time.' },
  { icon: <ClipboardList size={22} color="#06B6D4" />, title: 'Personalized Support Plans', desc: 'Every client has different needs. We tailor transportation, navigation, and care support to each person.' },
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
            <div className="why-icon">{w.icon}</div>
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
          <div className="contact-item"><Phone size={20} color="#06B6D4" /><div><strong>Call Us 24/7</strong><br /><a href="tel:+17209983257">(720) 998-3257</a></div></div>
          <div className="contact-item"><Mail size={20} color="#06B6D4" /><div><strong>Email Us</strong><br /><a href="mailto:hello@preluhealthcare.com">hello@preluhealthcare.com</a></div></div>
          <div className="contact-item"><MapPin size={20} color="#06B6D4" /><div><strong>Headquarters</strong><br />3557 N Duquesne Ct<br />Aurora, Colorado 80019</div></div>
        </div>
      </div>
      <div className="contact-right">
        {submitted ? (
          <div className="form-success">
            <CheckCircle2 size={48} color="#06B6D4" />
            <h3>Message sent!</h3>
            <p>We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-row">
              <div className="form-group"><label>First Name</label><input type="text" placeholder="Jane" required value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} /></div>
              <div className="form-group"><label>Last Name</label><input type="text" placeholder="Doe" required value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} /></div>
            </div>
            <div className="form-row">
              <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
              <div className="form-group"><label>Email</label><input type="email" placeholder="jane@example.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
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
            <div className="form-group"><label>Message</label><textarea rows="4" placeholder="How can we help you or your loved one today?" value={form.message} onChange={e => setForm({...form, message: e.target.value})} /></div>
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
            <div className="nav-logo-icon"><HeartPulse size={18} color="white" /></div>
            <span style={{color:'white'}}>Prelu<strong style={{color:'#06B6D4'}}>Healthcare</strong></span>
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
