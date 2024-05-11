import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import FavoritePage from "./pages/FavoritePage";
import Layout from "./layouts/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favorite" element={<FavoritePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
