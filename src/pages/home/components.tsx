import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../supabase';

// Asset imports (relative to this file)
import heroVideo from '../../../Screenrecorder-2026-06-14-18-24-23-78.mp4';
import heroPoster from '../../../Coaching Screen.png';
import coachingImg from '../../../Coaching Screen.png';
import dashboardImg from '../../../Dashboard.png';
import summaryImg from '../../../Session Summary.png';
import formiqIcon from '../../../formiq icon.png';

// PhoneMockup component
interface PhoneMockupProps {
  imageUrl?: string;
  videoUrl?: string;
  className?: string;
  tilt?: boolean;
  size?: 'lg' | 'sm';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  imageUrl,
  videoUrl,
  className = '',
  tilt = false,
  size = 'lg',
}) => {
  const width = size === 'lg' ? '310px' : '250px';
  const outerStyle = {
    width,
    transform: tilt ? 'perspective(1200px) rotateY(-8deg) rotateX(4deg) rotateZ(2deg)' : undefined,
    transformStyle: 'preserve-3d',
  } as React.CSSProperties;

  return (
    <div
      className={`relative bg-neutral-900 border-[8px] border-neutral-800 rounded-[3rem] p-[3px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.02] ${className}`}
      style={outerStyle}
    >
      {/* Dynamic Island */}
      <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 shadow-inner flex items-center justify-end pr-3">
        {/* Tiny camera lens reflection */}
        <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full border border-neutral-800/40" />
      </div>

      {/* Screen container */}
      <div className="bg-black rounded-[2.3rem] overflow-hidden relative border border-neutral-950 aspect-[9/19]">
        {/* Glass glare effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10" />

        {videoUrl ? (
          <video
            src={videoUrl}
            poster={imageUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover relative z-0"
          />
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt="Phone mockup screen"
            className="w-full h-full object-cover relative z-0"
          />
        ) : null}
      </div>
    </div>
  );
};

// Navbar component
export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleJoinBeta = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu if open
    if (location.pathname !== '/') {
      navigate('/#formiq-waitlist');
    } else {
      const el = document.getElementById('formiq-waitlist');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-50/90 backdrop-blur-md border-b border-background-200 shadow-sm'
          : 'bg-transparent'
      }`}
      style={{ height: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-8 flex flex-row items-center justify-between" style={{ height: '80px' }}>
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center gap-2" style={{ height: '80px', marginLeft: '-16px' }}>
          <img
            src={formiqIcon}
            alt="Formiq Icon"
            className="h-10 w-auto object-contain flex-shrink-0 rounded-xl"
          />
          <span className="text-foreground-950 font-black text-3xl tracking-tight mt-1">formiq</span>
        </Link>

        {/* Desktop Nav links - centered */}
        <nav className="hidden md:flex items-center gap-8" style={{ lineHeight: '80px' }}>
          <Link to="/" className="text-foreground-700 hover:text-primary-600 transition font-medium leading-none">Home</Link>
          <Link to="/privacy" className="text-foreground-700 hover:text-primary-600 transition font-medium leading-none">Privacy Policy</Link>
          <Link to="/terms" className="text-foreground-700 hover:text-primary-600 transition font-medium leading-none">Terms</Link>
        </nav>

        {/* CTA button (Desktop) */}
        <div className="hidden md:flex flex-shrink-0">
          <button
            onClick={handleJoinBeta}
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-xl transition shadow-md hover:shadow-lg cursor-pointer"
          >
            Join Beta
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden flex items-center justify-center text-foreground-900 text-3xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-white border-b border-background-200 shadow-lg px-6 py-6 flex flex-col gap-6 animate-in slide-in-from-top-2 duration-200">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground-800 text-lg font-medium hover:text-primary-600">Home</Link>
          <Link to="/privacy" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground-800 text-lg font-medium hover:text-primary-600">Privacy Policy</Link>
          <Link to="/terms" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground-800 text-lg font-medium hover:text-primary-600">Terms</Link>
          <button
            onClick={handleJoinBeta}
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition shadow-md w-full mt-2"
          >
            Join Beta
          </button>
        </div>
      )}
    </nav>
  );
};

// HeroSection component
export const HeroSection: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setMessage('');

    try {
      if (!supabase) {
        throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
      }
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        throw error;
      }

      setStatus('success');
      setMessage('You’re in! We’ll be in touch soon.');
      setEmail('');
    } catch (err: any) {
      console.error('Waitlist error:', err);
      setStatus('error');
      if (err.code === '23505' || (err.message && err.message.toLowerCase().includes('duplicate'))) {
        setMessage('This email is already on the waitlist!');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <section id="formiq-waitlist" className="min-h-screen pt-32 pb-16 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 lg:px-8 gap-12">
      {/* Left content */}
      <div className="flex-1 space-y-8 max-w-xl text-center lg:text-left">
        <span className="inline-flex items-center gap-1.5 bg-primary-100 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
          Beta coming soon
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground-950 leading-none">
          On-Device Real-Time <span className="text-primary-500">AI Gym Coach</span>
        </h1>
        <p className="text-lg sm:text-xl text-foreground-700 leading-relaxed">
          A conversational AI coach that watches your every rep, talks you through corrections, and keeps your form dialed — all on your phone. No cloud. No lag.
        </p>
        
        <div className="max-w-md mx-auto lg:mx-0">
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 border border-background-200 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm disabled:opacity-50 font-medium text-foreground-950"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-primary-500 text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary-600 transition shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center min-w-[170px]"
            >
              {status === 'loading' ? 'Joining…' : 'Join Global Beta'}
            </button>
          </form>
          {message && (
            <p className={`text-sm mt-3 font-semibold ${status === 'success' ? 'text-green-600' : 'text-red-500'}`}>
              {message}
            </p>
          )}
          <p className="text-sm text-foreground-500 mt-3">
            Limited slots. No spam, ever.
          </p>
        </div>
      </div>
      
      {/* Right mockup */}
      <div className="flex-1 flex justify-center items-center lg:justify-end">
        <PhoneMockup
            videoUrl={heroVideo}
            imageUrl={heroPoster}
            size="sm"
            tilt={true}
          />
      </div>
    </section>
  );
};

// Feature card component
interface FeatureCardProps {
  iconClass: string;
  title: string;
  description: string;
  mockupImg: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconClass, title, description, mockupImg }) => {
  return (
    <div className="bg-background-100/40 border border-background-200/50 rounded-3xl p-8 hover:border-primary-300 transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center">
      <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-2xl text-primary-600 mb-6 shadow-sm">
        <i className={iconClass + " text-3xl"}></i>
      </div>
      <h3 className="text-2xl font-bold text-foreground-950 mb-3">{title}</h3>
      <p className="text-foreground-700 leading-relaxed mb-8 max-w-sm flex-1">{description}</p>
      <div className="w-full flex justify-center items-center mt-auto">
        <PhoneMockup imageUrl={mockupImg} size="sm" />
      </div>
    </div>
  );
};

// FeaturesSection component
export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-background-50 border-t border-background-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground-950 mb-4">
          Real AI coaching, zero barriers
        </h2>
        <p className="text-lg sm:text-xl text-foreground-700 max-w-2xl mx-auto mb-16">
          Three core features that make Formiq unlike any fitness app you’ve used.
        </p>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <FeatureCard
            iconClass="ri-body-scan-line"
            title="Real-Time Joint & Form Tracking"
            description="Computer vision tracks every joint angle and movement path in real time. See exactly where your form breaks down."
            mockupImg={coachingImg}
          />
          <FeatureCard
            iconClass="ri-video-chat-line"
            title="Real-Time Video AI Coaching"
            description="Not just audio — a full video-based conversational coach that watches your form and talks you through every rep in real time. Like having a pro trainer right there."
            mockupImg={dashboardImg}
          />
          <FeatureCard
            iconClass="ri-bar-chart-2-line"
            title="Form Score & Progress Tracking"
            description="Every session gets a form score out of 100. Track your improvement over time, get personalized feedback, and see exactly where you are getting stronger."
            mockupImg={summaryImg}
          />
        </div>
      </div>
    </section>
  );
};

// WhyWeBuiltFormiqSection component
export const WhyWeBuiltFormiqSection: React.FC = () => {
  const cards = [
    {
      icon: "ri-money-dollar-circle-line",
      title: "Quality coaching costs too much",
      desc: "Personal trainers charge $50 to $150 per session. Getting coached every workout adds up fast — most people simply can’t afford consistent professional guidance.",
    },
    {
      icon: "ri-emotion-normal-line",
      title: "Gym anxiety is real",
      desc: "Many people feel self-conscious about their body or intimidated walking into a gym full of strangers. Having a coach stare at your form in public only amplifies that discomfort.",
    },
    {
      icon: "ri-calendar-todo-line",
      title: "Busy schedules don’t wait",
      desc: "Between work, family, and life, coordinating with a coach’s availability is a logistics nightmare. You squeeze in workouts when you can — your coach should be ready when you are.",
    },
    {
      icon: "ri-time-line",
      title: "24/7 coaching, zero scheduling",
      desc: "Formiq is always there — 2 AM session or lunch break, it watches your form and coaches you through every rep. No booking. No waiting. Just open the app and start.",
    },
  ];

  return (
    <section className="py-24 bg-background-100/50 border-t border-background-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground-950 mb-4">
            Why we built Formiq
          </h2>
          <p className="text-lg sm:text-xl text-foreground-700">
            Getting real coaching shouldn’t be this hard. Here’s what pushed us to build something different.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="bg-white border border-background-200/60 p-8 rounded-3xl hover:border-primary-300 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-accent-100 rounded-xl text-accent-600 mb-6 shadow-sm">
                <i className={c.icon + " text-2xl"}></i>
              </div>
              <h3 className="text-xl font-bold text-foreground-950 mb-3">{c.title}</h3>
              <p className="text-foreground-700 leading-relaxed text-sm flex-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FooterSection component
export const FooterSection: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const socials = [
    { href: "https://www.facebook.com/share/1J22tCnHx2/", icon: "ri-facebook-fill" },
    { href: "https://x.com/Formiq_Ai", icon: "ri-twitter-x-fill" },
    { href: "https://www.instagram.com/formiq_ai?igsh=MXM2Y3FkanN5cjJ2ag==", icon: "ri-instagram-line" },
    { href: "https://www.tiktok.com/@formiq_ai?_r=1&_t=ZS-979CUE3zwL1..", icon: "ri-tiktok-fill" },
  ];

  const handleJoinBeta = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#formiq-waitlist');
    } else {
      const el = document.getElementById('formiq-waitlist');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background-100 text-foreground-800 border-t border-background-200">
      {/* Call to action panel */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center border-b border-background-200">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground-950 mb-4">
          Join the waitlist
        </h2>
        <p className="text-foreground-600 text-lg mb-8 max-w-md mx-auto">
          Limited beta slots. Be the first to try Formiq.
        </p>
        <Link
          to="/#formiq-waitlist"
          onClick={handleJoinBeta}
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-xl transition shadow-lg hover:shadow-xl cursor-pointer"
        >
          Get Early Access
        </Link>
      </div>

      {/* Main footer contents */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={formiqIcon} alt="Formiq Icon" className="h-10 w-auto object-contain flex-shrink-0 rounded-xl" />
            <span className="text-foreground-950 font-black text-3xl tracking-tight mt-1">formiq</span>
          </Link>
          <p className="text-xs text-foreground-500 mt-2">
            Privacy first. No data sold. No cloud required.
          </p>
        </div>

        {/* Social handles */}
        <div className="flex items-center gap-4">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white border border-background-200 hover:bg-primary-500 rounded-xl text-foreground-700 hover:text-white transition hover:scale-105 shadow-sm"
            >
              <i className={s.icon + " text-lg"}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom links and copyright */}
      <div className="bg-background-150 py-6 border-t border-background-200/50 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-500">
          <p>© {new Date().getFullYear()} Formiq. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-primary-600 transition">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-primary-600 transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
