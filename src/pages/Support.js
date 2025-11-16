import React from 'react';
// import './Support.css'; // Import the CSS file - REMOVED TO FIX ERROR
import { 
  Rss, 
  Truck, 
  TrendingUp, 
  ShieldCheck, 
  Lock, 
  Eye, 
  Award, 
  Megaphone, 
  ClipboardList, 
  ShoppingBasket, 
  LayoutGrid, 
  Users,
  Salad,
  Menu // Added Menu icon
} from 'lucide-react';

// --- Styles Component ---
// This component injects all the CSS into the page.
const SupportStyles = () => {
  return (
    <style>{`
      /* --- Global Styles & Fonts --- */
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

      /* Apply font to the root element this component is rendered in */
      .support-page-wrapper {
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #334155; /* slate-700 */
        overflow-x: hidden;
      }

      main {
        display: block;
      }

      /* --- Utility Classes --- */
      .container {
        width: 100%;
        max-width: 1152px; /* Roughly container */
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }

      @media (min-width: 640px) {
        .container {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
      }

      @media (min-width: 1024px) {
        .container {
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }

      .btn {
        display: inline-block;
        padding: 0.625rem 1.25rem;
        border-radius: 0.5rem; /* rounded-lg */
        font-size: 0.875rem; /* text-sm */
        font-weight: 600; /* font-semibold */
        text-decoration: none;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
      }

      /* --- Header --- */
      .app-header {
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(4px);
        position: sticky;
        top: 0;
        z-index: 50;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* shadow-sm */
      }

      .header-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }

      .header-logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .logo-icon {
        height: 2rem; /* h-8 */
        width: 2rem; /* w-8 */
        color: #059669; /* text-emerald-600 */
      }

      .logo-text {
        font-size: 1.5rem; /* text-2xl */
        font-weight: 700; /* font-bold */
        color: #1e293b; /* text-slate-800 */
      }

      .header-links {
        display: none; /* hidden */
        align-items: center;
        gap: 1.5rem; /* gap-6 */
      }

      @media (min-width: 768px) {
        .header-links {
          display: flex; /* md:flex */
        }
      }

      .header-links a {
        color: #475569; /* text-gray-600 */
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .header-links a:hover {
        color: #059669; /* hover:text-emerald-600 */
      }

      .header-links a.active-link {
        color: #059669; /* text-emerald-600 */
        font-weight: 600; /* font-semibold */
        border-bottom: 2px solid #059669; /* border-b-2 */
        padding-bottom: 0.25rem; /* pb-1 */
      }

      .header-buttons {
        display: flex;
        align-items: center;
        gap: 0.75rem; /* gap-3 */
      }

      .btn-login {
        background-color: #059669; /* bg-emerald-600 */
        color: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
      }
      .btn-login:hover {
        background-color: #047857; /* hover:bg-emerald-700 */
      }

      .btn-signup {
        background-color: #d1fae5; /* bg-emerald-100 */
        color: #065f46; /* text-emerald-700 */
      }
      .btn-signup:hover {
        background-color: #a7f3d0; /* hover:bg-emerald-200 */
      }

      .btn-login, .btn-signup {
        display: none; /* hidden */
      }

      @media (min-width: 640px) {
        .btn-login, .btn-signup {
          display: inline-block; /* sm:inline-block */
        }
      }

      .btn-mobile-menu {
        color: #1e293b; /* text-slate-800 */
        background: none;
        border: none;
        padding: 0.25rem;
        cursor: pointer;
      }
      .btn-mobile-menu svg {
        width: 1.5rem;
        height: 1.5rem;
      }

      @media (min-width: 768px) {
        .btn-mobile-menu {
          display: none; /* md:hidden */
        }
      }

      /* --- Hero Section --- */
      .hero-section {
        background-color: #f9fafb; /* bg-gray-50 */
      }

      .hero-content {
        max-width: 56rem; /* max-w-4xl */
        margin: 0 auto;
        text-align: center;
        background-image: linear-gradient(to right, #047857, #069669); /* from-emerald-700 to-green-600 */
        color: white;
        padding: 3rem 1.5rem; /* p-12 */
        border-radius: 1rem; /* rounded-2xl */
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
      }

      .hero-section > .container {
        padding-top: 5rem; /* py-20 */
        padding-bottom: 5rem;
      }

      @media (min-width: 768px) {
        .hero-section > .container {
          padding-top: 7rem; /* md:py-28 */
          padding-bottom: 7rem;
        }
        .hero-content {
          padding: 5rem 3rem; /* md:p-20 */
        }
      }

      .hero-title {
        font-size: 2.25rem; /* text-4xl */
        line-height: 2.5rem;
        font-weight: 800; /* font-extrabold */
        margin-top: 0;
        margin-bottom: 1.5rem; /* mb-6 */
      }

      @media (min-width: 768px) {
        .hero-title {
          font-size: 3.75rem; /* md:text-6xl */
          line-height: 1;
        }
      }

      .hero-subtitle {
        font-size: 1.125rem; /* text-lg */
        line-height: 1.75rem;
        color: #d1fae5; /* text-emerald-100 */
        max-width: 42rem; /* max-w-2xl */
        margin: 0 auto 2.5rem auto; /* mx-auto mb-10 */
      }

      @media (min-width: 768px) {
        .hero-subtitle {
          font-size: 1.25rem; /* md:text-xl */
          line-height: 1.75rem;
        }
      }

      .hero-cta-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem; /* gap-4 */
      }

      @media (min-width: 640px) {
        .hero-cta-group {
          flex-direction: row; /* sm:flex-row */
        }
      }

      .btn-hero-primary {
        background-color: #10b981; /* bg-emerald-500 */
        color: white;
        padding: 0.875rem 2rem; /* px-8 py-3.5 */
        font-size: 1rem; /* text-base */
        font-weight: 600;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
        text-decoration: none;
      }
      .btn-hero-primary:hover {
        background-color: #34d399; /* hover:bg-emerald-400 */
      }

      .btn-hero-secondary {
        background-color: white;
        color: #047857; /* text-emerald-700 */
        padding: 0.875rem 2rem; /* px-8 py-3.5 */
        font-size: 1rem; /* text-base */
        font-weight: 600;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
        text-decoration: none;
      }
      .btn-hero-secondary:hover {
        background-color: #f9fafb; /* hover:bg-gray-100 */
      }

      /* --- General Section Styles --- */
      .section-white {
        background-color: white;
      }
      .section-gray {
        background-color: #f9fafb; /* bg-gray-50 */
      }

      .section-white, .section-gray {
        padding-top: 5rem; /* py-20 */
        padding-bottom: 5rem;
      }

      @media (min-width: 768px) {
        .section-white, .section-gray {
          padding-top: 7rem; /* md:py-28 */
          padding-bottom: 7rem;
        }
      }

      .section-header {
        max-width: 48rem; /* max-w-3xl */
        margin: 0 auto 4rem auto; /* mx-auto mb-16 */
        text-align: center;
      }

      .section-title {
        font-size: 2.25rem; /* text-4xl */
        font-weight: 800; /* font-extrabold */
        color: #1e293b; /* text-slate-800 */
        margin-top: 0;
        margin-bottom: 1rem; /* mb-4 */
      }

      @media (min-width: 768px) {
        .section-title {
          font-size: 3rem; /* md:text-5xl */
        }
      }

      .section-subtitle {
        font-size: 1.125rem; /* text-lg */
        line-height: 1.75rem;
        color: #475569; /* text-gray-600 */
        margin: 0;
      }

      @media (min-width: 768px) {
        .section-subtitle {
          font-size: 1.25rem; /* md:text-xl */
        }
      }

      /* --- Info Card (Used by Features & Integrity) --- */
      .info-grid {
        display: grid;
        gap: 2rem; /* gap-8 */
      }

      @media (min-width: 768px) {
        .info-grid {
          grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
        }
      }

      .info-card {
        background-color: white;
        padding: 2rem; /* p-8 */
        border-radius: 1rem; /* rounded-2xl */
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
        transition: box-shadow 0.3s ease;
      }

      .info-card:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* hover:shadow-xl */
      }

      .info-card-icon-wrapper {
        margin-bottom: 1rem; /* mb-4 */
      }

      .info-card-icon {
        height: 2.5rem; /* h-10 */
        width: 2.5rem; /* w-10 */
        color: #059669; /* text-emerald-600 */
      }

      .info-card-title {
        font-size: 1.5rem; /* text-2xl */
        font-weight: 700; /* font-bold */
        color: #1e293b; /* text-slate-800 */
        margin-top: 0;
        margin-bottom: 0.75rem; /* mb-3 */
      }

      .info-card-description {
        font-size: 1rem; /* text-base */
        line-height: 1.625; /* leading-relaxed */
        color: #475569; /* text-gray-600 */
        margin: 0;
      }

      /* --- Mutual Support Section --- */
      .support-grid {
        display: grid;
        gap: 2rem; /* gap-8 */
      }

      @media (min-width: 1024px) {
        .support-grid {
          grid-template-columns: repeat(2, 1fr); /* lg:grid-cols-2 */
          gap: 3rem; /* md:gap-12 */
        }
      }

      .support-box {
        background-color: #f0fdf4; /* bg-emerald-50/70 */
        padding: 2rem; /* p-8 */
        border-radius: 1rem; /* rounded-2xl */
        border: 1px solid #a7f3d0; /* border-emerald-200 */
      }

      @media (min-width: 768px) {
        .support-box {
          padding: 2.5rem; /* md:p-10 */
        }
      }

      .support-box-title {
        font-size: 1.875rem; /* text-3xl */
        font-weight: 700; /* font-bold */
        color: #1e293b; /* text-slate-800 */
        margin-top: 0;
        margin-bottom: 2rem; /* mb-8 */
      }

      .support-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem; /* space-y-6 */
      }

      .support-list-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem; /* gap-4 */
      }

      .support-list-icon-wrapper {
        flex-shrink: 0;
      }

      .support-list-icon {
        height: 1.5rem; /* h-6 */
        width: 1.5rem; /* w-6 */
        color: #047857; /* text-emerald-700 */
      }

      .support-list-title {
        font-size: 1.125rem; /* text-lg */
        font-weight: 700; /* font-bold */
        color: #1e293b; /* text-slate-800 */
        margin-bottom: 0.25rem; /* mb-1 */
        margin-top: 0;
      }

      .support-list-description {
        font-size: 1rem; /* text-base */
        color: #475569; /* text-gray-600 */
        margin: 0;
      }

      /* --- Team Section --- */
      .team-card {
        background-color: white;
        padding: 2rem; /* p-8 */
        border-radius: 1rem; /* rounded-2xl */
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
        transition: box-shadow 0.3s ease;
        text-align: center;
      }

      .team-card:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* hover:shadow-xl */
      }

      .team-card-img {
        width: 10rem; /* w-40 */
        height: 10rem; /* h-40 */
        border-radius: 9999px; /* rounded-full */
        margin: 0 auto 1.25rem auto; /* mx-auto mb-5 */
        border: 4px solid #a7f3d0; /* border-4 border-emerald-300 */
        padding: 0.25rem; /* p-1 */
        object-fit: cover;
      }

      .team-card-name {
        font-size: 1.5rem; /* text-2xl */
        font-weight: 700; /* font-bold */
        color: #1e293b; /* text-slate-800 */
        margin-top: 0;
        margin-bottom: 0.375rem; /* mb-1.5 */
      }

      .team-card-title {
        font-size: 1.125rem; /* text-lg */
        font-weight: 600; /* font-semibold */
        color: #059669; /* text-emerald-600 */
        margin: 0;
      }

      /* --- Footer --- */
      .app-footer {
        background-color: #1e293b; /* bg-slate-800 */
        color: #d1d5db; /* text-gray-300 */
        padding: 3rem 0; /* py-12 */
      }

      .footer-content {
        text-align: center;
      }
    `}
    </style>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Support & Partnership
          </h1>
          <p className="hero-subtitle">
            Detailing our features, values, and how we facilitate mutual support between restaurants and NGOs to combat food waste.
          </p>
          <div className="hero-cta-group">
            <a href="#" className="btn btn-hero-primary">
              Contact Support
            </a>
            <a href="#" className="btn btn-hero-secondary">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Features Section ---
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="info-card">
    <div className="info-card-icon-wrapper">
      <Icon className="info-card-icon" />
    </div>
    <h3 className="info-card-title">{title}</h3>
    <p className="info-card-description">
      {description}
    </p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Rss,
      title: "Real-time Matching",
      description: "Instantly connect with partners in your area when food becomes available."
    },
    {
      icon: Truck,
      title: "Logistics Coordination",
      description: "Streamline the pickup and delivery process with our integrated scheduling tools."
    },
    {
      icon: TrendingUp,
      title: "Impact Tracking",
      description: "Monitor and report on your donation efforts and environmental impact."
    }
  ];

  return (
    <section className="section-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Our Features
          </h2>
          <p className="section-subtitle">
            Explore the functionalities that make Foodsaver the leading platform for connecting restaurants and NGOs.
          </p>
        </div>
        <div className="info-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Integrity Section ---
const IntegritySection = () => {
  const principles = [
    {
      icon: ShieldCheck,
      title: "Food Safety Compliance",
      description: "Ensuring all donations meet health and safety regulations for safe consumption."
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Protecting the information of our partners with robust security measures."
    },
    {
      icon: Eye,
      title: "Transparent Operations",
      description: "Providing clear and honest communication about our processes and impact."
    }
  ];

  return (
    <section className="section-gray">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Our Integrity
          </h2>
          <p className="section-subtitle">
            We are committed to the highest ethical and operational standards to build a trustworthy community.
          </p>
        </div>
        <div className="info-grid">
          {principles.map((principle) => (
            <FeatureCard key={principle.title} {...principle} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Mutual Support Section ---
const SupportListItem = ({ icon: Icon, title, description }) => (
  <div className="support-list-item">
    <div className="support-list-icon-wrapper">
      <Icon className="support-list-icon" />
    </div>
    <div>
      <h4 className="support-list-title">{title}</h4>
      <p className="support-list-description">
        {description}
      </p>
    </div>
  </div>
);

const MutualSupportSection = () => {
  const ngoToRestaurant = [
    {
      icon: Award,
      title: "Waste Reduction Certification",
      description: "Receive official recognition for your sustainability efforts, enhancing your brand image."
    },
    {
      icon: Megaphone,
      title: "Community PR",
      description: "Gain positive local exposure through our partner spotlight programs and social media."
    },
    {
      icon: ClipboardList,
      title: "Simplified Logistics",
      description: "Benefit from streamlined pickup schedules managed by our dedicated NGO partners."
    }
  ];

  const restaurantToNgo = [
    {
      icon: ShoppingBasket,
      title: "Consistent Food Supply",
      description: "Access a reliable stream of high-quality, surplus food to support your mission."
    },
    {
      icon: LayoutGrid,
      title: "Variety in Donations",
      description: "Provide diverse and nutritious meal options to the communities you serve."
    },
    {
      icon: Users,
      title: "Direct Local Impact",
      description: "Forge stronger community ties by directly supporting local families and individuals in need."
    }
  ];

  return (
    <section className="section-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            How We Support Each Other
          </h2>
          <p className="section-subtitle">
            Our platform is built on a foundation of mutual benefit, creating a powerful cycle of support between our partners.
          </p>
        </div>
        <div className="support-grid">
          <div className="support-box">
            <h3 className="support-box-title">
              Support from NGOs to Restaurants
            </h3>
            <div className="support-list">
              {ngoToRestaurant.map((item) => (
                <SupportListItem key={item.title} {...item} />
              ))}
            </div>
          </div>
          <div className="support-box">
            <h3 className="support-box-title">
              Support from Restaurants to NGOs
            </h3>
            <div className="support-list">
              {restaurantToNgo.map((item) => (
                <SupportListItem key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Team Section ---
const TeamMemberCard = ({ imgSrc, name, title }) => (
  <div className="team-card">
    <img
      src={imgSrc}
      alt={name}
      className="team-card-img"
      onError={(e) => { e.target.src = 'https://placehold.co/160x160/E0E0E0/B0B0B0?text=Profile'; }}
    />
    <h3 className="team-card-name">{name}</h3>
    <p className="team-card-title">
      {title}
    </p>
  </div>
);

const TeamSection = () => {
  const team = [
    {
      imgSrc: "https://placehold.co/160x160/d1fae5/1f2937?text=Jane+Doe",
      name: "Jane Doe",
      title: "NGO Liaison"
    },
    {
      imgSrc: "https://placehold.co/160x160/d1fae5/1f2937?text=John+Smith",
      name: "John Smith",
      title: "Restaurant Partnership Manager"
    },
    {
      imgSrc: "https://placehold.co/160x160/d1fae5/1f2937?text=Alex+Johnson",
      name: "Alex Johnson",
      title: "Technical Support Specialist"
    }
  ];

  return (
    <section className="section-gray">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Meet Our Support Team
          </h2>
          <p className="section-subtitle">
            Our dedicated team is here to ensure a seamless experience for all our partners. We're passionate about making a difference, one meal at a time.
          </p>
        </div>
        <div className="info-grid">
          {team.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <div className="support-page-wrapper">
      <SupportStyles />
      <main>
        <HeroSection />
        <FeaturesSection />
        <IntegritySection />
        <MutualSupportSection />
        <TeamSection />
      </main>
    </div>
  );
}