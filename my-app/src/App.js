import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Map from "./pages/Map"; // renamed for clarity but not required
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import UpcomingEvents from "./pages/UpcomingEvents";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/map" element={<Map />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
