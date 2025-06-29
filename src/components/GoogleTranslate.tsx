"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google: any;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    const addTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };    
    };

    if (!window.googleTranslateElementInit) {
      addTranslateScript();
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="fixed top-2 right-2 h-8 text-xs overflow-hidden z-50 bg-white/80 px-2 py-1 rounded shadow"
    />
  );
}
