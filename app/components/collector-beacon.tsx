"use client";

import { useEffect } from "react";

type LocationPayload = {
  latitude: number;
  longitude: number;
  accuracy: number;
} | null;

type ClientPayload = {
  userAgent: string;
  language: string;
  languages: readonly string[];
  timezone: string;
  platform: string;
  screen: {
    width: number;
    height: number;
    colorDepth: number;
    pixelRatio: number;
  };
  currentUrl: string;
  referrer: string;
  location: LocationPayload;
  locationError: string | null;
  timestamp: string;
};

function getGeolocation(): Promise<{ location: LocationPayload; locationError: string | null }> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      resolve({ location: null, locationError: "geolocation_not_supported" });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
          },
          locationError: null
        });
      },
      (error) => {
        resolve({ location: null, locationError: error.message || "geolocation_error" });
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 60000
      }
    );
  });
}

async function collectAndSend() {
  const geo = await getGeolocation();

  const payload: ClientPayload = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    languages: navigator.languages,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    platform: navigator.platform,
    screen: {
      width: window.screen.width,
      height: window.screen.height,
      colorDepth: window.screen.colorDepth,
      pixelRatio: window.devicePixelRatio
    },
    currentUrl: window.location.href,
    referrer: document.referrer,
    location: geo.location,
    locationError: geo.locationError,
    timestamp: new Date().toISOString()
  };

  try {
    await fetch("/api/collect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
      keepalive: true
    });
  } catch {
    // Intentionally ignore to keep the page silent.
  }
}

export function CollectorBeacon() {
  useEffect(() => {
    void collectAndSend();
  }, []);

  return null;
}
