import Link from "next/link";
import { notFound } from "next/navigation";
import posts, { Post } from "@/lib/posts";

type Props = {
  params: { slug: string };
};

export default function Page({ params }: Props) {
  // For now we render a static article using the provided HTML structure.
  const post: Post | undefined = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden group/design-root">
        <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-white/10 dark:border-black/10">
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex justify-center">
            <div className="flex items-center justify-between whitespace-nowrap py-4 max-w-7xl w-full">
              <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
                <div className="size-6 text-accent">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                    <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Losos4</h2>
              </div>
              <div className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <Link className="text-sm font-medium leading-normal hover:text-accent transition-colors" href="/services">Services</Link>
                  <Link className="text-sm font-medium leading-normal hover:text-accent transition-colors" href="/projects">Projects</Link>
                  <Link className="text-sm font-medium leading-normal hover:text-accent transition-colors" href="/about">About</Link>
                  <Link className="text-sm font-medium leading-normal text-accent" href="/blog">Blog</Link>
                </div>
                <Link href="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 bg-accent text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                  <span className="truncate">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex justify-center py-12 md:py-20">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            <div className="w-full max-w-4xl mx-auto">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Link className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal hover:text-accent transition-colors" href="/">Home</Link>
                <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">/</span>
                <Link className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal hover:text-accent transition-colors" href="/blog">Blog</Link>
                <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">/</span>
                <span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal truncate">{post.title}</span>
              </div>

              {/* Page Heading */}
              <div className="flex flex-col gap-4 mb-6">
                <p className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-bold leading-tight tracking-tighter">{post.title}</p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-lg font-normal leading-normal">{post.excerpt}</p>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-x-6 gap-y-2 flex-wrap border-y border-white/10 dark:border-black/10 py-4 mb-8 font-mono text-xs uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">
                <span>By {post.author}</span>
                <span className="hidden sm:inline">•</span>
                <span>{post.date}</span>
                <span className="hidden sm:inline">•</span>
                <span>{post.readTime}</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-accent">{post.category}</span>
              </div>

              {/* Featured Image */}
              {post.featuredImage && (
                <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden mb-12 rounded-lg" style={{ minHeight: 480, backgroundImage: `url("${post.featuredImage}")` }} data-alt={post.title}></div>
              )}

              {/* Article + Sidebar grid */}
              <div className="grid grid-cols-12 gap-x-12">
                <article className="col-span-12 lg:col-span-8 prose dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-accent hover:prose-a:underline prose-p:text-text-muted-light dark:prose-p:text-text-muted-dark">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  <div className="flex items-center gap-4 pt-8">
                    <span className="font-mono text-xs uppercase text-text-muted-light dark:text-text-muted-dark">Share:</span>
                    <div className="flex gap-2">
                      <a className="flex items-center justify-center size-8 rounded border border-white/10 dark:border-black/10 hover:bg-accent hover:text-background-dark transition-colors" href="#"><span className="material-symbols-outlined text-lg">share</span></a>
                      <a className="flex items-center justify-center size-8 rounded border border-white/10 dark:border-black/10 hover:bg-accent hover:text-background-dark transition-colors" href="#"><span className="material-symbols-outlined text-lg">link</span></a>
                    </div>
                  </div>
                </article>

                {/* Sidebar */}
                <aside className="col-span-12 lg:col-span-4 mt-12 lg:mt-0">
                  <div className="sticky top-28">
                    <div className="mb-12">
                      <h3 className="font-bold text-xl mb-4 tracking-tight">Further Reading</h3>
                      <div className="flex flex-col gap-6">
                        {/* Static recommendations for now */}
                        <Link href="/blog/sustainable-civil-engineering" className="group flex items-start gap-4">
                          <img className="size-20 object-cover rounded flex-shrink-0" src="/logo.png" alt="" />
                          <div>
                            <p className="font-mono text-xs text-accent mb-1">Civil Engineering</p>
                            <p className="font-bold leading-tight group-hover:underline">{post.title}</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="border-t border-white/10 dark:border-black/10 pt-8">
                      <h3 className="font-bold text-xl mb-3 tracking-tight">Join our Professional Briefing</h3>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">Get the latest insights from our experts delivered to your inbox.</p>
                      <form className="flex flex-col gap-3">
                        <input className="w-full h-10 px-3 bg-background-light dark:bg-background-dark border border-white/20 dark:border-black/20 rounded focus:ring-accent focus:border-accent" placeholder="your.email@company.com" type="email" />
                        <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 bg-accent text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity" type="submit">
                          <span className="truncate">Subscribe</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-background-dark text-background-light mt-20">
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex justify-center py-16">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-1">
                <div className="flex items-center gap-4 text-white">
                  <div className="size-6 text-accent">
                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"></path>
                      <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Losos4</h2>
                </div>
                <p className="mt-4 text-sm text-text-muted-dark">Engineering the future with precision and sustainable innovation.</p>
              </div>
              <div className="md:col-span-1">
                <h4 className="font-bold mb-4 text-text-muted-dark font-mono uppercase tracking-wider text-sm">Links</h4>
                <ul className="space-y-3 text-white">
                  <Link className="hover:text-accent transition-colors" href="/about">About Us</Link>
                  <Link className="hover:text-accent transition-colors" href="/services">Services</Link>
                  <Link className="hover:text-accent transition-colors" href="/projects">Projects</Link>
                  <Link className="hover:text-accent transition-colors" href="/contact">Contact</Link>
                </ul>
              </div>
              <div className="md:col-span-1">
                <h4 className="font-bold mb-4 text-text-muted-dark font-mono uppercase tracking-wider text-sm">Contact</h4>
                <ul className="space-y-3 text-white">
                  <li><a className="hover:text-accent transition-colors" href="mailto:info@consulting.com">info@consulting.com</a></li>
                  <li><a className="hover:text-accent transition-colors" href="tel:+1234567890">+1 (234) 567-890</a></li>
                  <li><p>123 Engineering Way, Innovation City, 45678</p></li>
                </ul>
              </div>
              <div className="md:col-span-1">
                <h4 className="font-bold mb-4 text-text-muted-dark font-mono uppercase tracking-wider text-sm">Follow Us</h4>
                <div className="flex gap-4">
                  <a className="text-white hover:text-accent transition-colors" href="#">LinkedIn</a>
                  <a className="text-white hover:text-accent transition-colors" href="#">Twitter</a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex justify-center py-6 border-t border-white/10">
            <div className="max-w-7xl w-full flex justify-between items-center text-sm text-text-muted-dark">
              <p>© 2024 Losos4. All Rights Reserved.</p>
              <Link className="hover:text-accent transition-colors" href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    )
  }
