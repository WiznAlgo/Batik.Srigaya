import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Lookbook from "./pages/Lookbook";
import Collections from "./pages/Collections";
import Process from "./pages/Process";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="lookbook" element={<Lookbook />} />
          <Route path="collections" element={<Collections />} />
          <Route path="process" element={<Process />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}