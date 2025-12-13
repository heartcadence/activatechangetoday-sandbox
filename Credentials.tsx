import React from 'react';

export default function Credentials() {
  const credentials = [
    {
      title: "Rapid Transformational Practitioner",
      subtitle: "Certified Practitioner",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Health and Sports Therapist",
      subtitle: "Therapy & Rehabilitation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Trauma Informed Coach",
      subtitle: "Safe & Supportive Coaching",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Emotionally Focused Therapist",
      subtitle: "Level 2 Certified",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Nutrition Coach PN1",
      subtitle: "Precision Nutrition",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        </svg>
      )
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl lg:text-4xl font-serif font-bold text-primary-dark relative inline-block">
          My Credentials
        </h3>
        <p className="mt-4 text-secondary text-lg">Committed to professional excellence and continuous learning.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {credentials.map((item, idx) => (
          <div key={idx} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] bg-white p-6 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.12)] border-t-4 border-primary transition-all duration-300 hover:-translate-y-1 flex items-start gap-4">
            <div className="bg-sky-50 p-3 rounded-lg text-primary-dark mt-1">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-primary-dark text-lg mb-1">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}