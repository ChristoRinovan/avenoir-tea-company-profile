import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Teams from "./pages/Teams";
import BlogList from "./pages/BlogList";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Products />} />
          <Route path="teams" element={<Teams />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);