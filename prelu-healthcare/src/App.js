import React, { useState, useEffect } from 'react';
import './App.css';
import { HeartPulse, Menu, X, ArrowRight, Phone, Car, ActivitySquare, Home, ShieldPlus, Users, ShieldCheck, Clock, ClipboardList, HeartHandshake, Navigation, MapPin, Mail, CheckCircle2, Stethoscope } from 'lucide-react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={isScrolled ? 'nav nav-scrolled' : 'nav'}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon"><HeartPulse size={26} color="white" strokeWidth={2.5} /></div>
          <span>Prelu<strong>Healthcare</strong></span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact" className="nav-cta">Contact Us</a>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#contact" className="nav-cta-mobile" onClick={() => setMenuOpen(false)}>Contact Us</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-blob-tr" />
      <div className="hero-blob-bl" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Compassionate Care &amp; Transport
          </div>
          <h1>The steady hand when you need it <em>most.</em></h1>
          <p>Prelu Healthcare ensures people get where they need to go, to their doctor, to their treatment, back home, with dignity, reliability, and care.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get Started
              <span className="btn-arrow"><ArrowRight size={20} strokeWidth={2} /></span>
            </a>
            <a href="tel:+17209983257" className="btn-outline">
              <Phone size={20} strokeWidth={2} />
              (720) 998-3257
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/car.jpg" alt="Prelu Healthcare transport van" className="hero-car-img" />
          <div className="hero-badge-float">
            <div className="float-icon"><HeartPulse size={20} color="white" strokeWidth={2.5} /></div>
            <span>Prelu<strong>Healthcare</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { id:'nmt', icon: Car, title: 'Non-Medical Transport (NMT)', desc: 'Reliable, comfortable transportation for everyday medical appointments, pharmacy visits, and errands for those who need a steady hand.', status: 'active' },
  { id:'nemt', icon: ActivitySquare, title: 'Non-Emergency Medical Transport', desc: 'Scheduled medical transport for dialysis, therapy, and specialist visits. ADA-compliant vehicles and certified professional drivers.', status: 'active' },
  { id:'nav', icon: Stethoscope, title: 'Prelu Care Navigator Platform', desc: 'Tech-enabled, human-assisted care navigation. Get resources, information, and personalized care coordination from real people supported by smart tech.', status: 'active' },
  { id:'home', icon: Home, title: 'Home Health Care Agency', desc: 'Comprehensive home services including medical care, nursing, physical/occupational therapy, and personal care for residents.', status: 'coming', badge: 'License Approval Pending' },
  { id:'bhst', icon: ShieldPlus, title: 'Behavioral Health Secure Transportation', desc: 'Safe, dignified, and confidential transport for individuals receiving behavioral and mental health services, handled with compassion and trained professionalism.', status: 'coming', badge: 'Coming Soon' },
  { id:'pasa', icon: Users, title: 'Program Approved Service Agency (PASA)', desc: 'Waiver-funded support services for individuals with intellectual and developmental disabilities, helping them live with greater independence and community connection.', status: 'coming', badge: 'Coming Soon' },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Our Services</div>
          <h2>Comprehensive care, from your door to the doctor's.</h2>
          <p className="section-sub">We provide a continuum of care that spans transportation, coordination, and in-home support, ensuring you or your loved ones are never alone in the healthcare journey.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div className={`service-card ${s.status}`} key={s.id}>
                {s.status === 'coming' && <span className="service-tag">{s.badge}</span>}
                <div className={`service-icon ${s.status === 'coming' ? 'dim' : ''}`}>
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h4 className={s.status === 'coming' ? 'dim' : ''}>{s.title}</h4>
                <p className={s.status === 'coming' ? 'dim' : ''}>{s.desc}</p>
                {s.status === 'active'
                  ? <a href="#contact" className="service-link">Learn more <span className="link-arrow"><ArrowRight size={14} /></span></a>
                  : <span className="service-badge-bottom">{s.badge}</span>
                }
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Fully compliant with state and federal regulations, carrying comprehensive insurance across all of our services for your complete peace of mind.' },
  { icon: Users, title: 'Compassionate, Trained Staff', desc: 'Our team is trained to do more than transport and schedule. They show up with empathy, patience, and genuine human connection at every step.' },
  { icon: HeartHandshake, title: 'Whole-Person Care', desc: 'We look at the full picture, from getting to an appointment, to navigating care options, to support at home, so no one falls through the cracks.' },
  { icon: Navigation, title: 'Tech-Enabled, Human-Led', desc: 'Our Care Navigator Platform pairs smart technology with real people, making it easier to find resources, coordinate services, and stay informed.' },
  { icon: Clock, title: 'Reliable & On Time', desc: 'Whether it is a dialysis run or a care coordination call, we show up when we say we will, every time.' },
  { icon: ClipboardList, title: 'Personalized Support Plans', desc: "Every client has different needs. We tailor transportation, navigation, and care support to each person's physical, cognitive, and personal requirements." },
];

function WhyUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="why-blob-tr" />
      <div className="why-blob-bl" />
      <div className="container">
        <div className="why-inner">
          <div className="why-left">
            <div className="section-label light">Why Choose Us</div>
            <h2>More than a ride. A partner in care.</h2>
            <p>When you entrust us with your loved ones, we treat them as our own. Prelu Healthcare was built on rigorous standards and uncompromising empathy, covering every part of the care journey from transportation to navigation to in-home support.</p>
          </div>
          <div className="why-grid">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div className="why-card" key={i}>
                  <div className="why-icon"><Icon size={24} strokeWidth={2} /></div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ firstName:'', lastName:'', phone:'', email:'', service:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k,v]) => data.append(k, v));
      const res = await fetch('https://formspree.io/f/xzdognbd', { method:'POST', body:data, headers:{ Accept:'application/json' } });
      if (res.ok) setSubmitted(true);
    } catch(err) { console.error(err); }
    setSubmitting(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="section-label">Get Started</div>
            <h2>Let us handle the journey.</h2>
            <p>Reach out today to schedule transportation or discuss personalized care navigation for your family.</p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <div><strong>Call Us 24/7</strong><a href="tel:+17209983257">(720) 998-3257</a></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div><strong>Email Us</strong><a href="mailto:hello@preluhealthcare.com">hello@preluhealthcare.com</a></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div><strong>Headquarters</strong><span>3557 N Duquesne Ct, Aurora, Colorado 80019</span></div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon"><CheckCircle2 size={40} color="#22c55e" /></div>
                <h4>We've got your request.</h4>
                <p>A care coordinator will review your information and call you within the next hour.</p>
                <button className="btn-outline-sm" onClick={() => setSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h4>Send a Message</h4>
                <div className="form-row">
                  <div className="form-group"><label>First Name</label><input type="text" placeholder="Jane" required value={form.firstName} onChange={e=>setForm({...form,firstName:e.target.value})} /></div>
                  <div className="form-group"><label>Last Name</label><input type="text" placeholder="Doe" required value={form.lastName} onChange={e=>setForm({...form,lastName:e.target.value})} /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="(555) 123-4567" required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} /></div>
                  <div className="form-group"><label>Email</label><input type="email" placeholder="jane@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
                </div>
                <div className="form-group">
                  <label>Service Needed</label>
                  <select required value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
                    <option value="">Select a service...</option>
                    <option>Non-Medical Transport (NMT)</option>
                    <option>Non-Emergency Medical Transport</option>
                    <option>Prelu Care Navigator Platform</option>
                    <option>General Inquiry / Other</option>
                  </select>
                </div>
                <div className="form-group"><label>Message</label><textarea rows="4" placeholder="How can we help you or your loved one today?" required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} /></div>
                <button type="submit" className="btn-submit" disabled={submitting}>{submitting ? 'Sending...' : 'Request Service'}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#" className="nav-logo footer-logo">
              <div className="nav-logo-icon"><HeartPulse size={26} color="white" strokeWidth={2.5} /></div>
              <span>Prelu<strong>Healthcare</strong></span>
            </a>
            <p>The steady hand that makes sure people get where they need to go, receive the care they deserve, and find the support that helps them thrive.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#services">Our Services</a>
            <a href="#why-us">Why Choose Us</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">HIPAA Compliance</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Prelu Healthcare. All rights reserved.</p>
          <p>Designed for compassionate care.</p>
        </div>
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