"use client";

import { useEffect } from "react";

const fallbackImages = [
  "/ban-bang-khen.jpg",
  "/1726734267746-AW_--04.jpg",
  "/145371640_10220381210983902_3102347665599560609_n.jpg",
  "/487312831_1113572637481069_4899296262058780294_n.jpg",
  "/50958910_10156358334558650_5607502554263977984_n.jpg",
  "/7f3962d8-8b7e-46cd-aadd-49160fbf45d6.jpg",
];

function fallbackFor(image: HTMLImageElement) {
  const galleryIndex = image.alt.match(/gallery-(\d+)/i)?.[1];
  if (galleryIndex !== undefined) {
    return fallbackImages[Number(galleryIndex) % fallbackImages.length];
  }

  const text = image.alt.toLowerCase();
  if (text.includes("park") || text.includes("lake") || text.includes("cycling")) {
    return "/ban-bang-khen.jpg";
  }

  return "/1726734267746-AW_--04.jpg";
}

/** Replaces photos blocked by an external image host with bundled local images. */
export default function ImageFallback() {
  useEffect(() => {
    const replaceBrokenImage = (event: Event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied) return;

      image.dataset.fallbackApplied = "true";
      image.src = fallbackFor(image);
    };

    document.addEventListener("error", replaceBrokenImage, true);
    return () => document.removeEventListener("error", replaceBrokenImage, true);
  }, []);

  return null;
}
