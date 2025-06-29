import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import candlePng from "../assets/Candle.png";   // adjust path or filename

/* one custom icon, created once */
const candleIcon = new L.Icon({
  iconUrl: candlePng,
  iconSize:   [28, 48],   // w × h  — tweak to taste
  iconAnchor: [14, 48],   // tip of candle sits on the coordinate
  popupAnchor:[0, -48],
  className:  "candle-marker"    // lets us style :hover in CSS
});

export default function MapNovaScotia({ onClickPoint, chosen, stories }) {
  const [draft, setDraft] = useState(null);

  /* map click handler */
  function ClickSelect() {
    useMapEvents({
      click(e) {
        setDraft(e.latlng);
        onClickPoint(e.latlng);
      },
    });
    return null;
  }

  return (
    <MapContainer
      key="nova-scotia-map" // Add this key to prevent reinitialization
      center={[44.65, -63.57]}   /* Halifax */
      zoom={7}
      minZoom={6}
      maxBounds={[
        [43.3, -66.5],
        [47.2, -59.5],
      ]}
      style={{
        marginTop: "var(--hdr-h)",
        height: "calc(100vh - var(--hdr-h))",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ClickSelect />

      {/* preview pin while user is choosing */}
      {draft && !chosen && (
        <Marker position={[draft.lat, draft.lng]} icon={candleIcon} />
      )}

      {/* saved markers */}
      {stories.map((s) => (
        <Marker
          key={s.id}
          position={[s.lat, s.lng]}
          icon={candleIcon}
        >
          <Popup maxWidth={220}>{s.text.slice(0, 120)}…</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}