export default function PrivacyPolicy() {
  return (
    <main className="w-full bg-background-light dark:bg-background-dark font-display text-text-primary-light dark:text-text-primary-dark">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* SideNavBar */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-28 flex flex-col gap-2">
              <a className="group flex items-center gap-3 px-3 py-2 rounded transition-colors bg-primary/20 dark:bg-primary/20" href="#section-1">
                <span className="w-8 h-px bg-text-primary-light dark:bg-text-primary-dark group-hover:w-16 group-hover:bg-primary transition-all duration-300"></span>
                <p className="text-sm font-bold text-primary">Information We Collect</p>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2 rounded transition-colors hover:bg-primary/10 dark:hover:bg-primary/10" href="#section-2">
                <span className="w-8 h-px bg-text-secondary-light dark:bg-text-secondary-dark group-hover:w-16 group-hover:bg-primary transition-all duration-300"></span>
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark">How We Use Your Info</p>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2 rounded transition-colors hover:bg-primary/10 dark:hover:bg-primary/10" href="#section-3">
                <span className="w-8 h-px bg-text-secondary-light dark:bg-text-secondary-dark group-hover:w-16 group-hover:bg-primary transition-all duration-300"></span>
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark">Data Sharing &amp; Disclosure</p>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2 rounded transition-colors hover:bg-primary/10 dark:hover:bg-primary/10" href="#section-4">
                <span className="w-8 h-px bg-text-secondary-light dark:bg-text-secondary-dark group-hover:w-16 group-hover:bg-primary transition-all duration-300"></span>
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark">Data Security Measures</p>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2 rounded transition-colors hover:bg-primary/10 dark:hover:bg-primary/10" href="#section-5">
                <span className="w-8 h-px bg-text-secondary-light dark:bg-text-secondary-dark group-hover:w-16 group-hover:bg-primary transition-all duration-300"></span>
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark">Cookies &amp; Tracking</p>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2 rounded transition-colors hover:bg-primary/10 dark:hover:bg-primary/10" href="#section-6">
                <span className="w-8 h-px bg-text-secondary-light dark:bg-text-secondary-dark group-hover:w-16 group-hover:bg-primary transition-all duration-300"></span>
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark">Your Rights &amp; Choices</p>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2 rounded transition-colors hover:bg-primary/10 dark:hover:bg-primary/10" href="#section-7">
                <span className="w-8 h-px bg-text-secondary-light dark:bg-text-secondary-dark group-hover:w-16 group-hover:bg-primary transition-all duration-300"></span>
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark">Third-Party Links</p>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2 rounded transition-colors hover:bg-primary/10 dark:hover:bg-primary/10" href="#section-8">
                <span className="w-8 h-px bg-text-secondary-light dark:bg-text-secondary-dark group-hover:w-16 group-hover:bg-primary transition-all duration-300"></span>
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark">Changes to This Policy</p>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2 rounded transition-colors hover:bg-primary/10 dark:hover:bg-primary/10" href="#section-9">
                <span className="w-8 h-px bg-text-secondary-light dark:bg-text-secondary-dark group-hover:w-16 group-hover:bg-primary transition-all duration-300"></span>
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark">Contact Us</p>
              </a>
            </nav>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-9">
            <article className="flex flex-col gap-10">
              {/* PageHeading */}
              <div className="flex flex-col gap-3 pb-6 border-b border-border-light dark:border-border-dark">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Privacy Policy</h1>
                <p className="font-mono text-sm text-text-secondary-light dark:text-text-secondary-dark">Last Updated: October 26, 2023</p>
              </div>

              {/* Introduction */}
              <div className="flex flex-col gap-4 text-base leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                <p>
                  ConsultCo Engineering ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how our firm collects, uses, discloses, and safeguards your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
                <p>
                  We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy.
                </p>
              </div>

              {/* Section 1 */}
              <section className="flex flex-col gap-4 scroll-mt-24" id="section-1">
                <h2 className="text-2xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">1. Information We Collect</h2>
                <div className="space-y-4 text-base leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                  <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</p>
                  <p>Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>
                </div>
              </section>

              <div className="w-full h-px bg-border-light dark:bg-border-dark" />

              {/* Section 2 */}
              <section className="flex flex-col gap-4 scroll-mt-24" id="section-2">
                <h2 className="text-2xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">2. How We Use Your Information</h2>
                <div className="space-y-4 text-base leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                  <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to create and manage your account, email you regarding your account or order, enable user-to-user communications, and process payments and refunds.</p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="flex flex-col gap-4 scroll-mt-24" id="section-3">
                <h2 className="text-2xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">3. Data Sharing &amp; Disclosure</h2>
                <div className="space-y-4 text-base leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                  <p>We may share information we have collected about you in certain situations. Your information may be disclosed to third-party service providers that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. By law or to protect rights, if we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="flex flex-col gap-4 scroll-mt-24" id="section-4">
                <h2 className="text-2xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">4. Data Security Measures</h2>
                <div className="space-y-4 text-base leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                  <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="flex flex-col gap-4 scroll-mt-24" id="section-5">
                <h2 className="text-2xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">5. Cookies &amp; Tracking Technologies</h2>
                <div className="space-y-4 text-base leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                  <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.</p>
                </div>
              </section>

              <div className="w-full h-px bg-border-light dark:bg-border-dark" />

              {/* CTA Block */}
              <section className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-lg bg-background-dark dark:bg-border-dark scroll-mt-24" id="section-9">
                <div className="flex flex-col gap-2 text-center md:text-left">
                  <h3 className="text-xl font-bold text-text-primary-dark">Have Questions About Your Privacy?</h3>
                  <p className="text-base text-text-secondary-dark">Our team is here to help. Reach out with any inquiries regarding our data practices.</p>
                </div>
                <a className="flex-shrink-0 px-6 py-3 rounded text-sm font-bold bg-primary text-background-dark hover:bg-opacity-80 transition-colors" href="#">Contact Privacy Team</a>
              </section>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}
