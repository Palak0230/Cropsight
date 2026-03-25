'use client';

import { useEffect, useRef } from 'react';
import PhotoUploadButton from './components/PhotoUploadButton';
import MSPTable from './components/MSPTable';
import InteractiveBackground from './components/InteractiveBackground';

export default function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-green-50 via-white to-transparent relative overflow-hidden">
          <InteractiveBackground />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div ref={(el) => (sectionsRef.current[0] = el)} className="opacity-0">
              <h1 className="text-6xl md:text-8xl font-extrabold text-primary mb-8 tracking-tight">
                CROPSIGHT
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Snap. Diagnose. Protect.
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
                AI-powered crop disease detection for modern agriculture. 
                Upload a photo and get instant diagnosis with treatment recommendations.
              </p>
            </div>
            
            <div ref={(el) => (sectionsRef.current[1] = el)} className="opacity-0">
              <PhotoUploadButton />
            </div>
          </div>
        </section>

        {/* Crop Management Preview Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div ref={(el) => (sectionsRef.current[2] = el)} className="opacity-0">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                  Crop Management Dashboard
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Crop Health Card */}
                  <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-100">
                    <p className="text-gray-600 text-sm mb-2">Crop Health</p>
                    <p className="text-4xl font-bold text-primary">Good</p>
                  </div>
                  
                  {/* Weather Card */}
                  <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-100">
                    <p className="text-gray-600 text-sm mb-2">Weather</p>
                    <p className="text-4xl font-bold text-blue-600">28°C Sunny</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="/scan"
                    className="block w-full py-4 bg-primary text-white rounded-xl font-bold text-lg text-center hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    New Scan
                  </a>
                  
                  <a 
                    href="/scan/history"
                    className="block w-full py-4 bg-white text-gray-700 rounded-xl font-semibold text-lg text-center border-2 border-gray-200 hover:border-primary hover:text-primary transition-all"
                  >
                    View History
                  </a>
                  
                  <a 
                    href="/msp"
                    className="block w-full py-4 bg-white text-gray-700 rounded-xl font-semibold text-lg text-center border-2 border-gray-200 hover:border-primary hover:text-primary transition-all"
                  >
                    Check Prices
                  </a>
                </div>

                <div className="mt-8 text-center">
                  <a 
                    href="/crop-management"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-all"
                  >
                    Open Full Dashboard
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MSP Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div ref={(el) => (sectionsRef.current[3] = el)} className="opacity-0">
              <MSPTable />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div ref={(el) => (sectionsRef.current[4] = el)} className="opacity-0 text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Farmers Trust Cropsight
              </h2>
              <p className="text-gray-600 text-lg">
                Empowering Indian farmers with cutting-edge technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  ),
                  title: 'Instant Detection',
                  desc: 'Get disease diagnosis in seconds with our advanced AI model trained on thousands of crop images',
                  gradient: 'from-green-50 to-white'
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                  title: 'Expert Advice',
                  desc: 'Receive treatment recommendations from agricultural experts and proven solutions',
                  gradient: 'from-blue-50 to-white'
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                  title: 'Live MSP Rates',
                  desc: 'Stay updated with current minimum support prices and market trends for better planning',
                  gradient: 'from-amber-50 to-white'
                }
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  ref={(el) => (sectionsRef.current[5 + idx] = el)}
                  className={`opacity-0 bg-gradient-to-br ${feature.gradient} p-8 rounded-2xl shadow-md hover-lift`}
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNHYyYzAgMi0yIDQtMiA0cy0yLTItMi00di0yem0wLTMwYzAtMiAyLTQgMi00czIgMiAyIDR2MmMwIDItMiA0LTIgNHMtMi0yLTItNFY0eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '10K+', label: 'Active Farmers' },
                { number: '50K+', label: 'Scans Completed' },
                { number: '95%', label: 'Accuracy Rate' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  ref={(el) => (sectionsRef.current[8 + idx] = el)}
                  className="opacity-0"
                >
                  <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
          <div ref={(el) => (sectionsRef.current[12] = el)} className="max-w-4xl mx-auto text-center opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Protect Your Crops?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join thousands of farmers already using Cropsight to safeguard their harvests
            </p>
            <a 
              href="/signup"
              className="inline-block px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              Get Started Free
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
