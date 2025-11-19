export type Post = {
  slug: string
  title: string
  excerpt?: string
  author?: string
  date?: string
  readTime?: string
  category?: string
  featuredImage?: string
  content: string // HTML
}

export const posts: Post[] = [
  {
    slug: 'sustainable-civil-engineering',
    title: 'The Future of Sustainable Civil Engineering',
    excerpt:
      'A comprehensive analysis of innovative materials and methodologies shaping the next generation of construction projects.',
    author: 'Dr. Evelyn Reed',
    date: '15 August 2024',
    readTime: '8 min read',
    category: 'Civil Engineering',
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFF54p-6rmcPIg95Key6piunI1DzPkgYEnf5rSOuSfd7x91nI3LwLF27OUE2RDg6L3GroKqw7_tFamgBD_gtEnmoYionsbo8pCaqi06qqlFwav4mzJgKlwForHrau9P1gXjAbK7nSy1Plrmvdum7-5UwSeRqp0AtZMhpbiYpioGBpZGJFR3GmzDeHLBtZF1ljS4lEMT3lvdptI54LIqU4d6iQN9GPPSa5b9EaEpqRFtadon8rWB-8Obc22AhcZ7E1UQDxsNhHjdSI',
    content: `
      <p>The discipline of civil engineering stands at a critical juncture. As global populations grow and urbanization accelerates, the demand for infrastructure is at an all-time high. However, the conventional methods of construction are major contributors to carbon emissions and resource depletion. The future, therefore, lies in sustainable civil engineering—a paradigm shift that prioritizes environmental stewardship, social equity, and economic viability.</p>
      <h2>Innovations in Green Materials</h2>
      <p>One of the most significant advancements is the development of sustainable building materials. Traditional concrete, while durable, has a massive carbon footprint. Researchers are pioneering alternatives like:</p>
      <ul>
        <li><strong>Self-Healing Concrete:</strong> Embedded with bacteria that produce limestone, this material can autonomously repair cracks, extending the lifespan of structures and reducing maintenance needs.</li>
        <li><strong>Mass Timber:</strong> Cross-laminated timber (CLT) and other engineered wood products offer a renewable alternative to steel and concrete, sequestering carbon and often reducing construction time.</li>
        <li><strong>Recycled Plastics:</strong> Innovations are enabling the use of recycled plastics in everything from asphalt for roads to building blocks, diverting waste from landfills.</li>
      </ul>
      <figure>
        <img alt="A detailed technical diagram showing the layers of a green roof system." class="rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcLyqWqpR6rlb2gTZl4ps_B8vImx-2zqxWiwsl9jAT6t6k_d-0R-YnHZWH2mjKewAbD3k-Hh-pV9aUPWonEsvY6ZBD6Uwoqpc_kutJ8H9CDKT_A8Cf4qK5i7SBHMrY5Ggg4I3N8Z1StFFeLKxUEG1d2iwtpwrX8J-j_GzB3rUkx_tpTy2WDQi8omMoFQrkAyy0jDCVEDV_GTFjhEi-sJO7mOW7r0XjEo-CzapyP6AcQBC0QXj37zPJo81d4UW0N2ttYjONKCupcWY" />
        <figcaption class="text-center !mt-2 text-sm text-text-muted-light dark:text-text-muted-dark">Technical diagram of a green roof system, illustrating layers for drainage and vegetation.</figcaption>
      </figure>
      <h3>The Role of Digital Twinning and BIM</h3>
      <p>Building Information Modeling (BIM) and digital twin technology are revolutionizing project management. By creating a detailed virtual replica of a project, engineers can simulate construction processes, optimize resource allocation, and predict performance over the building's entire lifecycle. This not only reduces waste during construction but also allows for more efficient operation and maintenance post-completion.</p>
      <blockquote>
        <p>"Sustainability is no longer a choice; it is an imperative. The engineering community has a responsibility to lead the charge in creating a built environment that works in harmony with our planet."</p>
      </blockquote>
      <p>Ultimately, the transition to sustainable civil engineering requires a holistic approach. It's not just about using green materials; it's about rethinking design philosophies, embracing circular economy principles, and leveraging technology to build smarter, more resilient infrastructure for generations to come. The projects of tomorrow will be judged not only by their scale and function but by their positive impact on the world.</p>
    `,
  },
]

export default posts
