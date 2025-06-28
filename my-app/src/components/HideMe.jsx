export default function HideMe() {
  const safeURL = "https://weather.gc.ca/en/location/index.html?coords=44.649,-63.602";
  return (
    <button
      className="hide-me-btn"
      onClick={() => {
        window.open(safeURL, "_blank");
        window.location.replace("https://youtube.com");
      }}
    >
      Hide&nbsp;Me
    </button>
  );
}
