import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container section max-w-lg text-center">
      <h1 className="text-2xl">This plot is not on the map</h1>
      <p className="mt-3 text-ink-2">The page you asked for is not here.</p>
      <Link href="/" className="btn btn-outline mt-8">
        Back to Your Bhoomi
      </Link>
    </div>
  );
}
