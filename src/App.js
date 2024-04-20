import logo from './logo.svg';
import './App.css';
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Post />} />
      <Route path="/blog" element={<Post />} />
         
      {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
