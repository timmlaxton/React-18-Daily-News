import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contacts";
import Posts from "./components/posts";
import Header from "./components/header";
import MainLayout from "./layouts/mainLayout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="article/id" element={<Posts />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
