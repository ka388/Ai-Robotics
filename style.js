import React from 'react';
import './style.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Robotwallah</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Transforming Learning into an Exciting Adventure!</h2>
        <p>Dive into the world of Robotics and STEM with Robotwallah. Let's inspire the future innovators of India!</p>
        <a href="#services" className="btn">Explore Our Services</a>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service">
            <h3>Workshop</h3>
            <p>Hands-On Learning Experience in Robotics and AI Fundamentals.</p>
            <a href="#" className="btn">Learn More</a>
          </div>
          <div className="service">
            <h3>Robotics Lab</h3>
            <p>Access to Advanced Technology and Resources for Innovation.</p>
            <a href="#" className="btn">Learn More</a>
          </div>
          <div className="service">
            <h3>Robotics Event</h3>
            <p>Competitions and Networking Opportunities in AI & Robotics.</p>
            <a href="#" className="btn">Learn More</a>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section">
        <h2>Our Programs</h2>
        <div className="program-grid">
          <div className="program">
            <h3>For Grade 1-5</h3>
            <p>Basic Coding, Robotics, and AI with Practical Hands-On Sessions.</p>
            <a href="#" className="btn">Learn More</a>
          </div>
          <div className="program">
            <h3>For Grade 6-9</h3>
            <p>Advanced Robotics, Coding, and Mini Projects like Drones.</p>
            <a href="#" className="btn">Learn More</a>
          </div>
          <div className="program">
            <h3>For Grade 10-12</h3>
            <p>Pro Robotics, Python, AI Tools, and Cyber Security.</p>
            <a href="#" className="btn">Learn More</a>
          </div>
        </div>
      </section>

      {/* Innovation Lab Section */}
      <section id="innovation-lab" className="section">
        <h2>Robot Wallah Innovation Lab</h2>
        <p>Our labs introduce students to AI and robotics, providing hands-on experience in building and programming robots.</p>
        <a href="#" className="btn">Learn More</a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Robotwallah. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;