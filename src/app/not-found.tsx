import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 pt-36 pb-24 text-center">
      <h1 className="font-serif text-4xl text-navy">This plot is not on the map</h1>
      <p className="mt-3 text-muted">The page you asked for is not here.</p>
      <Link href="/" className="mt-8 inline-block text-green underline">
        Back to Your Bhoomi
      </Link>
    </div>
  );
}
