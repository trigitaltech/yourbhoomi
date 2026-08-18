import Link from "next/link";

export function LegalConsent() {
  return (
    <label className="flex items-start gap-2 text-xs text-ink-2">
      <input type="checkbox" required name="legal" className="mt-0.5 accent-[var(--stamp)]" />
      <span>
        I agree to the{" "}
        <Link href="/privacy" className="text-stamp underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="text-stamp underline">
          Terms and Conditions
        </Link>
        .
      </span>
    </label>
  );
}
