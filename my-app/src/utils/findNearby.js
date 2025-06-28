import * as turf from "@turf/turf";
import RESOURCES from "../data/ns-resources.json"; // adjust if you placed JSON elsewhere

/**
 * Return all resources within `radiusKm` of {lat,lng}
 */
export default function findNearby({ lat, lng }, radiusKm = 30) {
  const origin = turf.point([lng, lat]);

  return RESOURCES.filter((r) => {
    const dist = turf.distance(origin, turf.point([r.lng, r.lat]), {
      units: "kilometers",
    });
    return dist <= radiusKm;
  });
}
