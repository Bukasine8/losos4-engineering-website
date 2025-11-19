import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex flex-col flex-1">
      <div className="relative w-full flex justify-center py-16 sm:py-24">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col gap-4 text-center items-center">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em]">Civil Engineering</h1>
            <p className="text-base text-text-secondary-light dark:text-text-secondary-dark max-w-3xl">Structural design, infrastructure, and site development built around sustainable principles.</p>
          </div>
        </div>
      </div>

      <section className="w-full flex justify-center py-12">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-background-light p-6 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2">
              <div className="text-accent-cyan">
                <span className="material-symbols-outlined !text-4xl">apartment</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-800 text-xl font-bold leading-tight">Structural Analysis</h2>
                <p className="text-gray-600 text-sm">Robust structural engineering for buildings and bridges with performance-based design.</p>
              </div>
              <a className="mt-auto flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-accent-cyan" href="#">Learn more <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span></a>
            </div>

            <div className="group flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-background-light p-6 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2">
              <div className="text-accent-cyan">
                <span className="material-symbols-outlined !text-4xl">terrain</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-800 text-xl font-bold leading-tight">Site Development</h2>
                <p className="text-gray-600 text-sm">Site planning, grading, drainage and earthworks coordinated for buildability.</p>
              </div>
              <a className="mt-auto flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-accent-cyan" href="#">Learn more <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span></a>
            </div>

            <div className="group flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-background-light p-6 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2">
              <div className="text-accent-cyan">
                <span className="material-symbols-outlined !text-4xl">account_balance</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-800 text-xl font-bold leading-tight">Infrastructure Projects</h2>
                <p className="text-gray-600 text-sm">Transport, utilities and public works engineered to last and perform.</p>
              </div>
              <a className="mt-auto flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-accent-cyan" href="#">Learn more <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span></a>
            </div>

            <div className="group flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-background-light p-6 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2">
              <div className="text-accent-cyan">
                <span className="material-symbols-outlined !text-4xl">forest</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-800 text-xl font-bold leading-tight">Sustainable Design</h2>
                <p className="text-gray-600 text-sm">Low-impact solutions that reduce carbon and lifecycle costs.</p>
              </div>
              <a className="mt-auto flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-accent-cyan" href="#">Learn more <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span></a>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center py-16">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4">
            <h3 className="text-2xl font-bold">Start your civil project with confidence</h3>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark max-w-2xl">Our civil engineering team will partner with you from feasibility to handover.</p>
            <div className="mt-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white font-bold">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
