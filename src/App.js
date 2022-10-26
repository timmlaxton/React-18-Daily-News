import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contacts";
import Posts from "./components/posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="article/id" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
