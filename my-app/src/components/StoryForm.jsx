import { useEffect, useState } from "react";
import findNearby from "../utils/findNearby";

export default function StoryForm({ coords, stories, setStories, onSaved }) {
  const [nearby, setNearby] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    setNearby(findNearby(coords, 30));
  }, [coords]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    setStories([
      ...stories,
      {
        id: crypto.randomUUID(),
        lat: Number(coords.lat.toFixed(4)),
        lng: Number(coords.lng.toFixed(4)),
        text: text.trim(),
        created: Date.now(),
      },
    ]);

    onSaved();
  }

  return (
    <>
      <h2 className="sf-title">Add Your Story</h2>

      <ol className="sf-steps">
        <li>Share your story in the box below.</li>
        <li>Press <b>Add</b>.</li>
      </ol>

      <form onSubmit={handleSubmit}>
        <textarea
          className="sf-textarea"
          placeholder="Describe what happened…"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {nearby.length > 0 && (
          <div className="sf-resources">
            <h3>Resources near you (≤ 30 km)</h3>
            <ul>
              {nearby.map((r) => (
                <li key={r.name}>
                  <a href={r.url} target="_blank" rel="noreferrer">
                    {r.name}
                  </a>{" "}
                  · {r.phone}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button type="submit" className="sf-add">
          ADD
        </button>
      </form>
    </>
  );
}
