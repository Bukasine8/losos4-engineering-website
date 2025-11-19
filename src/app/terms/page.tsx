export default function TermsAndConditions() {
  return (
    <main className="bg-background-light dark:bg-background-dark font-display text-text-primary-light dark:text-text-primary-dark min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center">
            <div className="flex w-full max-w-7xl flex-1">
              {/* SideNavBar */}
              <aside className="sticky top-0 flex h-screen w-full max-w-xs flex-col border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 py-8">
                <div className="flex items-center gap-3 text-text-primary-light dark:text-text-primary-dark mb-10">
                  <div className="size-8 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold tracking-[-0.015em]">Apex Engineering</h2>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <h1 className="text-lg font-medium leading-normal text-text-primary-light dark:text-text-primary-dark">Terms &amp; Conditions</h1>
                    <p className="font-mono text-xs font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">Last Updated: 2024-10-26</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <a className="flex items-center gap-3 rounded px-3 py-2 bg-primary/20 text-primary" href="#introduction">
                      <span className="material-symbols-outlined">info</span>
                      <p className="text-sm font-medium leading-normal">1. Introduction</p>
                    </a>
                    <a className="flex items-center gap-3 rounded px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-200" href="#definitions">
                      <span className="material-symbols-outlined">book</span>
                      <p className="text-sm font-medium leading-normal">2. Definitions</p>
                    </a>
                    <a className="flex items-center gap-3 rounded px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-200" href="#obligations">
                      <span className="material-symbols-outlined">person</span>
                      <p className="text-sm font-medium leading-normal">3. User Obligations</p>
                    </a>
                    <a className="flex items-center gap-3 rounded px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-200" href="#intellectual-property">
                      <span className="material-symbols-outlined">shield</span>
                      <p className="text-sm font-medium leading-normal">4. Intellectual Property</p>
                    </a>
                    <a className="flex items-center gap-3 rounded px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-200" href="#disclaimers">
                      <span className="material-symbols-outlined">error</span>
                      <p className="text-sm font-medium leading-normal">5. Disclaimers</p>
                    </a>
                    <a className="flex items-center gap-3 rounded px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-200" href="#termination">
                      <span className="material-symbols-outlined">power_off</span>
                      <p className="text-sm font-medium leading-normal">6. Termination</p>
                    </a>
                    <a className="flex items-center gap-3 rounded px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-200" href="#governing-law">
                      <span className="material-symbols-outlined">gavel</span>
                      <p className="text-sm font-medium leading-normal">7. Governing Law</p>
                    </a>
                    <a className="flex items-center gap-3 rounded px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-200" href="#contact">
                      <span className="material-symbols-outlined">mail</span>
                      <p className="text-sm font-medium leading-normal">8. Contact Information</p>
                    </a>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <main className="flex-1 overflow-y-auto px-16 py-12">
                <div className="mx-auto max-w-3xl">
                  {/* PageHeading */}
                  <div className="flex flex-col gap-3 pb-8">
                    <p className="text-4xl font-bold leading-tight tracking-tighter text-text-primary-light dark:text-text-primary-dark">Terms &amp; Conditions</p>
                    <p className="text-base font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">Please read these terms and conditions carefully before using our services. Your access to and use of the service is conditioned on your acceptance of and compliance with these terms.</p>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-10">
                    <section id="introduction">
                      <h2 className="text-[22px] font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark pb-3 pt-5 border-b border-border-light dark:border-border-dark">1. Introduction</h2>
                      <p className="pt-4 text-base font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                        Welcome to Apex Engineering. These Terms and Conditions outline the rules and regulations for the use of Apex Engineering's Website and Services, located at apexengineering.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use Apex Engineering if you do not agree to all of the terms and conditions stated on this page.
                      </p>
                    </section>

                    <hr className="border-border-light dark:border-border-dark"/>

                    <section id="definitions">
                      <h2 className="text-[22px] font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark pb-3 pt-5">2. Definitions</h2>
                      <p className="pt-4 text-base font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                        The following terminology applies to these Terms and Conditions: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.
                      </p>
                    </section>

                    <hr className="border-border-light dark:border-border-dark"/>

                    <section id="obligations">
                      <h2 className="text-[22px] font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark pb-3 pt-5">3. User Obligations</h2>
                      <p className="pt-4 text-base font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                        You are responsible for your own communications and for any consequences thereof. You agree to use the Service only to send and receive messages and material that are legal, proper and related to the particular Service.
                      </p>
                      <blockquote className="mt-6 border-l-2 border-primary bg-primary/10 p-4 text-text-secondary-light dark:text-text-secondary-dark italic">
                        "Users must not use the services for any unlawful purpose or to solicit the performance of any illegal activity or other activity which infringes the rights of Apex Engineering or others."
                      </blockquote>
                    </section>

                    <hr className="border-border-light dark:border-border-dark"/>

                    <section id="intellectual-property">
                      <h2 className="text-[22px] font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark pb-3 pt-5">4. Intellectual Property</h2>
                      <p className="pt-4 text-base font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                        The Service and its original content, features, and functionality are and will remain the exclusive property of Apex Engineering and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Apex Engineering.
                      </p>
                    </section>

                    <hr className="border-border-light dark:border-border-dark"/>

                    <section id="disclaimers">
                      <h2 className="text-[22px] font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark pb-3 pt-5">5. Disclaimers</h2>
                      <p className="pt-4 text-base font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                        The information provided by Apex Engineering on our website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                      </p>
                    </section>

                    <hr className="border-border-light dark:border-border-dark"/>

                    <section id="termination">
                      <h2 className="text-[22px] font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark pb-3 pt-5">6. Termination</h2>
                      <p className="pt-4 text-base font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                        We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.
                      </p>
                    </section>

                    <hr className="border-border-light dark:border-border-dark"/>

                    <section id="governing-law">
                      <h2 className="text-[22px] font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark pb-3 pt-5">7. Governing Law</h2>
                      <p className="pt-4 text-base font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                        These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Apex Engineering is established, without regard to its conflict of law provisions.
                      </p>
                    </section>

                    <hr className="border-border-light dark:border-border-dark"/>

                    <section id="contact">
                      <h2 className="text-[22px] font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark pb-3 pt-5">8. Contact Information</h2>
                      <p className="pt-4 text-base font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                        If you have any questions about these Terms, please contact us at <a className="text-primary hover:underline" href="mailto:legal@apexengineering.com">legal@apexengineering.com</a>.
                      </p>
                    </section>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-12 flex flex-wrap items-center justify-end gap-4 border-t border-border-light dark:border-border-dark pt-8">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-transparent border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200">
                      <span className="truncate">Download PDF</span>
                    </button>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-opacity duration-200">
                      <span className="truncate">I Agree</span>
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
