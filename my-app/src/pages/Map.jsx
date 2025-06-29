import { useState } from "react";
import MapNovaScotia from "../features/MapNovaScotia";
import Drawer from "../components/Drawer";
import StoryForm from "../components/StoryForm";
import HideMe from "../components/HideMe";
import useLocalStories from "../hooks/useLocalStories";

export default function MapPage() {
  const [stories, setStories] = useLocalStories();

  const [coords, setCoords] = useState(null);  // null → still choosing
  const [open, setOpen]     = useState(false);

  /* press + : open drawer (no backdrop) */
  const startAdd = () => { setOpen(true); setCoords(null); };

  /* click map: choose point, enable backdrop */
  const handleMapClick = (latlng) => {
    if (!open) return;             // ignore random clicks
    setCoords(latlng);
  };

  const closeDrawer = () => { setOpen(false); setCoords(null); };

  /* backdrop only after coords selected */
  const hasBackdrop = coords !== null;

  return (
    <>
      <MapNovaScotia onClickPoint={handleMapClick}
                     chosen={coords}
                     stories={stories} />

      <button className="fab-plus" onClick={startAdd} title="Add story">+</button>
      <HideMe />

      <Drawer open={open} close={closeDrawer} hasBackdrop={hasBackdrop}>
        {coords === null ? (
          <p style={{ marginTop: 40 }}>
            <b>Step&nbsp;1:</b>&nbsp;Click the map where your story happened.<br />
            (Esc or “×” cancels)
          </p>
        ) : (
          <StoryForm
            coords={coords}
            stories={stories}
            setStories={setStories}
            onSaved={closeDrawer}
          />
        )}
      </Drawer>
    </>
  );
}
