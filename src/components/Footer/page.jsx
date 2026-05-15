// src/components/Footer/page.jsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        
        {/* Top Footer */}
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white font-bold">
                C
              </div>

              <h2 className="text-2xl font-bold text-gray-900">
                CarHub
              </h2>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              Discover premium new and used cars with a smooth
              and modern car buying experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-black"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/new-cars"
                  className="transition hover:text-black"
                >
                  New Cars
                </Link>
              </li>

              <li>
                <Link
                  href="/used-cars"
                  className="transition hover:text-black"
                >
                  Used Cars
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-black"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="transition hover:text-black"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="transition hover:text-black"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/support"
                  className="transition hover:text-black"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Newsletter
            </h3>

            <p className="mt-4 text-sm text-gray-600">
              Subscribe to get updates about new cars and offers.
            </p>

            <form className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />

              <button
                type="submit"
                className="rounded-xl bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row">
          
          <p>
            © {new Date().getFullYear()} CarHub. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-black transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-black transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}