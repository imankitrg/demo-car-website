// src/components/Footer/page.jsx
import Link from "next/link";
import { siFacebook, siInstagram, siYoutube, siIndieweb } from "simple-icons";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/democar",
      icon: siFacebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/democar",
      icon: siInstagram,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/democar",
      icon: siYoutube,
    },
    {
      name: "Website",
      href: "/",
      icon: siIndieweb,
    },
  ];

  return (
    <footer className="bg-[#0b0d1a] pt-24 pb-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        {/* TOP FOOTER */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 pb-16 border-b border-white/5">
          {/* BRAND */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-xl font-black text-white shadow-lg shadow-blue-500/20">
                D
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                democar
              </span>
            </Link>
            <p className="mt-8 text-base leading-relaxed text-white/40">
              The premier destination for luxury automotive sourcing, verified
              used vehicles, and seamless sales experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={`Visit democar ${name}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* LINKS COLUMNS */}
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-3 lg:col-span-3">
            <div className="hidden sm:block" />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Catalog
              </h3>
              <ul className="mt-8 space-y-4 text-sm font-medium text-white/40">
                <li>
                  <Link
                    href="/car"
                    className="hover:text-indigo-400 transition"
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/car"
                    className="hover:text-indigo-400 transition"
                  >
                    Verified Used
                  </Link>
                </li>
                <li>
                  <Link
                    href="/car"
                    className="hover:text-indigo-400 transition"
                  >
                    Electric Fleet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/car"
                    className="hover:text-indigo-400 transition"
                  >
                    Limited Editions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Services
              </h3>
              <ul className="mt-8 space-y-4 text-sm font-medium text-white/40">
                <li>
                  <Link
                    href="/finance"
                    className="hover:text-indigo-400 transition"
                  >
                    Elite Financing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insurance"
                    className="hover:text-indigo-400 transition"
                  >
                    Premium Coverage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/concierge"
                    className="hover:text-indigo-400 transition"
                  >
                    Concierge Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trade-in"
                    className="hover:text-indigo-400 transition"
                  >
                    Instant Valuation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs font-medium text-white/20">
            © {new Date().getFullYear()} democar Automotive Group. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs font-bold uppercase tracking-widest text-white/20">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
