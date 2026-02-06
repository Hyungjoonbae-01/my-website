"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  active: boolean;
  mode: "type" | "delete";
  speed?: number;
  onDone?: () => void;
};

export default function Typewriter({
  text,
  active,
  mode,
  speed = 60,
  onDone,
}: Props) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) return;

    let timeout: NodeJS.Timeout;

    if (mode === "type" && displayed.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
    }

    if (mode === "delete" && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length - 1));
      }, speed);
    }

    if (
      (mode === "type" && displayed.length === text.length) ||
      (mode === "delete" && displayed.length === 0)
    ) {
      onDone?.();
    }

    return () => clearTimeout(timeout);
  }, [active, displayed, mode, text, speed, onDone]);

  return <span>{displayed}</span>;
}
