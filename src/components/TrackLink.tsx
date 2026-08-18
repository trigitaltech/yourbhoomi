"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { track } from "@/lib/analytics";

/** next/link that fires an analytics event on click. */
export function TrackLink({ event, onClick, ...props }: ComponentProps<typeof Link> & { event: string }) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        track(event);
        onClick?.(e);
      }}
    />
  );
}
