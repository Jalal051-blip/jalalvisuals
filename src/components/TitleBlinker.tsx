"use client";
import { useEffect } from "react";

const ORIGINAL_TITLE = "JalalVisuals | Videograf & Fotograf";
const MESSAGES = ["Jalal savner dig 👋", "Kommer du tilbage? 🎬"];

export default function TitleBlinker() {
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    let index = 0;

    const onHide = () => {
      index = 0;
      document.title = MESSAGES[index];
      interval = setInterval(() => {
        index = (index + 1) % MESSAGES.length;
        document.title = MESSAGES[index];
      }, 4000);
    };

    const onShow = () => {
      if (interval) clearInterval(interval);
      document.title = ORIGINAL_TITLE;
    };

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) onHide();
      else onShow();
    });

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return null;
}
