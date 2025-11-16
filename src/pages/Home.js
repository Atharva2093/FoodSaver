import React from 'react';
import { Link } from 'react-router-dom';
import useTypewriter from '../hooks/useTypewriter';
import CountUp from 'react-countup';

const Home = () => {
  const typewriterTexts = ["Connecting Restaurants...", "Feeding the Hungry...", "Saving Surplus Food..."];
  const typewriterText = useTypewriter(typewriterTexts, 100);

  const statsData = [
    { label: 'Food Saved', value: '1,500 kg' },
    { label: 'Meals Donated', value: '75,000' },
    { label: 'Partners', value: '200+' },
  ];

  const stepsData = [
    {
      title: 'Restaurants Donate',
      description: 'Restaurants easily list their surplus food available for donation through our user-friendly interface.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M220.2,100l-18-31.18a28,28,0,0,0-47.3-1.92L139.56,40.31a28,28,0,0,0-48.12-.63,28,28,0,0,0-43,34.78l3.34,5.79a28,28,0,0,0-22,41.92l38,65.82a87.46,87.46,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3A88,88,0,0,0,220.2,100Zm-6.67,62.63A72,72,0,0,1,81.63,180l-38-65.82a12,12,0,0,1,20.79-12l22,38.1a8,8,0,1,0,13.85-8l-38-65.81a12,12,0,0,1,13.5-17.59,11.9,11.9,0,0,1,7.29,5.59l34,58.89a8,8,0,0,0,13.85-8l-26-45h0a12,12,0,0,1,20.78-12L160,107.78a48.08,48.08,0,0,0-11,61,8,8,0,0,0,13.86-8,32,32,0,0,1,11.71-43.71,8,8,0,0,0,2.93-10.93l-10-17.32a12,12,0,0,1,20.78-12l18,31.18A71.49,71.49,0,0,1,213.53,162.62ZM184.27,29.93a8,8,0,0,1,9.8-5.66c15.91,4.27,29,14.11,36.86,27.73a8,8,0,0,1-13.86,8c-5.72-9.92-15.36-17.12-27.14-20.27A8,8,0,0,1,184.27,29.93ZM80.91,237a8,8,0,0,1-11.24,1.33c-11-8.69-20.11-19.58-28.6-34.28a8,8,0,0,1,13.86-8c7.44,12.88,15.27,22.32,24.65,29.72A8,8,0,0,1,80.91,237Z" />
        </svg>
      )
    },
    {
      title: 'NGOs Collect',
      description: 'NGOs can browse available donations and coordinate pickups, ensuring efficient food distribution.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
        </svg>
      )
    },
    {
      title: 'Impact is Measured',
      description: 'We track the amount of food saved and meals donated, providing transparency and demonstrating the collective impact.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z" />
        </svg>
      )
    },
  ];

  const testimonialsData = [
    {
      quote: '"FoodSaver has made it incredibly easy for us to donate our surplus food. It\'s a win-win!"',
      author: '- Sarah Chen, Restaurant Owner',
      imageClass: 'testimonial-image-1'
    },
    {
      quote: '"Thanks to FoodSaver, we\'ve been able to provide more meals to those in need. It\'s a fantastic initiative."',
      author: '- David Lee, NGO Coordinator',
      imageClass: 'testimonial-image-2'
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0a0a0a, #1a1a1a)",
        color: "white",
        overflowX: "hidden",
      }}
    >
      {/* Animated Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* Grid Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            opacity: 0.3,
          }}
        />

        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined"
                  ? window.innerWidth
                  : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined"
                  ? window.innerHeight
                  : 1000),
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined"
                  ? window.innerWidth
                  : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined"
                  ? window.innerHeight
                  : 1000),
              scale: Math.random() * 0.5 + 0.5,
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              position: "absolute",
              width: Math.random() * 300 + 100 + "px",
              height: Math.random() * 300 + 100 + "px",
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(16,185,129,${
                Math.random() * 0.2 + 0.1
              }), transparent)`,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 20px",
            gap: "40px",
          }}
        >
          {/* Left: Text Content */}
          <div style={{ flex: 1, maxWidth: "600px" }}>
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: "900",
                marginBottom: "24px",
                background:
                  "linear-gradient(135deg, #10b981, #06b6d4, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.1,
              }}
            >
              Connect, Reduce, Impact
            </motion.h1>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: "600",
                marginBottom: "24px",
                color: "#10b981",
                minHeight: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {currentText}
              <span style={{ opacity: 0.5 }}>|</span>
            </motion.div>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "rgba(255,255,255,0.7)",
                lineHeight: "1.8",
                marginBottom: "40px",
              }}
            >
              Join FoodSaver, the platform that connects restaurants with NGOs to minimize food waste and feed those in need. Together, we can make a difference.
            </motion.p>

            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(16, 185, 129, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "20px 48px",
                background:
                  "linear-gradient(135deg, #10b981, #059669)",
                color: "white",
                fontWeight: "700",
                fontSize: "1.25rem",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 40px rgba(16,185,129,0.4)",
              }}
            >
              Get Started
            </motion.button>
          </div>
          <Link to="/registration" className="cta-button final-cta-button">
            <span className="cta-text">Get Started</span>
          </Link>
        </div>
      </div>

         
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              flex: 1,
              maxWidth: "600px",
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src="https://thumbs.dreamstime.com/b/homeless-beggars-street-allahabad-india-poor-indian-woman-children-begging-food-streets-uttar-pradesh-74305275.jpg"
              alt="People in need"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setCountStart(true)}
          transition={{ duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            marginBottom: "120px",
            padding: "40px 0",
          }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                position: "relative",
                padding: "40px",
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "24px",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: `linear-gradient(to right, ${stat.color
                    .replace("from-", "#")
                    .split(" to-")
                    .join(", #")})`,
                }}
              />

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ fontSize: "4rem", marginBottom: "16px" }}
              >
                {stat.icon}
              </motion.div>

              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "900",
                  background: `linear-gradient(135deg, ${stat.color
                    .replace("from-", "#")
                    .split(" to-")
                    .join(", #")})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "8px",
                }}
              >
                {countStart && <Counter end={stat.value} duration={2} />}
                {stat.unit}
              </div>

              <div
                style={{
                  fontSize: "1.125rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontWeight: "600",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <h2 className="testimonials-heading">Testimonials</h2>
      <div className="testimonials-carousel">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className={testimonial.imageClass}></div>
            <div>
              <p className="testimonial-text">{testimonial.quote}</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h1 className="cta-title">Ready to Make a Difference?</h1>
        </div>
        <div className="cta-button-container">
          <Link to="/registration" className="cta-button final-cta-button">
            <span className="cta-text">Get Started</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;