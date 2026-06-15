import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, FooterSection } from '../home/components';

export default function Terms() {
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
              Terms of Service
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
                <a href="#acceptance" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">1. Acceptance of Terms</a>
                <a href="#service-desc" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">2. Service Description</a>
                <a href="#accounts" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">3. Accounts & Waitlist</a>
                <a href="#privacy-ref" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">4. Privacy & Consent</a>
                <a href="#prohibited" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">5. Prohibited Conduct</a>
                <a href="#liability" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">6. Limitation of Liability</a>
                <a href="#availability" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">7. Service Availability</a>
                <a href="#governing-law" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">8. Governing Law</a>
                <a href="#changes" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">9. Changes to Terms</a>
                <a href="#contact" className="block text-sm text-foreground-700 hover:text-primary-600 font-medium transition">10. Contact</a>
              </div>
            </aside>

            {/* Document contents */}
            <div className="lg:col-span-8 space-y-10 text-foreground-700 leading-relaxed text-base">
              <p className="text-lg text-foreground-800 font-medium">
                Welcome to formiq. These Terms of Service ("Terms") govern your use of the formiq website and mobile application (the "Service"). By signing up for our waitlist, registering an account, or accessing the Service, you agree to comply with and be bound by these Terms.
              </p>

              {/* Section 1 */}
              <section id="acceptance" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">1. Acceptance of Terms</h2>
                <p className="text-sm">
                  By accessing or using our Service, you confirm that you are at least 18 years of age and possess the legal authority to enter into this agreement. If you do not agree to all of these Terms, you must not access or use the Service.
                </p>
              </section>

              {/* Section 2 */}
              <section id="service-desc" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">2. Description of Service</h2>
                <p className="text-sm">
                  formiq provides an on-device, real-time AI gym coach designed to monitor your exercise sets, track form angles, and speak coaching tips. During the active beta phase, parts of the Service are offered conditionally and may evolve rapidly.
                </p>
              </section>

              {/* Section 3 */}
              <section id="accounts" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">3. Waitlist & Accounts</h2>
                <p className="text-sm">
                  To participate in the waitlist or register an account, you must provide a valid email address and correct information. You are responsible for keeping your login credentials secure and for any activity that occurs under your account.
                </p>
              </section>

              {/* Section 4 */}
              <section id="privacy-ref" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">4. Privacy & Consent</h2>
                <p className="text-sm">
                  Your privacy is highly important. Our collection and use of camera feeds, microphones, and other session telemetry are governed strictly by our <Link to="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>. By agreeing to these Terms, you consent to our data processing practices as described in that policy.
                </p>
              </section>

              {/* Section 5 */}
              <section id="prohibited" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">5. Prohibited Conduct</h2>
                <p className="text-sm">
                  You agree not to reverse engineer, decompile, or copy any software associated with the Service. You must not attempt to breach security measures, scrape website content, or bypass usage restrictions.
                </p>
              </section>

              {/* Section 6 */}
              <section id="liability" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">6. Limitation of Liability</h2>
                <p className="text-sm">
                  To the maximum extent permitted by law, formiq, its founders, and affiliates shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the Service. We are not responsible for any personal injuries, medical conditions, or inaccuracies in the AI coaching analysis.
                </p>
                <div className="bg-primary-50/50 border border-primary-100 rounded-2xl p-4 text-sm font-semibold">
                  ⚠️ Our total liability to you shall not exceed the amount you paid us in the 12 months preceding the claim.
                </div>
              </section>

              {/* Section 7 */}
              <section id="availability" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">7. Service Availability</h2>
                <p className="text-sm">
                  We aim to provide a reliable service but do not guarantee 100% uptime. We reserve the right to modify, suspend, or discontinue the Service with reasonable notice. During beta, the Service is provided "as is" and may be subject to changes.
                </p>
              </section>

              {/* Section 8 */}
              <section id="governing-law" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">8. Governing Law</h2>
                <p className="text-sm">
                  These Terms are governed by applicable law. Any disputes shall be resolved through good faith negotiation first. If unresolved, disputes shall be subject to the jurisdiction of competent courts.
                </p>
              </section>

              {/* Section 9 */}
              <section id="changes" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">9. Changes to Terms</h2>
                <p className="text-sm">
                  We may update these Terms at any time. We will notify you of material changes via email or in-app notification. Continued use after changes constitutes acceptance.
                </p>
              </section>

              {/* Section 10 */}
              <section id="contact" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-foreground-950">10. Contact</h2>
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
