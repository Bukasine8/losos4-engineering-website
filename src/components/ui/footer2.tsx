"use client"

interface MenuItem {
  title: string
  links: {
    text: string
    url: string
  }[]
}

interface Footer2Props {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  tagline?: string
  menuItems?: MenuItem[]
  copyright?: string
  bottomLinks?: {
    text: string
    url: string
  }[]
}

const Footer2 = ({
  logo = {
    src: "/Logo.svg",
    alt: "Losos Engineering Logo",
    title: "Losos",
    url: "/",
  },
  tagline = "Engineering Solutions Made Simple.",
  menuItems = [
    {
      title: "Services",
      links: [
        { text: "Electrical Engineering", url: "/services/electrical-design" },
        { text: "Mechanical Engineering", url: "/services/mechanical-design" },
        { text: "Civil Engineering", url: "/services/civil-engineering" },
        { text: "Project Management", url: "/services/project-management" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "/about" },
        { text: "Projects", url: "/projects" },
        { text: "Blog", url: "/blog" },
        { text: "Careers", url: "/careers" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Pricing", url: "/pricing" },
        { text: "FAQ", url: "#faq" },
        { text: "Request Quote", url: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", url: "/privacy" },
        { text: "Terms & Conditions", url: "/terms" },
      ],
    },
  ],
  copyright = "© 2025 Losos Engineering. All rights reserved.",
  bottomLinks = [
    { text: "Terms of Service", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy" },
  ],
}: Footer2Props) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 mb-12">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-3 lg:justify-start mb-4">
                <a href={logo.url} className="flex items-center gap-3">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-12 w-12 rounded-full object-contain"
                  />
                  <p className="text-lg font-bold text-gray-900">{logo.title}</p>
                </a>
              </div>
              <p className="mt-4 font-medium text-gray-700">{tagline}</p>
              <p className="mt-3 text-sm text-gray-600">
                Engineering consulting services for electrical, mechanical, and civil projects.
              </p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-gray-900">{section.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-primary transition">
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-200 pt-8 text-sm font-medium text-gray-600 md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-6">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary transition">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  )
}

export { Footer2 }
