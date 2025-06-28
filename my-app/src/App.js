import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Map from "./pages/Map";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost"; 
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* Main content area */}
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Map />} /> {/* default */}
          <Route path="/map" element={<Map />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} /> 
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;