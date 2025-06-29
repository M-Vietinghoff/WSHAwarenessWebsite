import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Map from "./pages/Map"; // renamed for clarity but not required
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ContactUs from "./pages/ContactUs";
import UpcomingEvents from "./pages/UpcomingEvents";
import HideMe from "./components/HideMe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HideMe />
      <main>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/map" element={<Map />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
