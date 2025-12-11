import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Restaurant = () => {
  // SEO optimization
  useEffect(() => {
    document.title = 'Restaurant Food Donation Platform | FoodSaver - Reduce Waste, Feed Communities';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join FoodSaver\'s restaurant food donation platform. Reduce food waste, help communities, get tax benefits. Safe food handling guidelines, legal protection, and easy pickup coordination.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Join FoodSaver\'s restaurant food donation platform. Reduce food waste, help communities, get tax benefits. Safe food handling guidelines, legal protection, and easy pickup coordination.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'restaurant food donation, food waste reduction, safe food handling, Good Samaritan Act, tax benefits, community impact, surplus food, food safety guidelines');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'restaurant food donation, food waste reduction, safe food handling, Good Samaritan Act, tax benefits, community impact, surplus food, food safety guidelines';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);
  const benefits = [
    'Reduce food waste and operational costs',
    'Contribute to community welfare and social responsibility',
    'Enhance brand reputation and customer loyalty',
    'Easy-to-use platform with minimal setup time',
    'Track your impact and receive detailed reports',
    'Connect with local NGOs and community organizations'
  ];

  const features = [
    {
      title: 'Easy Listing',
      description: 'List surplus food items in minutes with our simple interface',
      icon: '📝'
    },
    {
      title: 'Real-time Updates',
      description: 'Get instant notifications when NGOs are interested in your donations',
      icon: '🔔'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Set pickup times that work with your restaurant schedule',
      icon: '⏰'
    },
    {
      title: 'Impact Tracking',
      description: 'See the real impact of your donations with detailed analytics',
      icon: '📊'
    }
  ];

  return (
    <div className="content-wrapper">
      {/* Back to Home Button */}
      <div style={{ padding: '12px 16px' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 16px',
            backgroundColor: '#94e0b2',
            color: '#101914',
            fontWeight: 'bold',
            fontSize: '14px',
            borderRadius: '12px',
            textDecoration: 'none',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#7bcc9b'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#94e0b2'}
        >
          ⬅ Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div
        style={{
          display: 'flex',
          minHeight: '400px',
          flexDirection: 'column',
          gap: '24px',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '8px',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          marginBottom: '40px'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'center' }}>
          <h1
            style={{
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: '900',
              lineHeight: '1.25',
              letterSpacing: '-0.033em'
            }}
          >
            For Restaurants
          </h1>
          <h2 style={{ color: 'white', fontSize: '1rem', fontWeight: '400', lineHeight: '1.5' }}>
            Turn your surplus food into community impact. Join hundreds of restaurants making a difference.
          </h2>
        </div>
        <Link to="/registration" style={{
          display: 'flex',
          minWidth: '84px',
          maxWidth: '480px',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: '12px',
          height: '48px',
          padding: '0 20px',
          backgroundColor: '#38e07b',
          color: '#0e1a13',
          fontSize: '16px',
          fontWeight: 'bold',
          lineHeight: 'normal',
          letterSpacing: '0.015em',
          textDecoration: 'none'
        }}>
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Get Started</span>
        </Link>
      </div>

      {/* Benefits Section */}
      <div style={{ padding: '0 16px', marginBottom: '40px' }}>
        <h2
          style={{
            color: '#0e1a13',
            fontSize: '28px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '32px'
          }}
        >
          Why Join FoodSaver?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                padding: '20px',
                backgroundColor: '#e8f2ec',
                borderRadius: '8px',
                border: '1px solid #daeded'
              }}
            >
              <p style={{ color: '#0e1a13', fontSize: '16px', lineHeight: '1.5', margin: 0 }}>
                ✓ {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: '0 16px', marginBottom: '40px' }}>
        <h2
          style={{
            color: '#0e1a13',
            fontSize: '28px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '32px'
          }}
        >
          Platform Features
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                padding: '24px',
                backgroundColor: '#f8fbfa',
                borderRadius: '12px',
                border: '1px solid #daeded',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  marginBottom: '16px'
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  color: '#0e1a13',
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '12px'
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: '#51946c',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  margin: 0
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Legal & Safety Section */}
      <div style={{ padding: '0 16px', marginBottom: '40px', backgroundColor: '#f8fbfa', borderRadius: '12px', border: '1px solid #daeded' }}>
        <div style={{ padding: '32px 24px' }}>
          <h2
            style={{
              color: '#0e1a13',
              fontSize: '28px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            🛡️ Legal & Safety Guidelines
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #daeded' }}>
              <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                ⚖️ Legal Protection
              </h3>
              <ul style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Good Samaritan Food Donation Act protects donors</li>
                <li>No liability for good faith donations</li>
                <li>Tax deduction benefits available</li>
                <li>Compliance with local health regulations</li>
              </ul>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #daeded' }}>
              <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🧼 Safety Standards
              </h3>
              <ul style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Maintain proper food temperatures</li>
                <li>Use clean, food-grade containers</li>
                <li>Label with preparation date and time</li>
                <li>Follow FIFO (First In, First Out) principles</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '24px', padding: '20px', backgroundColor: '#e8f2ec', borderRadius: '8px', border: '1px solid #38e07b' }}>
            <h4 style={{ color: '#0e1a13', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>✅ Do's</h4>
            <ul style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px', marginBottom: '16px' }}>
              <li>Donate food within 2 hours of preparation</li>
              <li>Keep hot foods hot (above 140°F) and cold foods cold (below 40°F)</li>
              <li>Use proper packaging and labeling</li>
              <li>Maintain donation records for tax purposes</li>
            </ul>
            <h4 style={{ color: '#0e1a13', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>❌ Don'ts</h4>
            <ul style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Don't donate food past its expiration date</li>
              <li>Don't mix different food types in same container</li>
              <li>Don't donate food that's been sitting at room temperature</li>
              <li>Don't forget to communicate special handling requirements</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Food Types Section */}
      <div style={{ padding: '0 16px', marginBottom: '40px' }}>
        <h2
          style={{
            color: '#0e1a13',
            fontSize: '28px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '32px'
          }}
        >
          🍽️ Types of Food We Accept
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ padding: '24px', backgroundColor: '#e8f2ec', borderRadius: '12px', border: '1px solid #daeded' }}>
            <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🍲 Prepared Meals
            </h3>
            <ul style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Cooked entrees and side dishes</li>
              <li>Soups and stews</li>
              <li>Sandwiches and wraps</li>
              <li>Salads (within 2 hours of prep)</li>
            </ul>
          </div>
          <div style={{ padding: '24px', backgroundColor: '#e8f2ec', borderRadius: '12px', border: '1px solid #daeded' }}>
            <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              📦 Packaged Foods
            </h3>
            <ul style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Unopened canned goods</li>
              <li>Sealed packaged items</li>
              <li>Bread and baked goods</li>
              <li>Dairy products (within date)</li>
            </ul>
          </div>
          <div style={{ padding: '24px', backgroundColor: '#e8f2ec', borderRadius: '12px', border: '1px solid #daeded' }}>
            <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🎉 Event Leftovers
            </h3>
            <ul style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Catered event surplus</li>
              <li>Buffet items (properly maintained)</li>
              <li>Untouched plated meals</li>
              <li>Beverages and desserts</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '24px', padding: '24px', backgroundColor: '#fff3cd', borderRadius: '8px', border: '1px solid #ffc107' }}>
          <h3 style={{ color: '#856404', fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>⚠️ Items NOT Accepted</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <ul style={{ color: '#856404', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Expired or spoiled food</li>
              <li>Home-cooked meals</li>
              <li>Opened containers from customers</li>
            </ul>
            <ul style={{ color: '#856404', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Alcohol or alcoholic beverages</li>
              <li>Food with unknown ingredients</li>
              <li>Items stored improperly</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={{ padding: '0 16px', marginBottom: '40px' }}>
        <h2
          style={{
            color: '#0e1a13',
            fontSize: '28px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '32px'
          }}
        >
          📋 How It Works for Restaurants
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                backgroundColor: '#38e07b',
                borderRadius: '50%',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0e1a13',
                flexShrink: 0
              }}
            >
              1
            </div>
            <div>
              <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                Sign Up
              </h3>
              <p style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                Create your restaurant profile in minutes. Provide basic information about your establishment.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                backgroundColor: '#38e07b',
                borderRadius: '50%',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0e1a13',
                flexShrink: 0
              }}
            >
              2
            </div>
            <div>
              <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                List Surplus Food
              </h3>
              <p style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                When you have surplus food, simply list it on our platform with details like type, quantity, and pickup time.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                backgroundColor: '#38e07b',
                borderRadius: '50%',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0e1a13',
                flexShrink: 0
              }}
            >
              3
            </div>
            <div>
              <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                Coordinate Pickup
              </h3>
              <p style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                NGOs will contact you to arrange pickup. Coordinate the details and hand over the food.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                backgroundColor: '#38e07b',
                borderRadius: '50%',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0e1a13',
                flexShrink: 0
              }}
            >
              4
            </div>
            <div>
              <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                Track Impact
              </h3>
              <p style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                Monitor your impact through our dashboard. See how many meals you've helped provide to the community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: 'center', padding: '40px 16px' }}>
        <h2
          style={{
            color: '#0e1a13',
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '24px'
          }}
        >
          Ready to Make a Difference?
        </h2>
        <p
          style={{
            color: '#51946c',
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '32px'
          }}
        >
          Join hundreds of restaurants already making an impact in their communities.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/restaurant-submission"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 32px',
              backgroundColor: '#38e07b',
              color: '#0e1a13',
              fontWeight: '700',
              fontSize: '18px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2bc066'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#38e07b'}
          >
            🍽️ Donate Food Now
          </Link>
          <Link
            to="/restaurant-dashboard"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 32px',
              backgroundColor: '#e8f2ec',
              color: '#0e1a13',
              fontWeight: '700',
              fontSize: '18px',
              borderRadius: '8px',
              textDecoration: 'none',
              border: '2px solid #38e07b',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#38e07b';
              e.target.style.color = '#0e1a13';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#e8f2ec';
              e.target.style.color = '#0e1a13';
            }}
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
