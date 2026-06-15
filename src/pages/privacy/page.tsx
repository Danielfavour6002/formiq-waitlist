import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, FooterSection } from '../home/components';

export default function PrivacyPolicy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition gap-1.5 mb-8"
          >
            <i className="ri-arrow-left-line"></i>
            Back to Home
          </Link>

          {/* Heading */}
          <div className="border-b border-background-200 pb-8 mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-foreground-400">Legal</span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground-950 mt-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-foreground-500 mt-3">
              Last updated: June 2026 · Effective: June 2026
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar quick links */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 space-y-3 p-6 bg-white border border-background-200/60 rounded-3xl">
                <p className="text-xs font-bold uppercase tracking-wider text-foreground-450 mb-4">Contents</p>
                <a href="#camera-mic" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">📷 Camera & Mic</a>
                <a href="#info-collect" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">1. Information We Collect</a>
                <a href="#info-use" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">2. How We Use Information</a>
                <a href="#third-party" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">3. Third-Party Services</a>
                <a href="#security" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">4. Security & Storage</a>
                <a href="#your-rights" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">5. Your Rights & Choices</a>
                <a href="#contact" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">6. Contact Us</a>
              </div>
            </aside>

            {/* Document contents */}
            <div className="lg:col-span-8 space-y-10 text-foreground-700 leading-relaxed text-base">
              <p className="text-lg text-foreground-800 font-medium">
                formiq ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the formiq app and website (the "Service"). By using our Service, you agree to the terms of this policy.
              </p>

              {/* Callout box: Camera & Mic */}
              <div id="camera-mic" className="bg-primary-50/50 border border-primary-100 rounded-3xl p-6 scroll-mt-28">
                <h3 className="text-lg font-bold text-foreground-950 flex items-center gap-2 mb-2">
                  <span>📷</span> Camera & Microphone
                </h3>
                <p className="text-foreground-700 text-sm">
                  formiq uses your device camera and microphone to provide real-time coaching. Your camera feed is processed in real time and is never stored, recorded, or retained after the session ends. Video frames are sent to Google's Gemini AI for analysis only during the active session. You can revoke these permissions at any time in your device settings.
                </p>
              </div>

              {/* Section 1 */}
              <section id="info-collect" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">1. Information We Collect</h2>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground-900 text-sm uppercase tracking-wide">Information You Provide</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>First name (to personalise your coaching experience)</li>
                    <li>Email address (when joining the waitlist or creating an account)</li>
                    <li>Approximate weight range (used only for calorie estimates)</li>
                    <li>Fitness goals and exercise preferences</li>
                  </ul>
                </div>

                <div className="space-y-3 mt-4">
                  <h4 className="font-bold text-foreground-900 text-sm uppercase tracking-wide">Session Data We Generate</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>Exercise type, duration, and set count</li>
                    <li>Form score (a numerical score — not video)</li>
                    <li>AI coaching summary (text only)</li>
                    <li>Calorie estimate (calculated from exercise type and weight range)</li>
                    <li>Session timestamps</li>
                  </ul>
                </div>

                <div className="space-y-3 mt-4">
                  <h4 className="font-bold text-foreground-900 text-sm uppercase tracking-wide">Usage Data</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>Device type and operating system</li>
                    <li>App usage patterns and session frequency</li>
                    <li>Crash reports and error logs</li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section id="info-use" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">2. How We Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>To provide real-time AI coaching and form analysis</li>
                  <li>To generate your form score history and progress tracking</li>
                  <li>To calculate calorie estimates for completed sessions</li>
                  <li>To send session summaries and progress updates</li>
                  <li>To notify you about product updates and your waitlist status</li>
                  <li>To process payments and manage your subscription</li>
                  <li>To improve AI coaching accuracy using anonymised, aggregated data only</li>
                  <li>To comply with legal obligations</li>
                </ul>
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl p-4 text-sm font-semibold mt-4">
                  🛡️ We do not sell your personal information. We do not use your data for advertising.
                </div>
              </section>

              {/* Section 3 */}
              <section id="third-party" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">3. Third-Party Services</h2>
                <p className="text-sm">
                  We share your information only with the following service providers who help us operate and deliver the Service securely:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong>Google Gemini AI:</strong> Processes real-time video frames during your active session to generate coaching feedback. Video data is processed transiently and is not used to train models.</li>
                  <li><strong>Supabase:</strong> Securely hosts waitlist entries, database systems, and user registration details.</li>
                  <li><strong>Vercel:</strong> Hosts our web application infrastructure.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="security" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">4. Security & Data Storage</h2>
                <p className="text-sm">
                  We implement industry-standard encryption protocols (SSL/TLS) to protect data in transit and at rest. Waitlist info and session history details are stored securely. As our AI analysis runs with on-device capabilities combined with secure transient API calls, your private workout videos never live on any server.
                </p>
              </section>

              {/* Section 5 */}
              <section id="your-rights" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">5. Your Rights & Choices</h2>
                <p className="text-sm">
                  You have the right to access, correct, or request the deletion of your personal data at any time. You can withdraw camera and microphone permissions via your device settings, or opt out of waitlist emails using the unsubscribe link.
                </p>
              </section>

              {/* Section 6 */}
              <section id="contact" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">6. Contact</h2>
                <div className="bg-white border border-background-200/60 rounded-3xl p-6 space-y-2 text-sm">
                  <p><strong>formiq</strong></p>
                  <p>Support: <a href="mailto:support@formiq.app" className="text-primary-600 hover:underline">support@formiq.app</a></p>
                  <p>Legal: <a href="mailto:legal@formiq.app" className="text-primary-600 hover:underline">legal@formiq.app</a></p>
                  <p>Website: <a href="https://formiq.app" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">formiq.app</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
