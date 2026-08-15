import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-cream">
            Your <span className="text-gold">Bhoomi</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            Land security and ancestral transfer for families who live far from
            the plot — but never far from the land.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-medium text-cream">Visit</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/services/watch" className="hover:text-gold">
                Bhoomi Watch
              </Link>
            </li>
            <li>
              <Link href="/properties" className="hover:text-gold">
                Featured properties
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-medium text-cream">Hyderabad HQ</p>
          <p className="mt-3">
            Banjara Hills, Hyderabad
            <br />
            +91 40 4000 1200
            <br />
            hello@yourbhoomi.in
          </p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} Your Bhoomi. All rights reserved.
      </p>
    </footer>
  );
}
