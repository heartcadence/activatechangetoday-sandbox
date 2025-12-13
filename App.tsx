import React, { useState } from 'react';
import Credentials from './Credentials';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState<'idle' | 'submitted'>('idle');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitted');
  };

  return (
    <>
      {/* HEADER */}
      <header id="header" className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="#home" className="flex items-center gap-2 text-xl lg:text-2xl font-serif text-primary-dark font-bold">
            <span>Activate Change Today</span>
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="nav-link text-secondary hover:text-primary-dark duration-200">Home</a>
            <a href="#about" className="nav-link text-secondary hover:text-primary-dark duration-200">About</a>
            <a href="#services" className="nav-link text-secondary hover:text-primary-dark duration-200">Services</a>
            <a href="#faq" className="nav-link text-secondary hover:text-primary-dark duration-200">FAQ</a>
          </nav>
          <a href="#contact" className="hidden lg:inline-block bg-accent text-white font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300">
            Book a Session
          </a>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-dark focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Open menu</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white shadow-lg">
            <div className="pt-2 pb-3 space-y-1 sm:px-3 px-2">
              <a href="#home" className="mobile-nav-link block py-2 px-3 text-secondary border-b border-gray-100 hover:bg-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="mobile-nav-link block py-2 px-3 text-secondary border-b border-gray-100 hover:bg-slate-50" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#services" className="mobile-nav-link block py-2 px-3 text-secondary border-b border-gray-100 hover:bg-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#faq" className="mobile-nav-link block py-2 px-3 text-secondary border-b border-gray-100 hover:bg-slate-50" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              <a href="#contact" className="mobile-nav-link block w-full text-left bg-accent text-white font-bold mt-2 py-2 px-3 rounded-md hover:bg-amber-600 transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                Book a Session
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HOME SECTION */}
        <section id="home">
          {/* Hero Section */}
          <div className="bg-primary-light overflow-hidden">
            <div className="container mx-auto px-4 py-12 lg:py-32 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-full">
              <div className="text-left z-10 order-1 lg:order-none w-full min-w-0">
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-serif font-bold text-primary-dark leading-tight break-words w-full">
                  Unlock the Confident, Powerful You.
                </h1>
                <p className="mt-4 lg:mt-6 text-base lg:text-lg text-secondary max-w-xl lg:mx-0 break-words">
                  It's time to move past self-doubt and step into your power. Whether you're navigating a life change, climbing the corporate ladder, or building your empire, I'm here to help you build the unshakable confidence to thrive.
                </p>
                <a href="#contact" className="mt-6 lg:mt-8 inline-block bg-accent text-white font-bold py-3 px-8 lg:py-4 lg:px-10 rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-lg text-base lg:text-lg w-full sm:w-auto text-center">
                  Book a Free 30-Min Session
                </a>
              </div>
              <div className="relative order-2 lg:order-none w-full min-w-0">
                <div className="relative w-full max-w-xl lg:max-w-none mx-auto overflow-hidden rounded-lg shadow-2xl scroller-fade">
                  <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                    {[
                      "https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0",
                      "https://picsum.photos/id/65/800/600",
                      "https://picsum.photos/id/177/800/600",
                      "https://picsum.photos/id/200/800/600",
                      "https://picsum.photos/id/326/800/600",
                      "https://picsum.photos/id/367/800/600",
                      "https://picsum.photos/id/433/800/600",
                      // duplicates for scroll
                      "https://picsum.photos/id/43/800/600",
                      "https://picsum.photos/id/65/800/600",
                      "https://picsum.photos/id/177/800/600",
                      "https://picsum.photos/id/200/800/600",
                      "https://picsum.photos/id/326/800/600",
                      "https://picsum.photos/id/367/800/600",
                      "https://picsum.photos/id/433/800/600"
                    ].map((src, i) => (
                      <img key={i} src={src} alt="Confidence coaching visual" className="w-64 h-80 lg:w-80 lg:h-96 object-cover rounded-md shadow-lg mr-4 lg:mr-6" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10 lg:mb-12">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-dark">How I Can Help You</h2>
                <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">I specialize in helping women just like you overcome unique challenges and build lasting confidence in all areas of life.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><title>Home Life Icon</title><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></div>
                  <h3 className="text-2xl font-bold font-serif text-primary-dark mb-3">Reclaiming Your Power</h3>
                  <p className="text-secondary">Navigate life's major transitions like divorce, loss, or financial strain with renewed strength and a clear sense of self.</p>
                  <a href="#services" className="inline-block mt-6 text-primary font-semibold hover:text-primary-dark transition">Learn More &rarr;</a>
                </div>
                <div className="bg-slate-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><title>Corporate Career Icon</title><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                  <h3 className="text-2xl font-bold font-serif text-primary-dark mb-3">Thriving in Your Corporate Career</h3>
                  <p className="text-secondary">Break through barriers, command respect, and achieve the recognition you deserve in the professional world.</p>
                  <a href="#services" className="inline-block mt-6 text-primary font-semibold hover:text-primary-dark transition">Learn More &rarr;</a>
                </div>
                <div className="bg-slate-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><title>Entrepreneurship Icon</title><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                  <h3 className="text-2xl font-bold font-serif text-primary-dark mb-3">Leading with Edge as an Entrepreneur</h3>
                  <p className="text-secondary">Sharpen your leadership skills, overcome business hurdles, and scale your vision with unwavering confidence.</p>
                  <a href="#services" className="inline-block mt-6 text-primary font-semibold hover:text-primary-dark transition">Learn More &rarr;</a>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-16 lg:py-20 bg-primary-light">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10 lg:mb-12">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-dark">What My Clients Are Saying</h2>
                <p className="mt-4 text-lg text-secondary">Real stories from women who have transformed their lives.</p>
              </div>
              <div className="relative max-w-6xl mx-auto overflow-hidden scroller-fade">
                <div className="flex w-max animate-scroll-slow hover:[animation-play-state:paused]">
                  {[
                    { name: "Sarah L.", role: "Recently Divorced", img: "https://picsum.photos/id/1027/200/200", quote: "Working with her was life-changing. I rediscovered my strength after my divorce and now feel more in control and optimistic about my future than ever before." },
                    { name: "Jennifer M.", role: "Corporate Manager", img: "https://picsum.photos/id/1011/200/200", quote: "I was consistently overlooked for promotions. This coaching helped me find my voice, assert my value, and finally get the recognition and respect I deserve at work." },
                    { name: "Emily R.", role: "Business Owner", img: "https://picsum.photos/id/1012/200/200", quote: "As an entrepreneur, I struggled with imposter syndrome. I now have the confidence to lead my team, make bold decisions, and grow my business with conviction." },
                    { name: "Maria K.", role: "Marketing Director", img: "https://picsum.photos/id/1025/200/200", quote: "Sophie's coaching was instrumental in helping me develop my executive presence. I now lead meetings with confidence and have a clearer path for my career growth." },
                    { name: "Jessica P.", role: "Return-to-Work Mom", img: "https://picsum.photos/id/1028/200/200", quote: "After a 5-year career break, my confidence was at an all-time low. Sophie helped me recognize my skills and translate them into a new career. I felt supported and understood." },
                    { name: "Chloe T.", role: "Graphic Designer", img: "https://picsum.photos/id/1014/200/200", quote: "As a creative, self-doubt can be crippling. This coaching gave me practical tools to overcome creative blocks and value my work, which has directly led to better clients." },
                    // Repeated for scrolling
                    { name: "Linda H.", role: "Senior Executive", img: "https://picsum.photos/id/1006/200/200", quote: "I needed to refine my leadership style. Sophie's guidance was insightful and direct, helping me to communicate more effectively and inspire my team during a critical transition." }
                  ].map((t, i) => (
                    <div key={i} className="w-80 md:w-96 flex-shrink-0 px-4">
                      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg h-full flex flex-col min-h-[280px]">
                        <p className="text-secondary italic flex-grow">"{t.quote}"</p>
                        <div className="flex items-center mt-6">
                          <img src={t.img} alt={`Profile of ${t.name}`} className="w-14 h-14 rounded-full mr-4 object-cover" />
                          <div>
                            <p className="font-bold text-primary-dark">{t.name}</p>
                            <p className="text-sm text-slate-500">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="bg-white py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl lg:text-5xl font-serif font-bold text-primary-dark">My Journey to Empowering Women</h1>
              <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">A little about me and why I'm so passionate about this work.</p>
            </div>
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2 order-1 lg:order-none">
                <img src="https://pub-ea9f7e7fb75a4e829aa21b42018bbe1c.r2.dev/sa1.jpg" alt="Sophie Ashley" className="rounded-lg shadow-2xl object-cover w-full h-full aspect-[3/4]" />
              </div>
              <div className="lg:col-span-3 text-center lg:text-left order-2 lg:order-none">
                <h2 className="text-2xl lg:text-3xl font-serif text-primary-dark mb-4">Hello, I'm Sophie Ashley.</h2>
                <div className="space-y-4 text-secondary text-base leading-relaxed">
                  <p>I know what it’s like to feel stuck. For years, I navigated the demanding corporate world, feeling undervalued and unheard. I've also witnessed the silent struggles of friends and family rebuilding their lives after profound personal changes. I saw brilliant, capable women dim their own light because they'd lost touch with their inner strength.</p>
                  <p>My own journey of rediscovering my confidence wasn't a straight line. It was filled with challenges, learning, and ultimately, a profound transformation. This experience ignited a passion in me: to create the support system I wish I'd had. I decided to channel my experiences and professional training into a career dedicated to helping other women find their voice, own their worth, and lead lives of purpose and fulfillment.</p>
                  <p>As a certified coach, my approach is built on a foundation of empathy, trust, and proven strategies. I don’t offer one-size-fits-all solutions. Instead, I partner with you to uncover your unique strengths, dismantle the beliefs holding you back, and create a clear, actionable path toward the confident life you deserve.</p>
                </div>
              </div>
            </div>

            {/* ISOLATED CREDENTIALS COMPONENT */}
            <Credentials />
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-16 sm:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl lg:text-5xl font-serif font-bold text-primary-dark">Your Path to Confidence</h1>
              <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">Tailored coaching packages designed to meet you where you are and guide you to where you want to be. Each program is a partnership to unlock your potential.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Service Cards */}
              <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col h-full border-t-4 border-primary">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-light p-3 rounded-full mr-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><title>Home Life Icon</title><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></div>
                  <div><h3 className="text-xl lg:text-2xl font-serif font-bold text-primary-dark">Reclaiming Your Power at Home</h3></div>
                </div>
                <p className="text-secondary mb-6">Navigate life's major transitions like divorce, loss, or financial strain with renewed strength and a clear sense of self.</p>
                <div className="space-y-4 mb-8 flex-grow">
                  {["Rebuilding self-esteem after a major life event.", "Developing resilience and coping strategies.", "Setting healthy boundaries with family.", "Creating a vision for your new chapter.", "Rediscovering personal joy and purpose."].map((item, i) => (
                    <div key={i} className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><title>Checkmark</title><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg><span className="ml-3 text-secondary">{item}</span></div>
                  ))}
                </div>
                <a href="#contact" className="mt-auto w-full text-center bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300">Start Your Transformation</a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col h-full border-t-4 border-primary">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-light p-3 rounded-full mr-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><title>Corporate Career Icon</title><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
                  <div><h3 className="text-xl lg:text-2xl font-serif font-bold text-primary-dark">Thriving in Your Corporate Career</h3></div>
                </div>
                <p className="text-secondary mb-6">Break through barriers, command respect, and achieve the recognition you deserve in the professional world.</p>
                <div className="space-y-4 mb-8 flex-grow">
                   {["Developing executive presence and assertive communication.", "Overcoming imposter syndrome and self-doubt.", "Navigating workplace politics with confidence.", "Strategizing for promotions and leadership roles.", "Building a powerful professional network."].map((item, i) => (
                    <div key={i} className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><title>Checkmark</title><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg><span className="ml-3 text-secondary">{item}</span></div>
                  ))}
                </div>
                <a href="#contact" className="mt-auto w-full text-center bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300">Start Your Transformation</a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col h-full border-t-4 border-primary">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-light p-3 rounded-full mr-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><title>Entrepreneurship Icon</title><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
                  <div><h3 className="text-xl lg:text-2xl font-serif font-bold text-primary-dark">Leading with Edge as an Entrepreneur</h3></div>
                </div>
                <p className="text-secondary mb-6">Sharpen your leadership skills, overcome business hurdles, and scale your vision with unwavering confidence.</p>
                <div className="space-y-4 mb-8 flex-grow">
                   {["Cultivating a resilient and decisive leadership mindset.", "Mastering confident sales and negotiation techniques.", "Inspiring and leading your team effectively.", "Managing stress and preventing burnout.", "Embracing risk and making bold business moves."].map((item, i) => (
                    <div key={i} className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><title>Checkmark</title><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg><span className="ml-3 text-secondary">{item}</span></div>
                  ))}
                </div>
                <a href="#contact" className="mt-auto w-full text-center bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300">Start Your Transformation</a>
              </div>
            </div>
            <div className="mt-20 text-center bg-primary-light p-8 lg:p-10 rounded-lg">
              <h2 className="text-2xl lg:text-3xl font-serif text-primary-dark mb-4">Ready to Begin?</h2>
              <p className="text-secondary text-base lg:text-lg max-w-3xl mx-auto mb-6">The first step is a simple conversation. Let's explore your goals and see how we can work together.</p>
              <a href="#contact" className="inline-block bg-accent text-white font-bold py-3 px-8 lg:py-4 lg:px-10 rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-lg text-lg">Book Your Free 30-Min Session</a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl lg:text-5xl font-serif font-bold text-primary-dark">Frequently Asked Questions</h1>
              <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">Find answers to common questions about confidence coaching and how it works.</p>
            </div>
            <div id="faq-accordion" className="max-w-4xl mx-auto bg-slate-50 rounded-lg shadow-md overflow-hidden">
              {[
                { q: "Who is confidence coaching for?", a: "Confidence coaching is for any woman who feels she's not living up to her full potential due to self-doubt, past experiences, or challenging life transitions. Whether you're navigating changes at home, striving for more in your career, or leading a business, this coaching provides the tools to build unshakeable self-belief." },
                { q: "What can I expect from a coaching session?", a: "Our sessions are a safe, confidential space for you to explore your challenges and aspirations. We'll work together to identify limiting beliefs, set meaningful goals, and develop practical strategies. Expect empathetic listening, powerful questions, and actionable steps to move you forward. It's a collaborative partnership focused entirely on your growth." },
                { q: "How is coaching different from therapy?", a: "While both are valuable, therapy often focuses on healing past trauma and treating clinical conditions. Coaching is forward-focused, centered on setting and achieving future goals. We work on closing the gap between where you are now and where you want to be, empowering you to create the life you desire." },
                { q: "How long does the coaching process take?", a: "The duration varies for each individual. Most clients experience significant shifts within a 3-month period. We offer different packages to suit your needs, and progress is often noticeable after just a few sessions. The goal is to equip you with sustainable skills, not to create long-term dependency." },
                { q: "Is there a free consultation?", a: "Absolutely. I offer a complimentary 30-minute discovery session. This is a chance for us to connect, discuss your goals, and see if we're a good fit for each other. There's no obligation, just an open conversation to explore the possibilities." }
              ].map((item, index) => (
                <div key={index} className="border-b border-slate-200">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
                    aria-expanded={activeFaq === index}
                  >
                    <h3 className="text-lg font-semibold text-primary-dark">{item.q}</h3>
                    <svg
                      className={`w-6 h-6 text-primary transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className="px-6 pb-5 text-secondary"><p>{item.a}</p></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-serif text-primary-dark mb-4">Still have questions?</h2>
              <p className="text-secondary text-lg max-w-xl mx-auto mb-6">I'd love to hear from you. Reach out, and let's start a conversation.</p>
              <a href="#contact" className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-lg">Contact Me Directly</a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-primary-dark text-white">
        <section id="contact" className="container mx-auto py-12 px-4 flex justify-center">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-2xl">
            {formState === 'idle' ? (
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-primary-dark text-center mb-2">Get In Touch</h3>
                <p className="text-center text-secondary mb-6">Have a question or want to book a session? Send me a message!</p>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition text-gray-800 bg-white" />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your Email" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition text-gray-800 bg-white" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input type="tel" name="phone" id="phone" placeholder="Your Phone Number" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition text-gray-800 bg-white" />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea name="message" id="message" rows={4} placeholder="Your Message" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition text-gray-800 bg-white"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300">Send Message</button>
                </form>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary-dark">Thank You!</h3>
                <p className="text-secondary mt-2">Your message has been sent. I will get back to you shortly.</p>
                <button onClick={() => setFormState('idle')} className="mt-6 text-primary font-bold hover:underline">Send Another Message</button>
              </div>
            )}
          </div>
        </section>

        <div className="container mx-auto px-4 py-8 border-t border-sky-800 flex flex-col md:flex-row justify-between items-center text-sm text-sky-200">
          <div className="mb-4 md:mb-0">
            &copy; 2025 Activate Change Today. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}