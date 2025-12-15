"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Use</h1>
        <p className="text-sm text-gray-400 mb-8">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="space-y-6 text-sm text-gray-300">
          <p>
            These Terms of Use (&quot;Terms&quot;) govern your use of the BlockStudy website and related
            services. By accessing or using the site, you agree to these Terms.
          </p>

          <section>
            <h2 className="text-base font-semibold mb-2 text-white">
              Educational purpose only
            </h2>
            <p>
              BlockStudy provides educational content about blockchain and related technologies.
              Nothing on this site constitutes financial, legal, or investment advice. You are
              responsible for your own decisions.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2 text-white">
              Acceptable use
            </h2>
            <p className="mb-2">
              You agree not to misuse the platform. This includes, for example:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Attempting to disrupt or overload the site</li>
              <li>Reverse‑engineering or copying the platform for resale</li>
              <li>Using the site for unlawful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2 text-white">
              Content and changes
            </h2>
            <p>
              We may update or remove content at any time to keep the platform accurate and helpful.
              We may also update these Terms; continued use of the site after changes means you
              accept the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2 text-white">
              Contact
            </h2>
            <p>
              For questions about these Terms, you can reach us at{" "}
              <span className="text-neon-blue">legal@blockstudy.io</span>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}


