'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>ICEEM</div>
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to ICEEM</h1>
          <p className={styles.heroSubtitle}>Innovation, Excellence & Expertise in Motion</p>
          <p className={styles.heroDescription}>
            Your trusted partner for cutting-edge business solutions and digital transformation
          </p>
          <div className={styles.heroButtons}>
            <a href="#contact" className={styles.btnPrimary}>Get Started</a>
            <a href="#services" className={styles.btnSecondary}>Learn More</a>
          </div>
        </div>
        <div className={styles.heroWave}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🚀</div>
              <h3>Digital Solutions</h3>
              <p>Innovative digital transformation strategies tailored to your business needs</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>💼</div>
              <h3>Business Consulting</h3>
              <p>Expert guidance to optimize operations and drive sustainable growth</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚙️</div>
              <h3>Technical Solutions</h3>
              <p>Advanced technology implementation and integration services</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📊</div>
              <h3>Data Analytics</h3>
              <p>Transform your data into actionable insights for better decision making</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🎯</div>
              <h3>Strategy Planning</h3>
              <p>Comprehensive strategic planning to achieve your business objectives</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🤝</div>
              <h3>Partnership Solutions</h3>
              <p>Build strong partnerships that drive mutual success and innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>About ICEEM</h2>
              <p>
                ICEEM is a leading provider of innovative business solutions, dedicated to helping
                organizations achieve excellence through cutting-edge technology and strategic expertise.
              </p>
              <p>
                With a commitment to quality and innovation, we partner with businesses across industries
                to drive digital transformation and sustainable growth.
              </p>
              <ul className={styles.featureList}>
                <li>✓ Industry-leading expertise</li>
                <li>✓ Proven track record of success</li>
                <li>✓ Customer-centric approach</li>
                <li>✓ Innovative solutions</li>
              </ul>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Projects Delivered</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h3>Contact Information</h3>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Tunisia</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🌐</span>
                <a href="https://iceem.tn">www.iceem.tn</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <span>info@iceem.tn</span>
              </div>
            </div>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows={5} required></textarea>
              <button type="submit" className={styles.btnPrimary}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p>&copy; {new Date().getFullYear()} ICEEM. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
