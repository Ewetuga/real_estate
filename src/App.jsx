import { Routes, Route, Link } from 'react-router-dom'
import Logo from './assets/Logo.jsx'
import './App.css'
import React, { useRef, useEffect, useState } from 'react'

// Custom hook for in-view animation
function useInViewAnimation(className) {
  const ref = useRef();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          node.classList.add(className);
        } else {
          node.classList.remove(className);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, { threshold: 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [className]);
  return ref;
}

function Home() {
  // Animation refs
  const heroRef = useInViewAnimation('fade-in');
  const heroImgRef = useInViewAnimation('fade-in');
  const stat1Ref = useInViewAnimation('slide-up');
  const stat2Ref = useInViewAnimation('slide-up');
  const stat3Ref = useInViewAnimation('slide-up');
  const whyRef = useInViewAnimation('fade-in');
  const why1Ref = useInViewAnimation('slide-up');
  const why2Ref = useInViewAnimation('slide-up');
  const why3Ref = useInViewAnimation('slide-up');
  const testRef = useInViewAnimation('fade-in');
  const test1Ref = useInViewAnimation('slide-up');
  const test2Ref = useInViewAnimation('slide-up');
  const ctaRef = useInViewAnimation('fade-in');

  return (
    <>
      <div ref={heroRef} className="home-hero" style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', padding: '2rem 1rem', textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f5f6fa', marginBottom: 8 }}>
          Your Property, Our Priority.<br />Just in <span style={{ color: '#2ec4b6' }}> Real Estate</span>
        </h1>
        <p style={{ maxWidth: 500, color: '#d1d5db', fontSize: '1.1rem', margin: '0 auto 2rem' }}>
          Help clients make informed decisions on their real estate investments and property portfolios. Offering expert real estate consultancy, we specialize in the sales and purchase of land and houses.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, width: '100%' }}>
          <img ref={heroImgRef} src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=1600&q=80" alt="Modern apartment complex" className="animated-delay-1" style={{ width: '100vw', maxWidth: '100%', height: '48vw', maxHeight: 520, objectFit: 'cover', borderRadius: 24, boxShadow: '0 4px 24px rgba(30,40,60,0.25)', margin: '0 -24px' }} />
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 16 }}>
            <div ref={stat1Ref} className="animated-delay-2">
              <div style={{ fontWeight: 700, fontSize: 22, color: '#2ec4b6' }}>9k+</div>
              <div style={{ color: '#d1d5db', fontSize: 14 }}>Premium Product</div>
            </div>
            <div ref={stat2Ref} className="animated-delay-3">
              <div style={{ fontWeight: 700, fontSize: 22, color: '#2ec4b6' }}>3k+</div>
              <div style={{ color: '#d1d5db', fontSize: 14 }}>Happy Customer</div>
            </div>
            <div ref={stat3Ref} className="animated-delay-4">
              <div style={{ fontWeight: 700, fontSize: 22, color: '#2ec4b6' }}>1k+</div>
              <div style={{ color: '#d1d5db', fontSize: 14 }}>Awards Winning</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section ref={whyRef} style={{ width: '100%', maxWidth: 1200, margin: '3rem auto 0', padding: '2rem 1rem', background: 'rgba(35, 69, 103, 0.7)', borderRadius: 18, boxShadow: '0 2px 16px rgba(30,40,60,0.10)' }}>
          <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '2rem', marginBottom: 16 }}>Why Choose Us?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
            <div ref={why1Ref} className="animated-delay-2" style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 320, background: 'rgba(44,62,80,0.7)', borderRadius: 12, padding: 24, color: '#f5f6fa' }}>
              <h3 style={{ color: '#2ec4b6', fontWeight: 600 }}>Expert Guidance</h3>
              <p>Our experienced agents provide trusted advice for smart real estate investments and property management.</p>
            </div>
            <div ref={why2Ref} className="animated-delay-3" style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 320, background: 'rgba(44,62,80,0.7)', borderRadius: 12, padding: 24, color: '#f5f6fa' }}>
              <h3 style={{ color: '#2ec4b6', fontWeight: 600 }}>Personalized Service</h3>
              <p>We tailor our services to your needs, ensuring a smooth experience whether buying, selling, or investing.</p>
            </div>
            <div ref={why3Ref} className="animated-delay-4" style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 320, background: 'rgba(44,62,80,0.7)', borderRadius: 12, padding: 24, color: '#f5f6fa' }}>
              <h3 style={{ color: '#2ec4b6', fontWeight: 600 }}>Proven Results</h3>
              <p>Years of experience and a strong track record make us your reliable property hub for success.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testRef} style={{ width: '100%', maxWidth: 1200, margin: '3rem auto 0', padding: '2rem 1rem', background: 'rgba(35, 69, 103, 0.7)', borderRadius: 18, boxShadow: '0 2px 16px rgba(30,40,60,0.10)' }}>
          <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '2rem', marginBottom: 16 }}>Testimonials</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
            <div ref={test1Ref} className="animated-delay-2" style={{ flex: '1 1 260px', minWidth: 260, maxWidth: 340, background: 'rgba(44,62,80,0.7)', borderRadius: 12, padding: 24, color: '#f5f6fa' }}>
              <p>“Firmco real estate made my first home purchase smooth and stress-free. Their team is knowledgeable and truly cares!”</p>
              <div style={{ color: '#2ec4b6', fontWeight: 600, marginTop: 12 }}>— Jane Doe</div>
            </div>
            <div ref={test2Ref} className="animated-delay-3" style={{ flex: '1 1 260px', minWidth: 260, maxWidth: 340, background: 'rgba(44,62,80,0.7)', borderRadius: 12, padding: 24, color: '#f5f6fa' }}>
              <p>“Excellent service and great advice. I highly recommend Unique Homes for any real estate needs.”</p>
              <div style={{ color: '#2ec4b6', fontWeight: 600, marginTop: 12 }}>— John Smith</div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section ref={ctaRef} style={{ width: '100%', maxWidth: 1200, margin: '3rem auto 0', padding: '2rem 1rem', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '2rem', marginBottom: 16 }}>Ready to make a smart move?</h2>
          <p style={{ color: '#d1d5db', fontSize: '1.1rem', marginBottom: 24 }}>Contact us today and let our experts guide you to your next great investment or dream home.</p>
          <Link to="/contact" style={{ background: 'linear-gradient(90deg, #234567 60%, #2ec4b6 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '1rem 2.5rem', fontWeight: 700, fontSize: 18, textDecoration: 'none', boxShadow: '0 2px 8px rgba(30,40,60,0.15)' }}>Get Started</Link>
        </section>
      </div>

      {/* Footer */}
      <footer style={{
        width: '100vw',
        minHeight: '40vh',
        background: 'rgba(26,34,54,0.95)',
        color: '#f5f6fa',
        padding: '0.5rem 0 0.5rem 0',
        borderTop: '2px solid #2ec4b6',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        boxShadow: '0 -2px 16px rgba(30,40,60,0.10)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24, padding: '0 0.5rem' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 28, marginBottom: 8, lineHeight: 1.3 }}>Real Estate </div>
            <div style={{ color: '#d1d5db', fontSize: 18, lineHeight: 1.7 }}>Your trusted real estate partner in Nigeria.</div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 20, lineHeight: 1.5 }}>Quick Links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Link to="/" style={{ color: '#2ec4b6', fontSize: 18, lineHeight: 1.7 }}>Home</Link>
              <Link to="/about" style={{ color: '#2ec4b6', fontSize: 18, lineHeight: 1.7 }}>About</Link>
              <Link to="/listings" style={{ color: '#2ec4b6', fontSize: 18, lineHeight: 1.7 }}>Listings</Link>
              <Link to="/contact" style={{ color: '#2ec4b6', fontSize: 18, lineHeight: 1.7 }}>Contact</Link>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 20, lineHeight: 1.5 }}>Contact</div>
            <div style={{ color: '#d1d5db', fontSize: 18, lineHeight: 1.7 }}>Email: info@uniquehomes.com.ng</div>
            <div style={{ color: '#d1d5db', fontSize: 18, lineHeight: 1.7 }}>Phone: +234 800 000 0000</div>
            <div style={{ color: '#d1d5db', fontSize: 18, lineHeight: 1.7 }}>Lagos, Nigeria</div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 20, lineHeight: 1.5 }}>Follow Us</div>
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ fontSize: 28, color: '#2ec4b6', lineHeight: 1.7 }}>🌐</span>
              <span style={{ fontSize: 28, color: '#2ec4b6', lineHeight: 1.7 }}>🐦</span>
              <span style={{ fontSize: 28, color: '#2ec4b6', lineHeight: 1.7 }}>📘</span>
              <span style={{ fontSize: 28, color: '#2ec4b6', lineHeight: 1.7 }}>📸</span>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#d1d5db', fontSize: 16, marginTop: 16, lineHeight: 1.7 }}>
          &copy; {new Date().getFullYear()} Unique Homes and Properties. All rights reserved.
        </div>
        <style>{`
          @media (max-width: 600px) {
            footer {
              padding: 1.5rem 0.5rem !important;
            }
            footer > div {
              padding: 0 0.5rem !important;
            }
          }
        `}</style>
      </footer>
    </>
  );
}

function About() {
  return (
    <main style={{ width: '100%', maxWidth: 1200, margin: '3.5rem auto 0', padding: '2rem 1rem', color: '#f5f6fa' }}>
      {/* Hero/Intro Section */}
      <section className="fade-in" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#2ec4b6', marginBottom: 8 }}>About Unique Homes and Properties</h1>
        <p style={{ fontSize: '1.2rem', color: '#d1d5db', maxWidth: 700, margin: '0 auto 1.5rem' }}>
          We help clients make informed decisions on their real estate investments and property portfolios. As your reliable property hub, our dedicated agents provide trusted advice backed by years of experience in the real estate business.
        </p>
        <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=800&q=80" alt="Teamwork" className="fade-in animated-delay-1" style={{ width: '100%', maxWidth: 480, borderRadius: 18, boxShadow: '0 4px 24px rgba(30,40,60,0.18)', margin: '1.5rem auto 0' }} />
      </section>

      {/* Mission & Vision */}
      <section className="fade-in animated-delay-1" style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', marginBottom: '2.5rem' }}>
        <div className="slide-up animated-delay-2" style={{ flex: '1 1 320px', minWidth: 260, background: 'rgba(44,62,80,0.7)', borderRadius: 12, padding: 24 }}>
          <h2 style={{ color: '#2ec4b6', fontWeight: 700 }}>Our Mission</h2>
          <p>To empower clients to make smart, profitable real estate decisions and provide exceptional service at every step.</p>
        </div>
        <div className="slide-up animated-delay-3" style={{ flex: '1 1 320px', minWidth: 260, background: 'rgba(44,62,80,0.7)', borderRadius: 12, padding: 24 }}>
          <h2 style={{ color: '#2ec4b6', fontWeight: 700 }}>Our Vision</h2>
          <p>To be the leading real estate company in Nigeria, known for integrity, innovation, and client success.</p>
        </div>
      </section>

      {/* What We Do / Services */}
      <section className="fade-in animated-delay-2" style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#fff', fontWeight: 700, textAlign: 'center', marginBottom: 24 }}>What We Do</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          <div className="slide-up animated-delay-2" style={{ flex: '1 1 220px', minWidth: 200, background: 'rgba(35,69,103,0.7)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
            <h3 style={{ color: '#2ec4b6', fontWeight: 600 }}>Real Estate Consultancy</h3>
            <p>Expert advice for buying, selling, and investing in property.</p>
          </div>
          <div className="slide-up animated-delay-3" style={{ flex: '1 1 220px', minWidth: 200, background: 'rgba(35,69,103,0.7)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
            <h3 style={{ color: '#2ec4b6', fontWeight: 600 }}>Sales & Purchase</h3>
            <p>Specialists in the sales and purchase of land and houses.</p>
          </div>
          <div className="slide-up animated-delay-4" style={{ flex: '1 1 220px', minWidth: 200, background: 'rgba(35,69,103,0.7)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
            <h3 style={{ color: '#2ec4b6', fontWeight: 600 }}>Property Management</h3>
            <p>Reliable management for your real estate investments.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="fade-in animated-delay-3" style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#fff', fontWeight: 700, textAlign: 'center', marginBottom: 24 }}>Meet the Team</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          <div className="slide-up animated-delay-2" style={{ flex: '1 1 180px', minWidth: 180, background: 'rgba(44,62,80,0.7)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team member" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: 12 }} />
            <div style={{ fontWeight: 700, color: '#2ec4b6' }}>John Abraham</div>
            <div style={{ color: '#d1d5db', fontSize: 15 }}>Lead Agent</div>
          </div>
          <div className="slide-up animated-delay-3" style={{ flex: '1 1 180px', minWidth: 180, background: 'rgba(44,62,80,0.7)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team member" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: 12 }} />
            <div style={{ fontWeight: 700, color: '#2ec4b6' }}>Jane Doe</div>
            <div style={{ color: '#d1d5db', fontSize: 15 }}>Client Relations</div>
          </div>
          <div className="slide-up animated-delay-4" style={{ flex: '1 1 180px', minWidth: 180, background: 'rgba(44,62,80,0.7)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Team member" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: 12 }} />
            <div style={{ fontWeight: 700, color: '#2ec4b6' }}>Samuel Okoro</div>
            <div style={{ color: '#d1d5db', fontSize: 15 }}>Investment Advisor</div>
          </div>
        </div>
      </section>

      {/* Why Trust Us? */}
      <section className="fade-in animated-delay-4" style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#fff', fontWeight: 700, textAlign: 'center', marginBottom: 24 }}>Why Trust Us?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          <div className="slide-up animated-delay-2" style={{ flex: '1 1 220px', minWidth: 200, background: 'rgba(35,69,103,0.7)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
            <h3 style={{ color: '#2ec4b6', fontWeight: 600 }}>10+ Years Experience</h3>
            <p>Decades of combined expertise in the Nigerian real estate market.</p>
          </div>
          <div className="slide-up animated-delay-3" style={{ flex: '1 1 220px', minWidth: 200, background: 'rgba(35,69,103,0.7)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
            <h3 style={{ color: '#2ec4b6', fontWeight: 600 }}>Trusted by Clients</h3>
            <p>Hundreds of satisfied clients and successful transactions.</p>
          </div>
          <div className="slide-up animated-delay-4" style={{ flex: '1 1 220px', minWidth: 200, background: 'rgba(35,69,103,0.7)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
            <h3 style={{ color: '#2ec4b6', fontWeight: 600 }}>Transparent & Reliable</h3>
            <p>We value honesty, transparency, and your long-term success.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="fade-in animated-delay-4" style={{ textAlign: 'center', margin: '2.5rem 0 0 0' }}>
        <h2 style={{ color: '#fff', fontWeight: 700, marginBottom: 16 }}>Ready to work with us?</h2>
        <p style={{ color: '#d1d5db', fontSize: '1.1rem', marginBottom: 24 }}>Contact us today and let our experts guide you to your next great investment or dream home.</p>
        <Link to="/contact" style={{ background: 'linear-gradient(90deg, #234567 60%, #2ec4b6 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '1rem 2.5rem', fontWeight: 700, fontSize: 18, textDecoration: 'none', boxShadow: '0 2px 8px rgba(30,40,60,0.15)' }}>Contact Us</Link>
      </section>
    </main>
  );
}

function Listings() {
  // Placeholder property data
  const properties = [
    {
      id: 1,
      title: '3 Bedroom Apartment in Lekki',
      price: '₦45,000,000',
      location: 'Lekki, Lagos',
      image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&w=600&q=80',
      desc: 'Modern 3 bedroom apartment with all amenities in a secure estate.'
    },
    {
      id: 2,
      title: 'Luxury Duplex in Abuja',
      price: '₦120,000,000',
      location: 'Gwarinpa, Abuja',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&w=600&q=80',
      desc: 'Spacious luxury duplex with swimming pool and garden.'
    },
    {
      id: 3,
      title: 'Serviced Apartment in Victoria Island',
      price: '₦80,000,000',
      location: 'Victoria Island, Lagos',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=600&q=80',
      desc: 'Fully serviced apartment with ocean view and 24/7 security.'
    },
    {
      id: 4,
      title: 'Land for Sale in Ajah',
      price: '₦25,000,000',
      location: 'Ajah, Lagos',
      image: 'https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&w=600&q=80',
      desc: '600sqm dry land in a fast-developing area, perfect for investment.'
    },
  ];

  return (
    <main style={{ width: '100%', maxWidth: 1200, margin: '3.5rem auto 0', padding: '2rem 1rem', color: '#f5f6fa' }}>
      <section className="fade-in" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#2ec4b6', marginBottom: 8 }}>Available Properties</h1>
        <p style={{ fontSize: '1.1rem', color: '#d1d5db', maxWidth: 700, margin: '0 auto 1.5rem' }}>
          Browse our latest listings and find your next home or investment property.
        </p>
        {/* Simple Search/Filter Bar */}
        <form style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', margin: '1.5rem 0 0 0' }}>
          <input type="text" placeholder="Search location or type..." style={{ padding: '0.7rem 1rem', borderRadius: 6, border: 'none', fontSize: 16, minWidth: 180 }} />
          <select style={{ padding: '0.7rem 1rem', borderRadius: 6, border: 'none', fontSize: 16 }}>
            <option>All Types</option>
            <option>Apartment</option>
            <option>Duplex</option>
            <option>Land</option>
          </select>
          <button type="submit" style={{ background: 'linear-gradient(90deg, #234567 60%, #2ec4b6 100%)', color: '#fff', border: 'none', borderRadius: 6, padding: '0.7rem 1.5rem', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Search</button>
        </form>
      </section>
      {/* Property Grid */}
      <section className="fade-in animated-delay-1 listings-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 32 }}>
        {properties.map((prop, i) => (
          <div key={prop.id} className={`property-card slide-up animated-delay-${(i%4)+2}`} style={{ background: 'rgba(44,62,80,0.7)', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 16px rgba(30,40,60,0.10)', display: 'flex', flexDirection: 'column' }}>
            <img src={prop.image} alt={prop.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
            <div style={{ padding: 18, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 700, color: '#2ec4b6', fontSize: 18, marginBottom: 4 }}>{prop.title}</div>
              <div style={{ color: '#d1d5db', fontSize: 15, marginBottom: 4 }}>{prop.location}</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{prop.price}</div>
              <div style={{ color: '#d1d5db', fontSize: 15, marginBottom: 12 }}>{prop.desc}</div>
              <button style={{ background: 'linear-gradient(90deg, #234567 60%, #2ec4b6 100%)', color: '#fff', border: 'none', borderRadius: 6, padding: '0.7rem 1.5rem', fontWeight: 700, fontSize: 16, cursor: 'pointer', marginTop: 'auto' }}>View Details</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

function Contact() {
  return (
    <main style={{ width: '100%', maxWidth: 1200, margin: '3.5rem auto 0', padding: '2rem 1rem', color: '#f5f6fa' }}>
      {/* Title & Intro */}
      <section className="fade-in" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#2ec4b6', marginBottom: 8 }}>Contact Us</h1>
        <p style={{ fontSize: '1.1rem', color: '#d1d5db', maxWidth: 700, margin: '0 auto 1.5rem' }}>
          We’d love to hear from you! Fill out the form or use the details below to get in touch with our team.
        </p>
      </section>
      <section className="fade-in animated-delay-1" style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
        {/* Contact Form */}
        <form className="slide-up animated-delay-2" style={{ flex: '1 1 340px', minWidth: 280, maxWidth: 420, background: 'rgba(44,62,80,0.7)', borderRadius: 14, padding: 28, display: 'flex', flexDirection: 'column', gap: 18, boxShadow: '0 2px 16px rgba(30,40,60,0.10)' }}>
          <input type="text" placeholder="Your Name" required style={{ padding: '0.9rem 1rem', borderRadius: 6, border: 'none', fontSize: 16, marginBottom: 0 }} />
          <input type="email" placeholder="Your Email" required style={{ padding: '0.9rem 1rem', borderRadius: 6, border: 'none', fontSize: 16, marginBottom: 0 }} />
          <input type="tel" placeholder="Your Phone (optional)" style={{ padding: '0.9rem 1rem', borderRadius: 6, border: 'none', fontSize: 16, marginBottom: 0 }} />
          <textarea placeholder="Your Message" required rows={5} style={{ padding: '0.9rem 1rem', borderRadius: 6, border: 'none', fontSize: 16, resize: 'vertical', marginBottom: 0 }} />
          <button type="submit" style={{ background: 'linear-gradient(90deg, #234567 60%, #2ec4b6 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '1rem 2.5rem', fontWeight: 700, fontSize: 18, cursor: 'pointer', marginTop: 8 }}>Send Message</button>
        </form>
        {/* Contact Details & Socials */}
        <div className="slide-up animated-delay-3" style={{ flex: '1 1 260px', minWidth: 220, maxWidth: 340, background: 'rgba(35,69,103,0.7)', borderRadius: 14, padding: 28, boxShadow: '0 2px 16px rgba(30,40,60,0.10)', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Contact Details</div>
          <div style={{ color: '#d1d5db', fontSize: 16 }}>Email: info@uniquehomes.com.ng</div>
          <div style={{ color: '#d1d5db', fontSize: 16 }}>Phone: +234 800 000 0000</div>
          <div style={{ color: '#d1d5db', fontSize: 16 }}>Lagos, Nigeria</div>
          <div style={{ fontWeight: 600, marginTop: 18, marginBottom: 8 }}>Follow Us</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <span style={{ fontSize: 26, color: '#2ec4b6' }}>🌐</span>
            <span style={{ fontSize: 26, color: '#2ec4b6' }}>🐦</span>
            <span style={{ fontSize: 26, color: '#2ec4b6' }}>📘</span>
            <span style={{ fontSize: 26, color: '#2ec4b6' }}>📸</span>
          </div>
        </div>
        {/* Map or Image */}
        <img className="slide-up animated-delay-4" src="https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&w=600&q=80" alt="Office location" style={{ flex: '1 1 220px', minWidth: 180, maxWidth: 320, borderRadius: 14, objectFit: 'cover', boxShadow: '0 2px 16px rgba(30,40,60,0.10)', height: 220 }} />
      </section>
    </main>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Close menu on route change (optional, for better UX)
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Logo size={40} />
            <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: 1 }}>Real Estate</span>
            <button
              className="navbar-toggle"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((open) => !open)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                marginLeft: 16,
              }}
            >
              <span style={{ display: 'block', width: 28, height: 3, background: '#2ec4b6', margin: '6px 0', borderRadius: 2 }}></span>
              <span style={{ display: 'block', width: 28, height: 3, background: '#2ec4b6', margin: '6px 0', borderRadius: 2 }}></span>
              <span style={{ display: 'block', width: 28, height: 3, background: '#2ec4b6', margin: '6px 0', borderRadius: 2 }}></span>
            </button>
          </span>
          <div
            className={`navbar-links${menuOpen ? ' open' : ''}`}
            style={{
              display: 'flex', alignItems: 'center', gap: '2rem',
            }}
          >
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/listings" onClick={() => setMenuOpen(false)}>Listings</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
