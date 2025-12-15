"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="space-y-6 text-sm text-gray-300">
          <p>
            BlockStudy is an educational platform focused on blockchain and related technologies.
            This privacy policy explains how we collect, use, and protect information when you use
            our website. It is written in clear language and is not intended as legal advice.
          </p>

          <section>
            <h2 className="text-base font-semibold mb-2 text-white">
              Information we collect
            </h2>
            <p className="mb-2">
              We collect minimal information to operate and improve the platform, such as:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Basic usage data (pages visited, features used)</li>
              <li>Information you choose to share in forms (e.g., contact or newsletter)</li>
              <li>Technical data like browser type and device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2 text-white">
              How we use information
            </h2>
            <p className="mb-2">We use this information to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Operate and secure the website</li>
              <li>Understand which content and features are most helpful</li>
              <li>Communicate with you when you request it</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2 text-white">
              Cookies and analytics
            </h2>
            <p>
              BlockStudy may use cookies or similar technologies to remember preferences and
              understand how visitors use the site. Where analytics tools are used, we aim to
              respect privacy‑first settings and avoid unnecessary tracking.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2 text-white">
              Contact
            </h2>
            <p>
              If you have questions about this policy or how your information is handled, you can
              contact us at{" "}
              <span className="text-neon-blue">privacy@blockstudy.io</span>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}


