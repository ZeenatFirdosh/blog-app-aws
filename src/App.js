import './App.css';
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import DetailPage from './components/DetailPage';
import BlogPostForm from './components/BlogPostForm';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Post />} />
      <Route path="/blog" element={<Post />} />         
      {/* <Route path="/createblog" element={<BlogPostForm />} />          */}
      <Route path="/detail/:id" element={<DetailPage />} />
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
