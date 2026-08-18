"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

// Fires one analytics event when a server-rendered page mounts.
export function TrackView({ event }: { event: string }) {
  useEffect(() => {
    track(event);
  }, [event]);
  return null;
}
