import React from "react";
import { Route, Routes } from "react-router-dom";
import ListingDetail from "./pages/ListingDetail";
import Listings from "./pages/Listings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Listings />} />
      <Route path="/:id" element={<ListingDetail />} />
    </Routes>
  );
}

export default App;
