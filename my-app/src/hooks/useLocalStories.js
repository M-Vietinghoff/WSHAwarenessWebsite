import { useState, useEffect } from "react";

/* localStorage key */
const KEY = "stories";

export default function useLocalStories() {
  const [stories, setStories] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(stories));
  }, [stories]);

  return [stories, setStories];
}
